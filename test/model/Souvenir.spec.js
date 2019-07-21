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
    instance = new GeocachingApiV10.Souvenir();
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

  describe('Souvenir', function() {
    it('should create an instance of Souvenir', function() {
      // uncomment below and update the code to test Souvenir
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be.a(GeocachingApiV10.Souvenir);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be();
    });

    it('should have the property imagePath (base name: "imagePath")', function() {
      // uncomment below and update the code to test the property imagePath
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be();
    });

    it('should have the property thumbImagePath (base name: "thumbImagePath")', function() {
      // uncomment below and update the code to test the property thumbImagePath
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be();
    });

    it('should have the property foundDateUtc (base name: "foundDateUtc")', function() {
      // uncomment below and update the code to test the property foundDateUtc
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new GeocachingApiV10.Souvenir();
      //expect(instance).to.be();
    });

  });

}));