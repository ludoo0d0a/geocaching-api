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
    instance = new ApiV10.Geocache();
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

  describe('Geocache', function() {
    it('should create an instance of Geocache', function() {
      // uncomment below and update the code to test Geocache
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be.a(ApiV10.Geocache);
    });

    it('should have the property additionalWaypoints (base name: "additionalWaypoints")', function() {
      // uncomment below and update the code to test the property additionalWaypoints
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property backgroundImageUrl (base name: "backgroundImageUrl")', function() {
      // uncomment below and update the code to test the property backgroundImageUrl
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property containsHtml (base name: "containsHtml")', function() {
      // uncomment below and update the code to test the property containsHtml
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property difficulty (base name: "difficulty")', function() {
      // uncomment below and update the code to test the property difficulty
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property eventEndDate (base name: "eventEndDate")', function() {
      // uncomment below and update the code to test the property eventEndDate
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property favoritePoints (base name: "favoritePoints")', function() {
      // uncomment below and update the code to test the property favoritePoints
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property findCount (base name: "findCount")', function() {
      // uncomment below and update the code to test the property findCount
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property geoTours (base name: "geoTours")', function() {
      // uncomment below and update the code to test the property geoTours
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property geocacheLogs (base name: "geocacheLogs")', function() {
      // uncomment below and update the code to test the property geocacheLogs
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property geocacheSize (base name: "geocacheSize")', function() {
      // uncomment below and update the code to test the property geocacheSize
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property geocacheType (base name: "geocacheType")', function() {
      // uncomment below and update the code to test the property geocacheType
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property hints (base name: "hints")', function() {
      // uncomment below and update the code to test the property hints
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property ianaTimezoneId (base name: "ianaTimezoneId")', function() {
      // uncomment below and update the code to test the property ianaTimezoneId
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "images")', function() {
      // uncomment below and update the code to test the property images
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property isPremiumOnly (base name: "isPremiumOnly")', function() {
      // uncomment below and update the code to test the property isPremiumOnly
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property lastVisitedDate (base name: "lastVisitedDate")', function() {
      // uncomment below and update the code to test the property lastVisitedDate
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property longDescription (base name: "longDescription")', function() {
      // uncomment below and update the code to test the property longDescription
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property ownerAlias (base name: "ownerAlias")', function() {
      // uncomment below and update the code to test the property ownerAlias
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property ownerCode (base name: "ownerCode")', function() {
      // uncomment below and update the code to test the property ownerCode
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property placedDate (base name: "placedDate")', function() {
      // uncomment below and update the code to test the property placedDate
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property postedCoordinates (base name: "postedCoordinates")', function() {
      // uncomment below and update the code to test the property postedCoordinates
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property publishedDate (base name: "publishedDate")', function() {
      // uncomment below and update the code to test the property publishedDate
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property referenceCode (base name: "referenceCode")', function() {
      // uncomment below and update the code to test the property referenceCode
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property relatedWebPage (base name: "relatedWebPage")', function() {
      // uncomment below and update the code to test the property relatedWebPage
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "shortDescription")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property terrain (base name: "terrain")', function() {
      // uncomment below and update the code to test the property terrain
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property trackableCount (base name: "trackableCount")', function() {
      // uncomment below and update the code to test the property trackableCount
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property trackables (base name: "trackables")', function() {
      // uncomment below and update the code to test the property trackables
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property userData (base name: "userData")', function() {
      // uncomment below and update the code to test the property userData
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

    it('should have the property userWaypoints (base name: "userWaypoints")', function() {
      // uncomment below and update the code to test the property userWaypoints
      //var instane = new ApiV10.Geocache();
      //expect(instance).to.be();
    });

  });

}));
