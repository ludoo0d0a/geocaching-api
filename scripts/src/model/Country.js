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
 * The Country model module.
 * @module model/Country
 * @version v1
 */
class Country {
    /**
     * Constructs a new <code>Country</code>.
     * @alias module:model/Country
     */
    constructor() { 
        
        Country.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Country} obj Optional instance to populate.
     * @return {module:model/Country} The populated <code>Country</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Country();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Country.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Country.prototype['name'] = undefined;






export default Country;

