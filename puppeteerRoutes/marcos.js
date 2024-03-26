const { startPuppeteer, endPuppeteer } = require("../utils/puppeteerUtils");

const scrapeMarcos = async () => {
    const { browser, page } = await startPuppeteer();

    try {
        
    } catch (error) {

    } finally {
        await endPuppeteer(browser);
    }
};

module.exports = { scrapeMarcos };
