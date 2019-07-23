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

import { BulkFailure } from './bulkFailure';

export class BulkResponse {
    'successes'?: Array<string>;
    'failures'?: Array<BulkFailure>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "successes",
            "baseName": "successes",
            "type": "Array<string>"
        },
        {
            "name": "failures",
            "baseName": "failures",
            "type": "Array<BulkFailure>"
        }    ];

    static getAttributeTypeMap() {
        return BulkResponse.attributeTypeMap;
    }
}

