/**
 * API v1.0
 * API version 1.0.
 *
 * The version of the OpenAPI document: 1.0.0-oas3
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiV10);
  }
}(this, function(expect, ApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiV10.GeocacheLimit();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GeocacheLimit', function() {
    it('should create an instance of GeocacheLimit', function() {
      // uncomment below and update the code to test GeocacheLimit
      //var instane = new ApiV10.GeocacheLimit();
      //expect(instance).to.be.a(ApiV10.GeocacheLimit);
    });

    it('should have the property liteCallsRemaining (base name: "liteCallsRemaining")', function() {
      // uncomment below and update the code to test the property liteCallsRemaining
      //var instane = new ApiV10.GeocacheLimit();
      //expect(instance).to.be();
    });

    it('should have the property liteCallsSecondsToLive (base name: "liteCallsSecondsToLive")', function() {
      // uncomment below and update the code to test the property liteCallsSecondsToLive
      //var instane = new ApiV10.GeocacheLimit();
      //expect(instance).to.be();
    });

    it('should have the property fullCallsRemaining (base name: "fullCallsRemaining")', function() {
      // uncomment below and update the code to test the property fullCallsRemaining
      //var instane = new ApiV10.GeocacheLimit();
      //expect(instance).to.be();
    });

    it('should have the property fullCallsSecondsToLive (base name: "fullCallsSecondsToLive")', function() {
      // uncomment below and update the code to test the property fullCallsSecondsToLive
      //var instane = new ApiV10.GeocacheLimit();
      //expect(instance).to.be();
    });

  });

}));
