/**
 * API v1.0
 * API version 1.0.
 *
 * The version of the OpenAPI document: v1
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
    instance = new ApiV10.PostTrackableLog();
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

  describe('PostTrackableLog', function() {
    it('should create an instance of PostTrackableLog', function() {
      // uncomment below and update the code to test PostTrackableLog
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be.a(ApiV10.PostTrackableLog);
    });

    it('should have the property coordinates (base name: "coordinates")', function() {
      // uncomment below and update the code to test the property coordinates
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property geocacheCode (base name: "geocacheCode")', function() {
      // uncomment below and update the code to test the property geocacheCode
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property isRot13Encoded (base name: "isRot13Encoded")', function() {
      // uncomment below and update the code to test the property isRot13Encoded
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property loggedDate (base name: "loggedDate")', function() {
      // uncomment below and update the code to test the property loggedDate
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property trackableCode (base name: "trackableCode")', function() {
      // uncomment below and update the code to test the property trackableCode
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property trackableLogType (base name: "trackableLogType")', function() {
      // uncomment below and update the code to test the property trackableLogType
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "typeId")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new ApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

  });

}));
