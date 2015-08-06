var Mocha = require('mocha'); 

var mocha = new Mocha();
mocha.addFile('single-test.js'); 
mocha.run();