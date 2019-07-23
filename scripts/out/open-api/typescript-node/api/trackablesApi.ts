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

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { Image } from '../model/image';
import { Trackable } from '../model/trackable';
import { TrackableLog } from '../model/trackableLog';
import { TrackableType } from '../model/trackableType';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.groundspeak.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TrackablesApiApiKeys {
}

export class TrackablesApi {
    protected _basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: TrackablesApiApiKeys, value: string) {
        (this.authentications as any)[TrackablesApiApiKeys[key]].apiKey = value;
    }

    /**
     * This method will return a list of geocoin types.
     * @summary Get paged geocoin types
     * @param apiVersion The requested API version
     * @param skip Amount of types to skip over used for pagination. Defaults to 0.
     * @param take Amount of types to include in results. Defaults to 10.
     * @param fields Properties you want to return. Defaults to id.
     */
    public async trackablesGetGeocoinTypes (apiVersion: string, skip?: number, take?: number, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TrackableType>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/trackables/geocointypes'
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling trackablesGetGeocoinTypes.');
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        if (take !== undefined) {
            localVarQueryParameters['take'] = ObjectSerializer.serialize(take, "number");
        }

        if (fields !== undefined) {
            localVarQueryParameters['fields'] = ObjectSerializer.serialize(fields, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TrackableType>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TrackableType>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * This method will return a list of images.
     * @summary Get the images attached to a trackable
     * @param referenceCode The reference code of the trackable (example: TB100).
     * @param apiVersion The requested API version
     * @param skip Amount of images to skip over used for pagination. Defaults to 0.
     * @param take Amount of images to include in results. Defaults to 10.
     * @param fields Properties you want to return. Defaults to url.
     */
    public async trackablesGetImages (referenceCode: string, apiVersion: string, skip?: number, take?: number, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Image>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/trackables/{referenceCode}/Images'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling trackablesGetImages.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling trackablesGetImages.');
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        if (take !== undefined) {
            localVarQueryParameters['take'] = ObjectSerializer.serialize(take, "number");
        }

        if (fields !== undefined) {
            localVarQueryParameters['fields'] = ObjectSerializer.serialize(fields, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Image>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<Image>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * This method will return a single trackable.
     * @summary Get a single trackable
     * @param referenceCode The reference code or tracking number of the trackable (example: TB100).
     * @param apiVersion The requested API version
     * @param fields fields you want to return, defaults to referenceCode
     * @param expand 
     */
    public async trackablesGetTrackable (referenceCode: string, apiVersion: string, fields?: string, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Trackable;  }> {
        const localVarPath = this.basePath + '/v{api-version}/trackables/{referenceCode}'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling trackablesGetTrackable.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling trackablesGetTrackable.');
        }

        if (fields !== undefined) {
            localVarQueryParameters['fields'] = ObjectSerializer.serialize(fields, "string");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Trackable;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Trackable");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * This method will return a list of trackable logs.
     * @summary Get a list of trackable logs for the specified trackable
     * @param referenceCode The reference code of the trackable (example: TB100).
     * @param apiVersion The requested API version
     * @param skip how many logs to skip over
     * @param take how many logs to retrieve
     * @param fields fields you want to return, defaults to referenceCode
     * @param expand 
     * @param logTypes what log types to include with results. defaults to all
     */
    public async trackablesGetTrackableLogs (referenceCode: string, apiVersion: string, skip?: number, take?: number, fields?: string, expand?: string, logTypes?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<TrackableLog>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/trackables/{referenceCode}/trackablelogs'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling trackablesGetTrackableLogs.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling trackablesGetTrackableLogs.');
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        if (take !== undefined) {
            localVarQueryParameters['take'] = ObjectSerializer.serialize(take, "number");
        }

        if (fields !== undefined) {
            localVarQueryParameters['fields'] = ObjectSerializer.serialize(fields, "string");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
        }

        if (logTypes !== undefined) {
            localVarQueryParameters['logTypes'] = ObjectSerializer.serialize(logTypes, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<TrackableLog>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<TrackableLog>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
    /**
     * This method will return a list of trackables, either by specified codes or get user trackables if you leave referenceCodes null
     * @summary Gets a list of trackables
     * @param apiVersion The requested API version
     * @param referenceCodes The reference code or tracking number of the trackables (example: TB100). Don\&#39;t pass in this param if you want to return user trackables
     * @param type 1&#x3D; inventory, 2 &#x3D; collection, 3 &#x3D; owned (default: 1)
     * @param skip default &#x3D; 0
     * @param take default &#x3D; 10
     * @param fields fields you want to return, defaults to referenceCode
     * @param expand 
     */
    public async trackablesGetUserTrackables (apiVersion: string, referenceCodes?: string, type?: 'Inventory' | 'Collection' | 'Owned', skip?: number, take?: number, fields?: string, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Trackable>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/trackables'
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling trackablesGetUserTrackables.');
        }

        if (referenceCodes !== undefined) {
            localVarQueryParameters['referenceCodes'] = ObjectSerializer.serialize(referenceCodes, "string");
        }

        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "'Inventory' | 'Collection' | 'Owned'");
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        if (take !== undefined) {
            localVarQueryParameters['take'] = ObjectSerializer.serialize(take, "number");
        }

        if (fields !== undefined) {
            localVarQueryParameters['fields'] = ObjectSerializer.serialize(fields, "string");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.default.applyToRequest(localVarRequestOptions);

        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise<{ response: http.ClientResponse; body: Array<Trackable>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<Trackable>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    }
}
