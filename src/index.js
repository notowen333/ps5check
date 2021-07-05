require('dotenv').config(); // set the Twilio environment variables
const puppet = require('puppeteer');
const checkRoutine = require('./checkRoutine');
const c = require('./constants');
const { exec } = require('child_process');

/**
 * counts how many sites we are checking for a ps5
 * @returns {int}
 */
function countSites() {
    let ct = 0
    for (let v of Object.values(c.websites)) {
        for (let url of v) {
            ct += 1
        }
    }
    return ct
}


/**
 * Root of our app. Call to run.
 */
async function main() {

    // keep track of how long our app takes to run
    console.time('executionTime');

    // here's our headless browser
    const browser = await puppet.launch();

    // all the retailers we want to check
    const target = await browser.newPage();
    const amazon = await browser.newPage();
    const psDirect = await browser.newPage();

    // check the sites for each retailer
    let targetRes = await checkRoutine.checkSite(target, c.websites.target, c.patterns.target);
    let amazonRes = await checkRoutine.checkSite(amazon, c.websites.amazon, c.patterns.amazon);
    let psDirectRes = await checkRoutine.checkSite(psDirect, c.websites.psDirect, c.patterns.psDirect);

    // if we have a result send a message to yourself with the URL of the available ps5
    var results = [targetRes, amazonRes, psDirectRes]
    for (let res of results) {
        if (res == true) {
            exec(`node sendSMS.js ${res}`); // send yourself a message with the available URL
        }
    }
    // kill puppet
    await browser.close();

    // console log runtime
    let ct = countSites()
    console.log(`CHECKED ${ct} WEBSITES IN:`);
    console.timeEnd('executionTime');

    // kill app
    process.exit();
}

// run app
main();
