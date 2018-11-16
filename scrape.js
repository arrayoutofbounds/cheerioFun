const request = require("request");
const cheerio = require("cheerio");

request('http://arrayoutofbounds.github.io/', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);

        //const introText = $('.intro-text');

        //console.log(introText.text());

        //const output = introText.find('span').text();

        $('.portfolio-item a').each((index, el) => {
            const item = $(el).find('.caption .caption-content p').text();
            const href =$(el).attr('href');
            console.log(href);
        })

    }
})