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
import { Geocache } from '../model/geocache';
import { GeocacheLog } from '../model/geocacheLog';
import { Image } from '../model/image';
import { Trackable } from '../model/trackable';
import { User } from '../model/user';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.groundspeak.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum GeocachesApiApiKeys {
}

export class GeocachesApi {
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

    public setApiKey(key: GeocachesApiApiKeys, value: string) {
        (this.authentications as any)[GeocachesApiApiKeys[key]].apiKey = value;
    }

    /**
     * This method will return a list of users.
     * @summary Get a list of Users that have favorited a geocache
     * @param referenceCode The reference code of the geocache (example: GC25)
     * @param apiVersion The requested API version
     * @param skip how many users to skip
     * @param take how many users to retrieve
     * @param fields fields you want to return, defaults to \&quot;referenceCode\&quot;
     */
    public async geocachesGetFavoritedBy (referenceCode: string, apiVersion: string, skip?: number, take?: number, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<User>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/geocaches/{referenceCode}/favoritedby'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling geocachesGetFavoritedBy.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling geocachesGetFavoritedBy.');
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
        return new Promise<{ response: http.ClientResponse; body: Array<User>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<User>");
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
     * This method will return a single Geocache.
     * @summary Get a single Geocache
     * @param referenceCode The reference code of the geocache (example: GC25).
     * @param apiVersion The requested API version
     * @param lite Select to return a geocache object without the description and hints
     * @param expand fields to include with base geocache object
     * @param fields fields you want to return, defaults to \&quot;referenceCode\&quot;
     */
    public async geocachesGetGeocache (referenceCode: string, apiVersion: string, lite?: boolean, expand?: string, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Geocache;  }> {
        const localVarPath = this.basePath + '/v{api-version}/geocaches/{referenceCode}'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling geocachesGetGeocache.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling geocachesGetGeocache.');
        }

        if (lite !== undefined) {
            localVarQueryParameters['lite'] = ObjectSerializer.serialize(lite, "boolean");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
        return new Promise<{ response: http.ClientResponse; body: Geocache;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Geocache");
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
     * This method will return a list of geocaches.
     * @summary Get a list of geocaches
     * @param referenceCodes comma delimited list of geocache reference codes to retrieve (example: GC25,GC26,GC27).
     * @param apiVersion The requested API version
     * @param lite Select to return a geocache object without the description and hints
     * @param expand fields to include with base geocache object
     * @param fields fields you want to return, defaults to \&quot;referenceCode\&quot;
     */
    public async geocachesGetGeocaches (referenceCodes: string, apiVersion: string, lite?: boolean, expand?: string, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Geocache>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/geocaches'
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCodes' is not null or undefined
        if (referenceCodes === null || referenceCodes === undefined) {
            throw new Error('Required parameter referenceCodes was null or undefined when calling geocachesGetGeocaches.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling geocachesGetGeocaches.');
        }

        if (referenceCodes !== undefined) {
            localVarQueryParameters['referenceCodes'] = ObjectSerializer.serialize(referenceCodes, "string");
        }

        if (lite !== undefined) {
            localVarQueryParameters['lite'] = ObjectSerializer.serialize(lite, "boolean");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
        return new Promise<{ response: http.ClientResponse; body: Array<Geocache>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<Geocache>");
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
     * @summary Get a list of images for a geocache
     * @param referenceCode The reference code of the geocache (example: GC25).
     * @param apiVersion The requested API version
     * @param skip how many images to skip
     * @param take how many images to retrieve
     * @param fields fields you want to return, defaults to \&quot;url\&quot;
     */
    public async geocachesGetImages (referenceCode: string, apiVersion: string, skip?: number, take?: number, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Image>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/geocaches/{referenceCode}/images'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling geocachesGetImages.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling geocachesGetImages.');
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
     * This method will return a list of geocache logs.
     * @summary Get a list of geocache logs for the specified geocache
     * @param referenceCode The reference code of the geocache (example: GC25).
     * @param apiVersion The requested API version
     * @param skip how many logs to skip over
     * @param take how many logs to retrieve
     * @param expand fields to include with base geocache object
     * @param fields fields you want to return, defaults to referenceCode
     */
    public async geocachesGetLogs (referenceCode: string, apiVersion: string, skip?: number, take?: number, expand?: string, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<GeocacheLog>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/geocaches/{referenceCode}/geocachelogs'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling geocachesGetLogs.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling geocachesGetLogs.');
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        if (take !== undefined) {
            localVarQueryParameters['take'] = ObjectSerializer.serialize(take, "number");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
        return new Promise<{ response: http.ClientResponse; body: Array<GeocacheLog>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<GeocacheLog>");
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
     * This method will return a list of trackables.
     * @summary Get a list of trackables in a geocache
     * @param referenceCode The reference code of the geocache (example: GC25).
     * @param apiVersion The requested API version
     * @param skip how many trackables to skip
     * @param take how many trackables to retrieve
     * @param fields fields you want to return, defaults to referenceCode
     * @param expand 
     */
    public async geocachesGetTrackables (referenceCode: string, apiVersion: string, skip?: number, take?: number, fields?: string, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Trackable>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/geocaches/{referenceCode}/trackables'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling geocachesGetTrackables.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling geocachesGetTrackables.');
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
    /**
     * This method will return search results.
     * @summary Search for Geocaches
     * @param q The query used on the geocaches
     * @param apiVersion The requested API version
     * @param sort Defaults to distance if coords are provided otherwise favoritepoints (distance, favorites, cachename, size, difficulty, terrain, founddate, placeddate, id)
     * @param lite Return a lite version of geocache (no description, hint, or
     * @param skip Defaults to 0, how many geocaches to skip
     * @param take Defaults to 20, how many geocaches to return
     * @param expand fields to include with base geocache object
     * @param fields Properties you want to return, defaults to \&quot;referencecode\&quot;
     */
    public async geocachesSearch (q: string, apiVersion: string, sort?: string, lite?: boolean, skip?: number, take?: number, expand?: string, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Geocache>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/geocaches/search'
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'q' is not null or undefined
        if (q === null || q === undefined) {
            throw new Error('Required parameter q was null or undefined when calling geocachesSearch.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling geocachesSearch.');
        }

        if (q !== undefined) {
            localVarQueryParameters['q'] = ObjectSerializer.serialize(q, "string");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "string");
        }

        if (lite !== undefined) {
            localVarQueryParameters['lite'] = ObjectSerializer.serialize(lite, "boolean");
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        if (take !== undefined) {
            localVarQueryParameters['take'] = ObjectSerializer.serialize(take, "number");
        }

        if (expand !== undefined) {
            localVarQueryParameters['expand'] = ObjectSerializer.serialize(expand, "string");
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
        return new Promise<{ response: http.ClientResponse; body: Array<Geocache>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<Geocache>");
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