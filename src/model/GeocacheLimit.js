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
    root.GeocachingApiV10.GeocacheLimit = factory(root.GeocachingApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GeocacheLimit model module.
   * @module model/GeocacheLimit
   * @version v1
   */

  /**
   * Constructs a new <code>GeocacheLimit</code>.
   * @alias module:model/GeocacheLimit
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GeocacheLimit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeocacheLimit} obj Optional instance to populate.
   * @return {module:model/GeocacheLimit} The populated <code>GeocacheLimit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('liteCallsRemaining')) {
        obj['liteCallsRemaining'] = ApiClient.convertToType(data['liteCallsRemaining'], 'Number');
      }
      if (data.hasOwnProperty('liteCallsSecondsToLive')) {
        obj['liteCallsSecondsToLive'] = ApiClient.convertToType(data['liteCallsSecondsToLive'], 'Number');
      }
      if (data.hasOwnProperty('fullCallsRemaining')) {
        obj['fullCallsRemaining'] = ApiClient.convertToType(data['fullCallsRemaining'], 'Number');
      }
      if (data.hasOwnProperty('fullCallsSecondsToLive')) {
        obj['fullCallsSecondsToLive'] = ApiClient.convertToType(data['fullCallsSecondsToLive'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} liteCallsRemaining
   */
  exports.prototype['liteCallsRemaining'] = undefined;
  /**
   * @member {Number} liteCallsSecondsToLive
   */
  exports.prototype['liteCallsSecondsToLive'] = undefined;
  /**
   * @member {Number} fullCallsRemaining
   */
  exports.prototype['fullCallsRemaining'] = undefined;
  /**
   * @member {Number} fullCallsSecondsToLive
   */
  exports.prototype['fullCallsSecondsToLive'] = undefined;



  return exports;
}));

