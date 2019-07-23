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

import ApiClient from '../ApiClient';

/**
 * The State model module.
 * @module model/State
 * @version 1.0.0-oas3
 */
class State {
    /**
     * Constructs a new <code>State</code>.
     * @alias module:model/State
     */
    constructor() { 
        
        State.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>State</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/State} obj Optional instance to populate.
     * @return {module:model/State} The populated <code>State</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new State();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('countryId')) {
                obj['countryId'] = ApiClient.convertToType(data['countryId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
State.prototype['id'] = undefined;

/**
 * @member {String} name
 */
State.prototype['name'] = undefined;

/**
 * @member {Number} countryId
 */
State.prototype['countryId'] = undefined;






export default State;

