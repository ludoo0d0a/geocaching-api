/**
 * Geocaching API v1.0
 * Geocaching API version 1.0.
 *
 * OpenAPI spec version: v1
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GeocachingApiV10);
  }
}(this, function(expect, GeocachingApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GeocachingApiV10.PostTrackableLog();
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
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be.a(GeocachingApiV10.PostTrackableLog);
    });

    it('should have the property trackingNumber (base name: "trackingNumber")', function() {
      // uncomment below and update the code to test the property trackingNumber
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property trackableCode (base name: "trackableCode")', function() {
      // uncomment below and update the code to test the property trackableCode
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property geocacheCode (base name: "geocacheCode")', function() {
      // uncomment below and update the code to test the property geocacheCode
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property loggedDate (base name: "loggedDate")', function() {
      // uncomment below and update the code to test the property loggedDate
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property isRot13Encoded (base name: "isRot13Encoded")', function() {
      // uncomment below and update the code to test the property isRot13Encoded
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "typeId")', function() {
      // uncomment below and update the code to test the property typeId
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property trackableLogType (base name: "trackableLogType")', function() {
      // uncomment below and update the code to test the property trackableLogType
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

    it('should have the property coordinates (base name: "coordinates")', function() {
      // uncomment below and update the code to test the property coordinates
      //var instance = new GeocachingApiV10.PostTrackableLog();
      //expect(instance).to.be();
    });

  });

}));