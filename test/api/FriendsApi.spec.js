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
    instance = new ApiV10.FriendsApi();
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

  describe('FriendsApi', function() {
    describe('friendsAcceptFriendRequest', function() {
      it('should call friendsAcceptFriendRequest successfully', function(done) {
        //uncomment below and update the code to test friendsAcceptFriendRequest
        //instance.friendsAcceptFriendRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('friendsCreateFriendRequest', function() {
      it('should call friendsCreateFriendRequest successfully', function(done) {
        //uncomment below and update the code to test friendsCreateFriendRequest
        //instance.friendsCreateFriendRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('friendsDeleteFriendRequest', function() {
      it('should call friendsDeleteFriendRequest successfully', function(done) {
        //uncomment below and update the code to test friendsDeleteFriendRequest
        //instance.friendsDeleteFriendRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('friendsGetFriendRequests', function() {
      it('should call friendsGetFriendRequests successfully', function(done) {
        //uncomment below and update the code to test friendsGetFriendRequests
        //instance.friendsGetFriendRequests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('friendsGetFriends', function() {
      it('should call friendsGetFriends successfully', function(done) {
        //uncomment below and update the code to test friendsGetFriends
        //instance.friendsGetFriends(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('friendsRemoveFriend', function() {
      it('should call friendsRemoveFriend successfully', function(done) {
        //uncomment below and update the code to test friendsRemoveFriend
        //instance.friendsRemoveFriend(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
