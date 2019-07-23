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
import { GeocacheList } from '../model/geocacheList';
import { GeocacheLog } from '../model/geocacheLog';
import { Image } from '../model/image';
import { Souvenir } from '../model/souvenir';
import { User } from '../model/user';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/models';

let defaultBasePath = 'https://api.groundspeak.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum UsersApiApiKeys {
}

export class UsersApi {
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

    public setApiKey(key: UsersApiApiKeys, value: string) {
        (this.authentications as any)[UsersApiApiKeys[key]].apiKey = value;
    }

    /**
     * This method will return a list of geocache lists.
     * @summary Get a list of a user\'s geocache logs
     * @param referenceCode user identifier, use \&quot;me\&quot; to get lists for calling user
     * @param apiVersion The requested API version
     * @param skip how many lists to skip over
     * @param take how many lists to retrieve
     * @param afterDate filters results to logs with logdates after this date (inclusive)
     * @param beforeDate filters results to logs with logdates before this date (inclusive)
     * @param fields fields you want to return, defaults to referenceCode
     * @param includeArchived flag to include archived logs
     * @param logTypes log types to include in response, defaults to all
     * @param expand fields to include with base geocache log object
     */
    public async usersGetGeocacheLogs (referenceCode: string, apiVersion: string, skip?: number, take?: number, afterDate?: Date, beforeDate?: Date, fields?: string, includeArchived?: boolean, logTypes?: string, expand?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<GeocacheLog>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/users/{referenceCode}/geocachelogs'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling usersGetGeocacheLogs.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling usersGetGeocacheLogs.');
        }

        if (skip !== undefined) {
            localVarQueryParameters['skip'] = ObjectSerializer.serialize(skip, "number");
        }

        if (take !== undefined) {
            localVarQueryParameters['take'] = ObjectSerializer.serialize(take, "number");
        }

        if (afterDate !== undefined) {
            localVarQueryParameters['afterDate'] = ObjectSerializer.serialize(afterDate, "Date");
        }

        if (beforeDate !== undefined) {
            localVarQueryParameters['beforeDate'] = ObjectSerializer.serialize(beforeDate, "Date");
        }

        if (fields !== undefined) {
            localVarQueryParameters['fields'] = ObjectSerializer.serialize(fields, "string");
        }

        if (includeArchived !== undefined) {
            localVarQueryParameters['includeArchived'] = ObjectSerializer.serialize(includeArchived, "boolean");
        }

        if (logTypes !== undefined) {
            localVarQueryParameters['logTypes'] = ObjectSerializer.serialize(logTypes, "string");
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
     * This method will return a list of images.
     * @summary Get the images attached to a user profile
     * @param referenceCode The reference code of the user (example: PR18).
     * @param apiVersion The requested API version
     * @param skip Amount of images to skip over used for pagination. Defaults to 0.
     * @param take Amount of images to include in results. Defaults to 10.
     * @param fields Properties you want to return. Defaults to url.
     */
    public async usersGetImages (referenceCode: string, apiVersion: string, skip?: number, take?: number, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Image>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/users/{referenceCode}/images'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling usersGetImages.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling usersGetImages.');
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
     * This method will return a list of geocache lists.
     * @summary Get a list of user\'s geocache lists
     * @param referenceCode user identifier, use \&quot;me\&quot; to get lists for calling user
     * @param apiVersion The requested API version
     * @param types comma delimited list of list types to return (fl, wl, il, bm, pq). Defaults to \&quot;bm\&quot;
     * @param skip how many lists to skip over
     * @param take how many lists to retrieve
     * @param fields fields you want to return, defaults to referenceCode
     */
    public async usersGetLists (referenceCode: string, apiVersion: string, types?: string, skip?: number, take?: number, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<GeocacheList>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/users/{referenceCode}/lists'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling usersGetLists.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling usersGetLists.');
        }

        if (types !== undefined) {
            localVarQueryParameters['types'] = ObjectSerializer.serialize(types, "string");
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
        return new Promise<{ response: http.ClientResponse; body: Array<GeocacheList>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<GeocacheList>");
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
     * This method will return a list of souvenirs.
     * @summary Get an account\'s souvenirs
     * @param referenceCode The reference code of the user (example: PR18).
     * @param apiVersion The requested API version
     * @param skip 
     * @param take 
     * @param fields Property fields you want to return, defaults to title
     */
    public async usersGetSouvenirs (referenceCode: string, apiVersion: string, skip?: number, take?: number, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<Souvenir>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/users/{referenceCode}/souvenirs'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling usersGetSouvenirs.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling usersGetSouvenirs.');
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
        return new Promise<{ response: http.ClientResponse; body: Array<Souvenir>;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "Array<Souvenir>");
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
     * This method will return a user.
     * @summary Get a user
     * @param referenceCode The reference code of the user (example: PR18).
     * @param apiVersion The requested API version
     * @param fields Property fields you want to return, defaults to referenceCode
     */
    public async usersGetUser (referenceCode: string, apiVersion: string, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: User;  }> {
        const localVarPath = this.basePath + '/v{api-version}/users/{referenceCode}'
            .replace('{' + 'referenceCode' + '}', encodeURIComponent(String(referenceCode)))
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'referenceCode' is not null or undefined
        if (referenceCode === null || referenceCode === undefined) {
            throw new Error('Required parameter referenceCode was null or undefined when calling usersGetUser.');
        }

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling usersGetUser.');
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
        return new Promise<{ response: http.ClientResponse; body: User;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    body = ObjectSerializer.deserialize(body, "User");
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
     * This method will return a list of users.
     * @summary Get a list of users
     * @param apiVersion The requested API version
     * @param referenceCodes comma delimited list of user reference codes to retrieve (example: PR1,PR2,PR3)
     * @param usernames comma delimited list of usernames to retrieve
     * @param fields fields you want to return, defaults to \&quot;referenceCode\&quot;
     */
    public async usersGetUsers (apiVersion: string, referenceCodes?: string, usernames?: string, fields?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.ClientResponse; body: Array<User>;  }> {
        const localVarPath = this.basePath + '/v{api-version}/users'
            .replace('{' + 'api-version' + '}', encodeURIComponent(String(apiVersion)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
        let localVarFormParams: any = {};

        // verify required parameter 'apiVersion' is not null or undefined
        if (apiVersion === null || apiVersion === undefined) {
            throw new Error('Required parameter apiVersion was null or undefined when calling usersGetUsers.');
        }

        if (referenceCodes !== undefined) {
            localVarQueryParameters['referenceCodes'] = ObjectSerializer.serialize(referenceCodes, "string");
        }

        if (usernames !== undefined) {
            localVarQueryParameters['usernames'] = ObjectSerializer.serialize(usernames, "string");
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
}
