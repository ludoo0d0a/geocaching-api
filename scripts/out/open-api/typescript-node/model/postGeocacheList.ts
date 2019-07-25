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


export class PostGeocacheList {
    /**
    * Name of the list
    */
    'name': string;
    /**
    * Description of the list
    */
    'description'?: string;
    /**
    * List Type
    */
    'typeId'?: number;
    'isPublic'?: boolean;
    'isShared'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number"
        },
        {
            "name": "isPublic",
            "baseName": "isPublic",
            "type": "boolean"
        },
        {
            "name": "isShared",
            "baseName": "isShared",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PostGeocacheList.attributeTypeMap;
    }
}
