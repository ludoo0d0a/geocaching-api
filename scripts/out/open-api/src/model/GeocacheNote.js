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
 * The GeocacheNote model module.
 * @module model/GeocacheNote
 * @version 1.0.0-oas3
 */
class GeocacheNote {
    /**
     * Constructs a new <code>GeocacheNote</code>.
     * @alias module:model/GeocacheNote
     * @param note {String} 
     */
    constructor(note) { 
        
        GeocacheNote.initialize(this, note);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, note) { 
        obj['note'] = note;
    }

    /**
     * Constructs a <code>GeocacheNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeocacheNote} obj Optional instance to populate.
     * @return {module:model/GeocacheNote} The populated <code>GeocacheNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeocacheNote();

            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} note
 */
GeocacheNote.prototype['note'] = undefined;






export default GeocacheNote;

