const cheerio = require('cheerio');
const fetch = require('node-fetch');
var iconv = require('iconv-lite');

fetch("http://www.sis.itu.edu.tr/tr/ders_programlari/LSprogramlar/prg.php?fb=ATA")
.then(res => res.arrayBuffer())
      .then(arrayBuffer => iconv.decode(Buffer.from(arrayBuffer), 'windows-1254').toString())
      .then(converted => evalRes(converted))

let evalRes = (res) => {
    //console.log(res);
    const $ = cheerio.load(res);
    let rows = $('tr[onmouseover="this.bgColor=\'#D4E6FD\'"]');
    for (let j = 0; j < rows.length; j++) {
        const row = rows[j];
        console.log("================================")
        for (let i = 0; i < row.children.length; i++) {
            const cell = row.children[i];
            console.log($(element).text());
        }
    }
}