var Mocha = require('mocha'); 

var mocha = new Mocha();
//mocha.addFile('single-test.js');
mocha.addFile('api-search.js'); 
mocha.run();

//process.exit(1);