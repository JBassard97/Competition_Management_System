const axios = require("axios");
const cheerio = require("cheerio");

const fetchHTML = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Error fetching the page:", error);
    return null;
  }
};

function scrapeData(html) {
  const $ = cheerio.load(html);

}

async function main(url) {
  const html = await fetchHTML(url);

  if (html) {
    const data = scrapeData(html);
    console.log("Scraped data:", data);
  }
}

main("https://github.com/JBassard97");
