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
    instance = new ApiV10.GeocacheList();
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

  describe('GeocacheList', function() {
    it('should create an instance of GeocacheList', function() {
      // uncomment below and update the code to test GeocacheList
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be.a(ApiV10.GeocacheList);
    });

    it('should have the property count (base name: "count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property createdDateUtc (base name: "createdDateUtc")', function() {
      // uncomment below and update the code to test the property createdDateUtc
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property findCount (base name: "findCount")', function() {
      // uncomment below and update the code to test the property findCount
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "isPublic")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property isShared (base name: "isShared")', function() {
      // uncomment below and update the code to test the property isShared
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property lastUpdatedDateUtc (base name: "lastUpdatedDateUtc")', function() {
      // uncomment below and update the code to test the property lastUpdatedDateUtc
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property ownerCode (base name: "ownerCode")', function() {
      // uncomment below and update the code to test the property ownerCode
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property referenceCode (base name: "referenceCode")', function() {
      // uncomment below and update the code to test the property referenceCode
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "typeId")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new ApiV10.GeocacheList();
      //expect(instance).to.be();
    });

  });

}));
