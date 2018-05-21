const fs = require('fs');
const lunr = require('lunr');

const REGEX = /^\/\/ ?(.+)\n+([^]+)$/;

const files = fs.readdirSync(`${__dirname}/../contents`);


const idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    for(const file of files) {
        if(file === '.DS_Store') continue;

        console.log(file);


        let [, title, content] = fs.readFileSync(`${__dirname}/../contents/${file}`).toString().match(REGEX);

        // strip html
        content = content.replace(/<[^>]+>/g, '');

        this.add({
            id: file.replace('.html', ''),
            title: title,
            body: content
        });
    }
});

const output = JSON.stringify(idx);
fs.writeFileSync(`${__dirname}/../src/Contents/search-index.json`, output);
