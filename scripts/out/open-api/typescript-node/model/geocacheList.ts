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


export class GeocacheList {
    /**
    * This unqiuely identifies the list.  Use this code to get more details about this list. Example (PQ25)
    */
    'referenceCode'?: string;
    /**
    * When was the list last updated.  If the list is a pocket query then this property references the last time it was generated. (default order: desc)
    */
    'lastUpdatedDateUtc'?: Date;
    /**
    * When the list was created
    */
    'createdDateUtc'?: Date;
    /**
    * Number of items on the list
    */
    'count'?: number;
    'findCount'?: number;
    'ownerCode'?: string;
    'url'?: string;
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
            "name": "referenceCode",
            "baseName": "referenceCode",
            "type": "string"
        },
        {
            "name": "lastUpdatedDateUtc",
            "baseName": "lastUpdatedDateUtc",
            "type": "Date"
        },
        {
            "name": "createdDateUtc",
            "baseName": "createdDateUtc",
            "type": "Date"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "findCount",
            "baseName": "findCount",
            "type": "number"
        },
        {
            "name": "ownerCode",
            "baseName": "ownerCode",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
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
        return GeocacheList.attributeTypeMap;
    }
}

