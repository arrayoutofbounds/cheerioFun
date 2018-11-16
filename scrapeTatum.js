const request = require("request");
const cheerio = require("cheerio");

request('https://www.basketball-reference.com/players/t/', (error, response, html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);

        const values = $(`th[data-stat='player']`).map((index, el) => {
            const item = $(el).find(`strong a`).text();
            const href = $(el).find(`strong a`).attr('href');
            if(item !== undefined && href !== undefined){
                return `${item} ${href}`;
            }
        }).get();
        console.log(values);
    }else{
        console.log("error", error);
    }
})