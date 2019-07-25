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
 */

import { AdditionalWaypoint } from './additionalWaypoint';
import { Attribute } from './attribute';
import { Coordinates } from './coordinates';
import { GeocacheLog } from './geocacheLog';
import { GeocacheSize } from './geocacheSize';
import { GeocacheType } from './geocacheType';
import { Image } from './image';
import { Location } from './location';
import { Trackable } from './trackable';
import { User } from './user';
import { UserData } from './userData';
import { UserWaypoint } from './userWaypoint';

export class ListGeocache {
    'listItemName'?: string;
    /**
    * This code uniquely identifies the geocache
    */
    'referenceCode'?: string;
    /**
    * Name of the Geocache
    */
    'name'?: string;
    /**
    * Difficulty of cache between 1.0 and 5.0
    */
    'difficulty'?: number;
    /**
    * Terrain of cache between 1.0 and 5.0
    */
    'terrain'?: number;
    /**
    * The number of favorite points on the Geocache
    */
    'favoritePoints'?: number;
    'findCount'?: number;
    /**
    * The number of trackables on the Geocache
    */
    'trackableCount'?: number;
    /**
    * Date the geocache was placed (If the Geocache is an event then this represents the date of the event).
    */
    'placedDate'?: Date;
    'publishedDate'?: Date;
    'eventEndDate'?: Date;
    /**
    * The type of Geocache
    */
    'type'?: ListGeocache.TypeEnum;
    'geocacheType'?: GeocacheType;
    /**
    * Container or Size of cache
    */
    'size'?: ListGeocache.SizeEnum;
    'geocacheSize'?: GeocacheSize;
    'userData'?: UserData;
    /**
    * The state of the Geocache
    */
    'status'?: ListGeocache.StatusEnum;
    'location'?: Location;
    'postedCoordinates'?: Coordinates;
    'lastVisitedDate'?: Date;
    /**
    * The reference code of the geocache owner
    */
    'ownerCode'?: string;
    'owner'?: User;
    'ownerAlias'?: string;
    'isPremiumOnly'?: boolean;
    /**
    * Summary or short description of the geocache.
    */
    'shortDescription'?: string;
    /**
    * Detailed description of the geocache.
    */
    'longDescription'?: string;
    /**
    * Hints to find the geocache.
    */
    'hints'?: string;
    'attributes'?: Array<Attribute>;
    'ianaTimezoneId'?: string;
    'relatedWebPage'?: string;
    'backgroundImageUrl'?: string;
    'url'?: string;
    'containsHtml'?: boolean;
    'additionalWaypoints'?: Array<AdditionalWaypoint>;
    'trackables'?: Array<Trackable>;
    'geocacheLogs'?: Array<GeocacheLog>;
    'images'?: Array<Image>;
    'userWaypoints'?: Array<UserWaypoint>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "listItemName",
            "baseName": "listItemName",
            "type": "string"
        },
        {
            "name": "referenceCode",
            "baseName": "referenceCode",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "difficulty",
            "baseName": "difficulty",
            "type": "number"
        },
        {
            "name": "terrain",
            "baseName": "terrain",
            "type": "number"
        },
        {
            "name": "favoritePoints",
            "baseName": "favoritePoints",
            "type": "number"
        },
        {
            "name": "findCount",
            "baseName": "findCount",
            "type": "number"
        },
        {
            "name": "trackableCount",
            "baseName": "trackableCount",
            "type": "number"
        },
        {
            "name": "placedDate",
            "baseName": "placedDate",
            "type": "Date"
        },
        {
            "name": "publishedDate",
            "baseName": "publishedDate",
            "type": "Date"
        },
        {
            "name": "eventEndDate",
            "baseName": "eventEndDate",
            "type": "Date"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ListGeocache.TypeEnum"
        },
        {
            "name": "geocacheType",
            "baseName": "geocacheType",
            "type": "GeocacheType"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "ListGeocache.SizeEnum"
        },
        {
            "name": "geocacheSize",
            "baseName": "geocacheSize",
            "type": "GeocacheSize"
        },
        {
            "name": "userData",
            "baseName": "userData",
            "type": "UserData"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ListGeocache.StatusEnum"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "Location"
        },
        {
            "name": "postedCoordinates",
            "baseName": "postedCoordinates",
            "type": "Coordinates"
        },
        {
            "name": "lastVisitedDate",
            "baseName": "lastVisitedDate",
            "type": "Date"
        },
        {
            "name": "ownerCode",
            "baseName": "ownerCode",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "User"
        },
        {
            "name": "ownerAlias",
            "baseName": "ownerAlias",
            "type": "string"
        },
        {
            "name": "isPremiumOnly",
            "baseName": "isPremiumOnly",
            "type": "boolean"
        },
        {
            "name": "shortDescription",
            "baseName": "shortDescription",
            "type": "string"
        },
        {
            "name": "longDescription",
            "baseName": "longDescription",
            "type": "string"
        },
        {
            "name": "hints",
            "baseName": "hints",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "Array<Attribute>"
        },
        {
            "name": "ianaTimezoneId",
            "baseName": "ianaTimezoneId",
            "type": "string"
        },
        {
            "name": "relatedWebPage",
            "baseName": "relatedWebPage",
            "type": "string"
        },
        {
            "name": "backgroundImageUrl",
            "baseName": "backgroundImageUrl",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "containsHtml",
            "baseName": "containsHtml",
            "type": "boolean"
        },
        {
            "name": "additionalWaypoints",
            "baseName": "additionalWaypoints",
            "type": "Array<AdditionalWaypoint>"
        },
        {
            "name": "trackables",
            "baseName": "trackables",
            "type": "Array<Trackable>"
        },
        {
            "name": "geocacheLogs",
            "baseName": "geocacheLogs",
            "type": "Array<GeocacheLog>"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<Image>"
        },
        {
            "name": "userWaypoints",
            "baseName": "userWaypoints",
            "type": "Array<UserWaypoint>"
        }    ];

    static getAttributeTypeMap() {
        return ListGeocache.attributeTypeMap;
    }
}

export namespace ListGeocache {
    export enum TypeEnum {
        Traditional = <any> 'Traditional',
        MultiCache = <any> 'MultiCache',
        Virtual = <any> 'Virtual',
        Letterbox = <any> 'Letterbox',
        Event = <any> 'Event',
        Mystery = <any> 'Mystery',
        ProjectApe = <any> 'ProjectApe',
        Webcam = <any> 'Webcam',
        Locationless = <any> 'Locationless',
        Cito = <any> 'Cito',
        EarthCache = <any> 'EarthCache',
        MegaEvent = <any> 'MegaEvent',
        GpsAdventuresExhibit = <any> 'GpsAdventuresExhibit',
        Wherigo = <any> 'Wherigo',
        LostAndFoundEvent = <any> 'LostAndFoundEvent',
        GeocachingHq = <any> 'GeocachingHq',
        LostAndFoundCelebration = <any> 'LostAndFoundCelebration',
        BlockParty = <any> 'BlockParty',
        GigaEvent = <any> 'GigaEvent'
    }
    export enum SizeEnum {
        Unknown = <any> 'Unknown',
        Micro = <any> 'Micro',
        Regular = <any> 'Regular',
        Large = <any> 'Large',
        Virtual = <any> 'Virtual',
        Other = <any> 'Other',
        Small = <any> 'Small'
    }
    export enum StatusEnum {
        Unpublished = <any> 'Unpublished',
        Active = <any> 'Active',
        Disabled = <any> 'Disabled',
        Locked = <any> 'Locked',
        Archived = <any> 'Archived'
    }
}