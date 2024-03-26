const { startPuppeteer, endPuppeteer } = require("../utils/puppeteerUtils");

const scrapeMarcos = async (zipCode) => {
  const { browser, page } = await startPuppeteer();

  try {
    // ! Go to the search store page
    console.log("Navigating to the search store page...");
    await page.goto("https://order.marcos.com/brand/?sk=LPHP3Y/locations");
    // ! Grab the search input
    const locationInputSelector =
      "input.#txt_locations_search.width100.pac-target-input";
    // ? Wait for the search input to appear
    console.log("Waiting for the search input...");
    await page.waitForSelector(locationInputSelector, { timeout: 10000 });
    // ! Type in the zip code
    console.log("Typing in the zip code...");
    await page.type(locationInputSelector, `${zipCode}`);
    // ! Press enter
    console.log("Pressing 'Enter'...");
    await page.keyboard.press("Enter");
    // ? Wait for order buttons to appear
    console.log("Waiting for order buttons...");
    await page.waitForSelector(".orderButton");
    // ! Click on the first "Start Order" button
    console.log("Clicking on the first 'Start Order' button...");
    await page.click(".orderButton:first-of-type");

    console.log("Script ended");
  } catch (error) {
  } finally {
    await endPuppeteer(browser);
  }
};

scrapeMarcos(27707);

module.exports = { scrapeMarcos };
