var Mocha = require('mocha'); 

var mocha = new Mocha();
//mocha.addFile('test/single-test.js');
mocha.addFile('test/api-search.js'); 
mocha.run();