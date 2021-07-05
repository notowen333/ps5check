const { Puppeteer } = require('puppeteer');
const c = require('./constants');

/**
 * called after the page is finished loading. Searches the HTML content of a page
 * for the given regex pattern. Returns true if it doesn't find the regex pattern that occurs
 * on the out of stock page.
 * 
 * @param {puppet.Page} page the page to search
 * @param {RegExp} regex pattern to search for
 * @returns {boolean}
 */
async function searchHTMLContent(page, regex) {
    let res = (await page.content()).search(regex);
    if (res == -1) {
        console.log('ps5 in stock!')
        return true
    }
    else {
        return false
    }

}

module.exports = {


    checkSite: 
    /**
     * Generalized search for sold out ps5
     * 
     * @param {puppet.Page} page The page the browser loaded
     * @param {Array<string>} urls  The urls for this retailer
     * @param {RegExp} pattern The regular expression that indicates sold out
     * @returns 
     */
    async function checkSite(page, urls, pattern) {

        for (let url of urls) {
            await page.goto(url, { waitUntil: 'networkidle0' });
            if ( await searchHTMLContent(page, pattern)) {
                return url
            };
        }
        return false
    }
}

    


