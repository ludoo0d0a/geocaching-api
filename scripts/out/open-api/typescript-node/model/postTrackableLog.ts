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

import { Coordinates } from './coordinates';
import { TrackableLogType } from './trackableLogType';

export class PostTrackableLog {
    'trackingNumber'?: string;
    'trackableCode'?: string;
    'geocacheCode'?: string;
    'loggedDate': Date;
    'text': string;
    'isRot13Encoded'?: boolean;
    'typeId'?: number;
    'trackableLogType'?: TrackableLogType;
    'coordinates'?: Coordinates;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "trackingNumber",
            "baseName": "trackingNumber",
            "type": "string"
        },
        {
            "name": "trackableCode",
            "baseName": "trackableCode",
            "type": "string"
        },
        {
            "name": "geocacheCode",
            "baseName": "geocacheCode",
            "type": "string"
        },
        {
            "name": "loggedDate",
            "baseName": "loggedDate",
            "type": "Date"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "isRot13Encoded",
            "baseName": "isRot13Encoded",
            "type": "boolean"
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number"
        },
        {
            "name": "trackableLogType",
            "baseName": "trackableLogType",
            "type": "TrackableLogType"
        },
        {
            "name": "coordinates",
            "baseName": "coordinates",
            "type": "Coordinates"
        }    ];

    static getAttributeTypeMap() {
        return PostTrackableLog.attributeTypeMap;
    }
}
