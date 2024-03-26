const puppeteer = require("puppeteer");

const startPuppeteer = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  return { browser, page };
};

const endPuppeteer = async (browser) => {
  await browser.close();
};

module.exports = { startPuppeteer, endPuppeteer };
