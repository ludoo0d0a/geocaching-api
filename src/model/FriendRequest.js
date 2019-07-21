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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserReference'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.FriendRequest = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.UserReference);
  }
}(this, function(ApiClient, UserReference) {
  'use strict';




  /**
   * The FriendRequest model module.
   * @module model/FriendRequest
   * @version v1
   */

  /**
   * Constructs a new <code>FriendRequest</code>.
   * @alias module:model/FriendRequest
   * @class
   * @param requestedUserCode {String} 
   * @param message {String} 
   */
  var exports = function(requestedUserCode, message) {
    var _this = this;




    _this['requestedUserCode'] = requestedUserCode;

    _this['message'] = message;


  };

  /**
   * Constructs a <code>FriendRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FriendRequest} obj Optional instance to populate.
   * @return {module:model/FriendRequest} The populated <code>FriendRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('requestorUserCode')) {
        obj['requestorUserCode'] = ApiClient.convertToType(data['requestorUserCode'], 'String');
      }
      if (data.hasOwnProperty('requestor')) {
        obj['requestor'] = UserReference.constructFromObject(data['requestor']);
      }
      if (data.hasOwnProperty('requestedUserCode')) {
        obj['requestedUserCode'] = ApiClient.convertToType(data['requestedUserCode'], 'String');
      }
      if (data.hasOwnProperty('requested')) {
        obj['requested'] = UserReference.constructFromObject(data['requested']);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('isOutgoing')) {
        obj['isOutgoing'] = ApiClient.convertToType(data['isOutgoing'], 'Boolean');
      }
      if (data.hasOwnProperty('requestDateUtc')) {
        obj['requestDateUtc'] = ApiClient.convertToType(data['requestDateUtc'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} requestorUserCode
   */
  exports.prototype['requestorUserCode'] = undefined;
  /**
   * @member {module:model/UserReference} requestor
   */
  exports.prototype['requestor'] = undefined;
  /**
   * @member {String} requestedUserCode
   */
  exports.prototype['requestedUserCode'] = undefined;
  /**
   * @member {module:model/UserReference} requested
   */
  exports.prototype['requested'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Boolean} isOutgoing
   */
  exports.prototype['isOutgoing'] = undefined;
  /**
   * @member {Date} requestDateUtc
   */
  exports.prototype['requestDateUtc'] = undefined;



  return exports;
}));

