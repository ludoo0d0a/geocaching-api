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


export class Souvenir {
    'id'?: number;
    'imagePath'?: string;
    'thumbImagePath'?: string;
    'title'?: string;
    'description'?: string;
    'foundDateUtc'?: Date;
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "imagePath",
            "baseName": "imagePath",
            "type": "string"
        },
        {
            "name": "thumbImagePath",
            "baseName": "thumbImagePath",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "foundDateUtc",
            "baseName": "foundDateUtc",
            "type": "Date"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Souvenir.attributeTypeMap;
    }
}
