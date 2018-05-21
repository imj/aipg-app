const lunr = require('lunr');
const data = require('../src/Contents/search-index.json');


var idx = lunr.Index.load(data)

console.log(idx.search('Hidden Cards'));