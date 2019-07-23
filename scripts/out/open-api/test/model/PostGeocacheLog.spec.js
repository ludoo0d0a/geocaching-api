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
    instance = new ApiV10.PostGeocacheLog();
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

  describe('PostGeocacheLog', function() {
    it('should create an instance of PostGeocacheLog', function() {
      // uncomment below and update the code to test PostGeocacheLog
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be.a(ApiV10.PostGeocacheLog);
    });

    it('should have the property loggedDate (base name: "loggedDate")', function() {
      // uncomment below and update the code to test the property loggedDate
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be();
    });

    it('should have the property geocacheLogType (base name: "geocacheLogType")', function() {
      // uncomment below and update the code to test the property geocacheLogType
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be();
    });

    it('should have the property updatedCoordinates (base name: "updatedCoordinates")', function() {
      // uncomment below and update the code to test the property updatedCoordinates
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be();
    });

    it('should have the property geocacheCode (base name: "geocacheCode")', function() {
      // uncomment below and update the code to test the property geocacheCode
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be();
    });

    it('should have the property usedFavoritePoint (base name: "usedFavoritePoint")', function() {
      // uncomment below and update the code to test the property usedFavoritePoint
      //var instane = new ApiV10.PostGeocacheLog();
      //expect(instance).to.be();
    });

  });

}));