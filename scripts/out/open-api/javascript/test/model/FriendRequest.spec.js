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
    instance = new ApiV10.FriendRequest();
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

  describe('FriendRequest', function() {
    it('should create an instance of FriendRequest', function() {
      // uncomment below and update the code to test FriendRequest
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be.a(ApiV10.FriendRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestorUserCode (base name: "requestorUserCode")', function() {
      // uncomment below and update the code to test the property requestorUserCode
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestor (base name: "requestor")', function() {
      // uncomment below and update the code to test the property requestor
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestedUserCode (base name: "requestedUserCode")', function() {
      // uncomment below and update the code to test the property requestedUserCode
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

    it('should have the property requested (base name: "requested")', function() {
      // uncomment below and update the code to test the property requested
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

    it('should have the property isOutgoing (base name: "isOutgoing")', function() {
      // uncomment below and update the code to test the property isOutgoing
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestDateUtc (base name: "requestDateUtc")', function() {
      // uncomment below and update the code to test the property requestDateUtc
      //var instane = new ApiV10.FriendRequest();
      //expect(instance).to.be();
    });

  });

}));