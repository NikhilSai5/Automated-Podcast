const puppeteer = require('puppeteer')

async function scrape_through_link(url) {
    try {
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        const heading = await page.evaluate(() => {
            return document.querySelector('h1').textContent.trim();
        })
    
        const article = await page.evaluate(() => {
          const paras = document.querySelectorAll('p');
          const paragraphTexts = Array.from(paras).map(p => p.textContent.trim());
          return paragraphTexts;
        });
    
        await browser.close();
    
        return { articles: article, heading: heading || 'no heading found' };
      } catch (error) {
        console.error('Error:', error);
        throw new Error('Internal Server Error');
      }
}

module.exports = scrape_through_link;