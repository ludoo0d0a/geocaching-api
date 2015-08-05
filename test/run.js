var Mocha = require('mocha'); 

var mocha = new Mocha();
mocha.addFile('api-test.js'); 
mocha.run();