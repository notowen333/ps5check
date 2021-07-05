/**
 * Each key has a value of <Array<string>>
 */
const websites = {
    target: [
        'https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596',
        'https://www.target.com/p/playstation-5-console/-/A-81114595'
    ],
    amazon: [
        'https://www.amazon.com/PlayStation-5-Digital/dp/B08FC6MR62/ref=sr_1_2?dchild=1&keywords=ps5+digital&qid=1625415741&sr=8-2'
    ],
    psDirect: [
        'https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816',
        'https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817'
    ],
}

/**
 * Each pattern has a value of <RegExp>
 */
const patterns = {
    target: /Sold out/,
    amazon: /Currently unavailable\./,
    psDirect: /Out of Stock/,
}

module.exports = { websites: websites, patterns: patterns }

