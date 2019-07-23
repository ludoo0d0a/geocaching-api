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
 * The GeocacheList model module.
 * @module model/GeocacheList
 * @version 1.0.0-oas3
 */
class GeocacheList {
    /**
     * Constructs a new <code>GeocacheList</code>.
     * @alias module:model/GeocacheList
     * @param name {String} Name of the list
     */
    constructor(name) { 
        
        GeocacheList.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GeocacheList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeocacheList} obj Optional instance to populate.
     * @return {module:model/GeocacheList} The populated <code>GeocacheList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeocacheList();

            if (data.hasOwnProperty('referenceCode')) {
                obj['referenceCode'] = ApiClient.convertToType(data['referenceCode'], 'String');
            }
            if (data.hasOwnProperty('lastUpdatedDateUtc')) {
                obj['lastUpdatedDateUtc'] = ApiClient.convertToType(data['lastUpdatedDateUtc'], 'Date');
            }
            if (data.hasOwnProperty('createdDateUtc')) {
                obj['createdDateUtc'] = ApiClient.convertToType(data['createdDateUtc'], 'Date');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('findCount')) {
                obj['findCount'] = ApiClient.convertToType(data['findCount'], 'Number');
            }
            if (data.hasOwnProperty('ownerCode')) {
                obj['ownerCode'] = ApiClient.convertToType(data['ownerCode'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('typeId')) {
                obj['typeId'] = ApiClient.convertToType(data['typeId'], 'Number');
            }
            if (data.hasOwnProperty('isPublic')) {
                obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'Boolean');
            }
            if (data.hasOwnProperty('isShared')) {
                obj['isShared'] = ApiClient.convertToType(data['isShared'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * This unqiuely identifies the list.  Use this code to get more details about this list. Example (PQ25)
 * @member {String} referenceCode
 */
GeocacheList.prototype['referenceCode'] = undefined;

/**
 * When was the list last updated.  If the list is a pocket query then this property references the last time it was generated. (default order: desc)
 * @member {Date} lastUpdatedDateUtc
 */
GeocacheList.prototype['lastUpdatedDateUtc'] = undefined;

/**
 * When the list was created
 * @member {Date} createdDateUtc
 */
GeocacheList.prototype['createdDateUtc'] = undefined;

/**
 * Number of items on the list
 * @member {Number} count
 */
GeocacheList.prototype['count'] = undefined;

/**
 * @member {Number} findCount
 */
GeocacheList.prototype['findCount'] = undefined;

/**
 * @member {String} ownerCode
 */
GeocacheList.prototype['ownerCode'] = undefined;

/**
 * @member {String} url
 */
GeocacheList.prototype['url'] = undefined;

/**
 * Name of the list
 * @member {String} name
 */
GeocacheList.prototype['name'] = undefined;

/**
 * Description of the list
 * @member {String} description
 */
GeocacheList.prototype['description'] = undefined;

/**
 * List Type
 * @member {Number} typeId
 */
GeocacheList.prototype['typeId'] = undefined;

/**
 * @member {Boolean} isPublic
 */
GeocacheList.prototype['isPublic'] = undefined;

/**
 * @member {Boolean} isShared
 */
GeocacheList.prototype['isShared'] = undefined;






export default GeocacheList;

