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
    instance = new ApiV10.HQPromotionMetadata();
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

  describe('HQPromotionMetadata', function() {
    it('should create an instance of HQPromotionMetadata', function() {
      // uncomment below and update the code to test HQPromotionMetadata
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be.a(ApiV10.HQPromotionMetadata);
    });

    it('should have the property pageTitle (base name: "pageTitle")', function() {
      // uncomment below and update the code to test the property pageTitle
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

    it('should have the property linkText (base name: "linkText")', function() {
      // uncomment below and update the code to test the property linkText
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

    it('should have the property linkSubText (base name: "linkSubText")', function() {
      // uncomment below and update the code to test the property linkSubText
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

    it('should have the property iconData (base name: "iconData")', function() {
      // uncomment below and update the code to test the property iconData
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

    it('should have the property relativeUrl (base name: "relativeUrl")', function() {
      // uncomment below and update the code to test the property relativeUrl
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

    it('should have the property campaignId (base name: "campaignId")', function() {
      // uncomment below and update the code to test the property campaignId
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

    it('should have the property linkVisibleStartDateUtc (base name: "linkVisibleStartDateUtc")', function() {
      // uncomment below and update the code to test the property linkVisibleStartDateUtc
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

    it('should have the property linkVisibleEndDateUtc (base name: "linkVisibleEndDateUtc")', function() {
      // uncomment below and update the code to test the property linkVisibleEndDateUtc
      //var instane = new ApiV10.HQPromotionMetadata();
      //expect(instance).to.be();
    });

  });

}));
