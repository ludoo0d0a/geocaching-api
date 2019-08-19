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
import AdditionalWaypoint from './AdditionalWaypoint';
import Attribute from './Attribute';
import Coordinates from './Coordinates';
import GeoTour from './GeoTour';
import GeocacheLog from './GeocacheLog';
import GeocacheSize from './GeocacheSize';
import GeocacheType from './GeocacheType';
import Image from './Image';
import Location from './Location';
import Trackable from './Trackable';
import User from './User';
import UserData from './UserData';
import UserWaypoint from './UserWaypoint';

/**
 * The Geocache model module.
 * @module model/Geocache
 * @version v1
 */
class Geocache {
    /**
     * Constructs a new <code>Geocache</code>.
     * @alias module:model/Geocache
     */
    constructor() { 
        
        Geocache.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Geocache</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Geocache} obj Optional instance to populate.
     * @return {module:model/Geocache} The populated <code>Geocache</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Geocache();

            if (data.hasOwnProperty('additionalWaypoints')) {
                obj['additionalWaypoints'] = ApiClient.convertToType(data['additionalWaypoints'], [AdditionalWaypoint]);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [Attribute]);
            }
            if (data.hasOwnProperty('backgroundImageUrl')) {
                obj['backgroundImageUrl'] = ApiClient.convertToType(data['backgroundImageUrl'], 'String');
            }
            if (data.hasOwnProperty('containsHtml')) {
                obj['containsHtml'] = ApiClient.convertToType(data['containsHtml'], 'Boolean');
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'Number');
            }
            if (data.hasOwnProperty('eventEndDate')) {
                obj['eventEndDate'] = ApiClient.convertToType(data['eventEndDate'], 'Date');
            }
            if (data.hasOwnProperty('favoritePoints')) {
                obj['favoritePoints'] = ApiClient.convertToType(data['favoritePoints'], 'Number');
            }
            if (data.hasOwnProperty('findCount')) {
                obj['findCount'] = ApiClient.convertToType(data['findCount'], 'Number');
            }
            if (data.hasOwnProperty('geoTours')) {
                obj['geoTours'] = ApiClient.convertToType(data['geoTours'], [GeoTour]);
            }
            if (data.hasOwnProperty('geocacheLogs')) {
                obj['geocacheLogs'] = ApiClient.convertToType(data['geocacheLogs'], [GeocacheLog]);
            }
            if (data.hasOwnProperty('geocacheSize')) {
                obj['geocacheSize'] = GeocacheSize.constructFromObject(data['geocacheSize']);
            }
            if (data.hasOwnProperty('geocacheType')) {
                obj['geocacheType'] = GeocacheType.constructFromObject(data['geocacheType']);
            }
            if (data.hasOwnProperty('hints')) {
                obj['hints'] = ApiClient.convertToType(data['hints'], 'String');
            }
            if (data.hasOwnProperty('ianaTimezoneId')) {
                obj['ianaTimezoneId'] = ApiClient.convertToType(data['ianaTimezoneId'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [Image]);
            }
            if (data.hasOwnProperty('isPremiumOnly')) {
                obj['isPremiumOnly'] = ApiClient.convertToType(data['isPremiumOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('lastVisitedDate')) {
                obj['lastVisitedDate'] = ApiClient.convertToType(data['lastVisitedDate'], 'Date');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = Location.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('longDescription')) {
                obj['longDescription'] = ApiClient.convertToType(data['longDescription'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = User.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('ownerAlias')) {
                obj['ownerAlias'] = ApiClient.convertToType(data['ownerAlias'], 'String');
            }
            if (data.hasOwnProperty('ownerCode')) {
                obj['ownerCode'] = ApiClient.convertToType(data['ownerCode'], 'String');
            }
            if (data.hasOwnProperty('placedDate')) {
                obj['placedDate'] = ApiClient.convertToType(data['placedDate'], 'Date');
            }
            if (data.hasOwnProperty('postedCoordinates')) {
                obj['postedCoordinates'] = Coordinates.constructFromObject(data['postedCoordinates']);
            }
            if (data.hasOwnProperty('publishedDate')) {
                obj['publishedDate'] = ApiClient.convertToType(data['publishedDate'], 'Date');
            }
            if (data.hasOwnProperty('referenceCode')) {
                obj['referenceCode'] = ApiClient.convertToType(data['referenceCode'], 'String');
            }
            if (data.hasOwnProperty('relatedWebPage')) {
                obj['relatedWebPage'] = ApiClient.convertToType(data['relatedWebPage'], 'String');
            }
            if (data.hasOwnProperty('shortDescription')) {
                obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('terrain')) {
                obj['terrain'] = ApiClient.convertToType(data['terrain'], 'Number');
            }
            if (data.hasOwnProperty('trackableCount')) {
                obj['trackableCount'] = ApiClient.convertToType(data['trackableCount'], 'Number');
            }
            if (data.hasOwnProperty('trackables')) {
                obj['trackables'] = ApiClient.convertToType(data['trackables'], [Trackable]);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('userData')) {
                obj['userData'] = UserData.constructFromObject(data['userData']);
            }
            if (data.hasOwnProperty('userWaypoints')) {
                obj['userWaypoints'] = ApiClient.convertToType(data['userWaypoints'], [UserWaypoint]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AdditionalWaypoint>} additionalWaypoints
 */
Geocache.prototype['additionalWaypoints'] = undefined;

/**
 * @member {Array.<module:model/Attribute>} attributes
 */
Geocache.prototype['attributes'] = undefined;

/**
 * @member {String} backgroundImageUrl
 */
Geocache.prototype['backgroundImageUrl'] = undefined;

/**
 * @member {Boolean} containsHtml
 */
Geocache.prototype['containsHtml'] = undefined;

/**
 * Difficulty of cache between 1.0 and 5.0
 * @member {Number} difficulty
 */
Geocache.prototype['difficulty'] = undefined;

/**
 * @member {Date} eventEndDate
 */
Geocache.prototype['eventEndDate'] = undefined;

/**
 * The number of favorite points on the Geocache
 * @member {Number} favoritePoints
 */
Geocache.prototype['favoritePoints'] = undefined;

/**
 * @member {Number} findCount
 */
Geocache.prototype['findCount'] = undefined;

/**
 * @member {Array.<module:model/GeoTour>} geoTours
 */
Geocache.prototype['geoTours'] = undefined;

/**
 * @member {Array.<module:model/GeocacheLog>} geocacheLogs
 */
Geocache.prototype['geocacheLogs'] = undefined;

/**
 * @member {module:model/GeocacheSize} geocacheSize
 */
Geocache.prototype['geocacheSize'] = undefined;

/**
 * @member {module:model/GeocacheType} geocacheType
 */
Geocache.prototype['geocacheType'] = undefined;

/**
 * Hints to find the geocache.
 * @member {String} hints
 */
Geocache.prototype['hints'] = undefined;

/**
 * @member {String} ianaTimezoneId
 */
Geocache.prototype['ianaTimezoneId'] = undefined;

/**
 * @member {Array.<module:model/Image>} images
 */
Geocache.prototype['images'] = undefined;

/**
 * @member {Boolean} isPremiumOnly
 */
Geocache.prototype['isPremiumOnly'] = undefined;

/**
 * @member {Date} lastVisitedDate
 */
Geocache.prototype['lastVisitedDate'] = undefined;

/**
 * @member {module:model/Location} location
 */
Geocache.prototype['location'] = undefined;

/**
 * Detailed description of the geocache.
 * @member {String} longDescription
 */
Geocache.prototype['longDescription'] = undefined;

/**
 * Name of the Geocache
 * @member {String} name
 */
Geocache.prototype['name'] = undefined;

/**
 * @member {module:model/User} owner
 */
Geocache.prototype['owner'] = undefined;

/**
 * @member {String} ownerAlias
 */
Geocache.prototype['ownerAlias'] = undefined;

/**
 * The reference code of the geocache owner
 * @member {String} ownerCode
 */
Geocache.prototype['ownerCode'] = undefined;

/**
 * Date the geocache was placed (If the Geocache is an event then this represents the date of the event).
 * @member {Date} placedDate
 */
Geocache.prototype['placedDate'] = undefined;

/**
 * @member {module:model/Coordinates} postedCoordinates
 */
Geocache.prototype['postedCoordinates'] = undefined;

/**
 * @member {Date} publishedDate
 */
Geocache.prototype['publishedDate'] = undefined;

/**
 * This code uniquely identifies the geocache
 * @member {String} referenceCode
 */
Geocache.prototype['referenceCode'] = undefined;

/**
 * @member {String} relatedWebPage
 */
Geocache.prototype['relatedWebPage'] = undefined;

/**
 * Summary or short description of the geocache.
 * @member {String} shortDescription
 */
Geocache.prototype['shortDescription'] = undefined;

/**
 * Container or Size of cache
 * @member {module:model/Geocache.SizeEnum} size
 */
Geocache.prototype['size'] = undefined;

/**
 * The state of the Geocache
 * @member {module:model/Geocache.StatusEnum} status
 */
Geocache.prototype['status'] = undefined;

/**
 * Terrain of cache between 1.0 and 5.0
 * @member {Number} terrain
 */
Geocache.prototype['terrain'] = undefined;

/**
 * The number of trackables on the Geocache
 * @member {Number} trackableCount
 */
Geocache.prototype['trackableCount'] = undefined;

/**
 * @member {Array.<module:model/Trackable>} trackables
 */
Geocache.prototype['trackables'] = undefined;

/**
 * The type of Geocache
 * @member {module:model/Geocache.TypeEnum} type
 */
Geocache.prototype['type'] = undefined;

/**
 * @member {String} url
 */
Geocache.prototype['url'] = undefined;

/**
 * @member {module:model/UserData} userData
 */
Geocache.prototype['userData'] = undefined;

/**
 * @member {Array.<module:model/UserWaypoint>} userWaypoints
 */
Geocache.prototype['userWaypoints'] = undefined;





/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */
Geocache['SizeEnum'] = {

    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",

    /**
     * value: "Micro"
     * @const
     */
    "Micro": "Micro",

    /**
     * value: "Regular"
     * @const
     */
    "Regular": "Regular",

    /**
     * value: "Large"
     * @const
     */
    "Large": "Large",

    /**
     * value: "Virtual"
     * @const
     */
    "Virtual": "Virtual",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",

    /**
     * value: "Small"
     * @const
     */
    "Small": "Small"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Geocache['StatusEnum'] = {

    /**
     * value: "Unpublished"
     * @const
     */
    "Unpublished": "Unpublished",

    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",

    /**
     * value: "Disabled"
     * @const
     */
    "Disabled": "Disabled",

    /**
     * value: "Locked"
     * @const
     */
    "Locked": "Locked",

    /**
     * value: "Archived"
     * @const
     */
    "Archived": "Archived"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Geocache['TypeEnum'] = {

    /**
     * value: "Traditional"
     * @const
     */
    "Traditional": "Traditional",

    /**
     * value: "MultiCache"
     * @const
     */
    "MultiCache": "MultiCache",

    /**
     * value: "Virtual"
     * @const
     */
    "Virtual": "Virtual",

    /**
     * value: "Letterbox"
     * @const
     */
    "Letterbox": "Letterbox",

    /**
     * value: "Event"
     * @const
     */
    "Event": "Event",

    /**
     * value: "Mystery"
     * @const
     */
    "Mystery": "Mystery",

    /**
     * value: "ProjectApe"
     * @const
     */
    "ProjectApe": "ProjectApe",

    /**
     * value: "Webcam"
     * @const
     */
    "Webcam": "Webcam",

    /**
     * value: "Locationless"
     * @const
     */
    "Locationless": "Locationless",

    /**
     * value: "Cito"
     * @const
     */
    "Cito": "Cito",

    /**
     * value: "EarthCache"
     * @const
     */
    "EarthCache": "EarthCache",

    /**
     * value: "MegaEvent"
     * @const
     */
    "MegaEvent": "MegaEvent",

    /**
     * value: "GpsAdventuresExhibit"
     * @const
     */
    "GpsAdventuresExhibit": "GpsAdventuresExhibit",

    /**
     * value: "Wherigo"
     * @const
     */
    "Wherigo": "Wherigo",

    /**
     * value: "LostAndFoundEvent"
     * @const
     */
    "LostAndFoundEvent": "LostAndFoundEvent",

    /**
     * value: "GeocachingHq"
     * @const
     */
    "GeocachingHq": "GeocachingHq",

    /**
     * value: "LostAndFoundCelebration"
     * @const
     */
    "LostAndFoundCelebration": "LostAndFoundCelebration",

    /**
     * value: "BlockParty"
     * @const
     */
    "BlockParty": "BlockParty",

    /**
     * value: "GigaEvent"
     * @const
     */
    "GigaEvent": "GigaEvent"
};



export default Geocache;

