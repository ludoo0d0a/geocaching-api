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
import TrackableType from './TrackableType';

/**
 * The TrackableCount model module.
 * @module model/TrackableCount
 * @version v1
 */
class TrackableCount {
    /**
     * Constructs a new <code>TrackableCount</code>.
     * @alias module:model/TrackableCount
     */
    constructor() { 
        
        TrackableCount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrackableCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrackableCount} obj Optional instance to populate.
     * @return {module:model/TrackableCount} The populated <code>TrackableCount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrackableCount();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('trackableType')) {
                obj['trackableType'] = TrackableType.constructFromObject(data['trackableType']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} count
 */
TrackableCount.prototype['count'] = undefined;

/**
 * @member {module:model/TrackableType} trackableType
 */
TrackableCount.prototype['trackableType'] = undefined;






export default TrackableCount;

