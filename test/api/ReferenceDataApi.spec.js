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
    instance = new GeocachingApiV10.ReferenceDataApi();
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

  describe('ReferenceDataApi', function() {
    describe('referenceDataGetAttributes', function() {
      it('should call referenceDataGetAttributes successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetAttributes
        //instance.referenceDataGetAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceDataGetCountries', function() {
      it('should call referenceDataGetCountries successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetCountries
        //instance.referenceDataGetCountries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceDataGetGeocacheLogTypes', function() {
      it('should call referenceDataGetGeocacheLogTypes successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetGeocacheLogTypes
        //instance.referenceDataGetGeocacheLogTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceDataGetGeocacheTypes', function() {
      it('should call referenceDataGetGeocacheTypes successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetGeocacheTypes
        //instance.referenceDataGetGeocacheTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceDataGetMembershipLevels', function() {
      it('should call referenceDataGetMembershipLevels successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetMembershipLevels
        //instance.referenceDataGetMembershipLevels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceDataGetStates', function() {
      it('should call referenceDataGetStates successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetStates
        //instance.referenceDataGetStates(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceDataGetStatesByCountry', function() {
      it('should call referenceDataGetStatesByCountry successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetStatesByCountry
        //instance.referenceDataGetStatesByCountry(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('referenceDataGetTrackableLogTypes', function() {
      it('should call referenceDataGetTrackableLogTypes successfully', function(done) {
        //uncomment below and update the code to test referenceDataGetTrackableLogTypes
        //instance.referenceDataGetTrackableLogTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));