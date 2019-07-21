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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.PostListGeocache = factory(root.GeocachingApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PostListGeocache model module.
   * @module model/PostListGeocache
   * @version v1
   */

  /**
   * Constructs a new <code>PostListGeocache</code>.
   * @alias module:model/PostListGeocache
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PostListGeocache</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostListGeocache} obj Optional instance to populate.
   * @return {module:model/PostListGeocache} The populated <code>PostListGeocache</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('referenceCode')) {
        obj['referenceCode'] = ApiClient.convertToType(data['referenceCode'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} referenceCode
   */
  exports.prototype['referenceCode'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

