export * from './additionalWaypoint';
export * from './attribute';
export * from './attributeType';
export * from './bulkFailure';
export * from './bulkResponse';
export * from './coordinates';
export * from './country';
export * from './friendRequest';
export * from './geocache';
export * from './geocacheCount';
export * from './geocacheLimit';
export * from './geocacheList';
export * from './geocacheLog';
export * from './geocacheLogType';
export * from './geocacheNote';
export * from './geocacheSize';
export * from './geocacheType';
export * from './hQPromotionMetadata';
export * from './image';
export * from './listGeocache';
export * from './location';
export * from './logDraft';
export * from './membershipLevel';
export * from './postGeocacheList';
export * from './postGeocacheLog';
export * from './postImage';
export * from './postListGeocache';
export * from './postLogDraft';
export * from './postTrackableLog';
export * from './postUserWaypoint';
export * from './promotedDraft';
export * from './souvenir';
export * from './state';
export * from './trackable';
export * from './trackableCount';
export * from './trackableLog';
export * from './trackableLogType';
export * from './trackableType';
export * from './user';
export * from './userData';
export * from './userReference';
export * from './userWaypoint';

import localVarRequest = require('request');

import { AdditionalWaypoint } from './additionalWaypoint';
import { Attribute } from './attribute';
import { AttributeType } from './attributeType';
import { BulkFailure } from './bulkFailure';
import { BulkResponse } from './bulkResponse';
import { Coordinates } from './coordinates';
import { Country } from './country';
import { FriendRequest } from './friendRequest';
import { Geocache } from './geocache';
import { GeocacheCount } from './geocacheCount';
import { GeocacheLimit } from './geocacheLimit';
import { GeocacheList } from './geocacheList';
import { GeocacheLog } from './geocacheLog';
import { GeocacheLogType } from './geocacheLogType';
import { GeocacheNote } from './geocacheNote';
import { GeocacheSize } from './geocacheSize';
import { GeocacheType } from './geocacheType';
import { HQPromotionMetadata } from './hQPromotionMetadata';
import { Image } from './image';
import { ListGeocache } from './listGeocache';
import { Location } from './location';
import { LogDraft } from './logDraft';
import { MembershipLevel } from './membershipLevel';
import { PostGeocacheList } from './postGeocacheList';
import { PostGeocacheLog } from './postGeocacheLog';
import { PostImage } from './postImage';
import { PostListGeocache } from './postListGeocache';
import { PostLogDraft } from './postLogDraft';
import { PostTrackableLog } from './postTrackableLog';
import { PostUserWaypoint } from './postUserWaypoint';
import { PromotedDraft } from './promotedDraft';
import { Souvenir } from './souvenir';
import { State } from './state';
import { Trackable } from './trackable';
import { TrackableCount } from './trackableCount';
import { TrackableLog } from './trackableLog';
import { TrackableLogType } from './trackableLogType';
import { TrackableType } from './trackableType';
import { User } from './user';
import { UserData } from './userData';
import { UserReference } from './userReference';
import { UserWaypoint } from './userWaypoint';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];
                 
let enumsMap: {[index: string]: any} = {
        "Geocache.TypeEnum": Geocache.TypeEnum,
        "Geocache.SizeEnum": Geocache.SizeEnum,
        "Geocache.StatusEnum": Geocache.StatusEnum,
        "ListGeocache.TypeEnum": ListGeocache.TypeEnum,
        "ListGeocache.SizeEnum": ListGeocache.SizeEnum,
        "ListGeocache.StatusEnum": ListGeocache.StatusEnum,
}

let typeMap: {[index: string]: any} = {
    "AdditionalWaypoint": AdditionalWaypoint,
    "Attribute": Attribute,
    "AttributeType": AttributeType,
    "BulkFailure": BulkFailure,
    "BulkResponse": BulkResponse,
    "Coordinates": Coordinates,
    "Country": Country,
    "FriendRequest": FriendRequest,
    "Geocache": Geocache,
    "GeocacheCount": GeocacheCount,
    "GeocacheLimit": GeocacheLimit,
    "GeocacheList": GeocacheList,
    "GeocacheLog": GeocacheLog,
    "GeocacheLogType": GeocacheLogType,
    "GeocacheNote": GeocacheNote,
    "GeocacheSize": GeocacheSize,
    "GeocacheType": GeocacheType,
    "HQPromotionMetadata": HQPromotionMetadata,
    "Image": Image,
    "ListGeocache": ListGeocache,
    "Location": Location,
    "LogDraft": LogDraft,
    "MembershipLevel": MembershipLevel,
    "PostGeocacheList": PostGeocacheList,
    "PostGeocacheLog": PostGeocacheLog,
    "PostImage": PostImage,
    "PostListGeocache": PostListGeocache,
    "PostLogDraft": PostLogDraft,
    "PostTrackableLog": PostTrackableLog,
    "PostUserWaypoint": PostUserWaypoint,
    "PromotedDraft": PromotedDraft,
    "Souvenir": Souvenir,
    "State": State,
    "Trackable": Trackable,
    "TrackableCount": TrackableCount,
    "TrackableLog": TrackableLog,
    "TrackableLogType": TrackableLogType,
    "TrackableType": TrackableType,
    "User": User,
    "UserData": UserData,
    "UserReference": UserReference,
    "UserWaypoint": UserWaypoint,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}