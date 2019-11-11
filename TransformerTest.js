var t = require("./Transformer.js")
var e= require("./Extractor.js")
const fs = require ('fs');

extract = new e.Extractor();
transform = new t.Transform()

function test(){
    const readable = fs.createReadStream('RelExtraPorPeriodo.csv');
    var entryList = extract.extrator(readable);
    console.log(entryList.length)
    const assert = require('assert');
    
    var workDay = transform.Transform(entryList);
    assert.notEqual(workDay, null)
    assert.equal(workDay, 72)
}
test()