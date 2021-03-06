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

import ApiClient from '../ApiClient';

/**
 * The PostListGeocache model module.
 * @module model/PostListGeocache
 * @version v1
 */
class PostListGeocache {
    /**
     * Constructs a new <code>PostListGeocache</code>.
     * @alias module:model/PostListGeocache
     */
    constructor() { 
        
        PostListGeocache.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostListGeocache</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostListGeocache} obj Optional instance to populate.
     * @return {module:model/PostListGeocache} The populated <code>PostListGeocache</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostListGeocache();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('referenceCode')) {
                obj['referenceCode'] = ApiClient.convertToType(data['referenceCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostListGeocache.prototype['name'] = undefined;

/**
 * @member {String} referenceCode
 */
PostListGeocache.prototype['referenceCode'] = undefined;






export default PostListGeocache;

