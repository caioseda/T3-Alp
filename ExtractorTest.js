// Transformer = require("./Transformer.js")
var e= require("./Extractor.js")
const fs = require ('fs');

extract = new e.Extractor();

function test(){
    const readable = fs.createReadStream('RelExtraPorPeriodo.csv');
    var entryList = extract.extrator(readable);
    console.log(entryList.length)
    const assert = require('assert');
    assert.notEqual(entryList, null)
    assert.equal(entryList, 72)
}
test()