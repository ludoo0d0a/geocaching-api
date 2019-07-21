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
    root.GeocachingApiV10.GeocacheNote = factory(root.GeocachingApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GeocacheNote model module.
   * @module model/GeocacheNote
   * @version v1
   */

  /**
   * Constructs a new <code>GeocacheNote</code>.
   * @alias module:model/GeocacheNote
   * @class
   * @param note {String} 
   */
  var exports = function(note) {
    var _this = this;

    _this['note'] = note;
  };

  /**
   * Constructs a <code>GeocacheNote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeocacheNote} obj Optional instance to populate.
   * @return {module:model/GeocacheNote} The populated <code>GeocacheNote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;



  return exports;
}));

