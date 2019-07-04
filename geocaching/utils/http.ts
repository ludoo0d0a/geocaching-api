import 'es6-promise/auto';
import * as fetch from 'isomorphic-fetch';
import * as urljoin from 'url-join';

import GeocachingError from './GeocachingError';
import logger from './Logger';
import {APIConfiguration, HttpClient, List, Pagination} from './types';

const GET = 'GET';
const POST = 'POST';
const DELETE = 'DELETE';
const PUT = 'PUT';

// Replace paths in url
function renderUrl(path, pathParams: any, queryParams: any) {
  let url = utils.buildUrlString(path, pathParams);
  const getParams = utils.buildGetParamString(queryParams);
  if (getParams.length > 0) {
    url = urljoin(url, getParams);
  }
  return url;
}

const buildParams = (method, configuration: APIConfiguration, body) => {
  return {
    method,
    body,
    headers: configuration.httpHeaders,
    timeout: configuration.requestTimeout
  };
};

const getBody = (options: urlOptions) => {
  // logger.log('Request payload will be: ' + JSON.stringify(object, undefined, 2));
  // const body = JSON.stringify(object);
  let body;
  if (options.body !== undefined) {
    if (!(typeof options.body === 'string')) {
      body = JSON.stringify(options.body);
    }
    logger.log('Request Body: ' + body);
    logger.log('Request payload will be: ' + body);
  }
  return body;
};

const request = (
  configuration: APIConfiguration,
  method: string,
  urlapi: string,
  options: UrlOptions,
  fetchMethod: any = fetch,
  body: any
) => {
  logger.log('Request: ' + method + ' ' + urlapi + '  ...');

  const url = renderUrl(urlapi, options.path_params, options.query_params);
  const params = buildParams(method, configuration, body);
  return fetchMethod(url, params)
    .then(response => {
      if (response.status > 399) {
        const errorMessage =
          'HTTP Request was unsuccessful: HTTP Response Code was ' + response.status + ' ' + response.statusText;
        logger.error(errorMessage);
        return response.json().then(responseData => {
          logger.error('Error Response Body: ' + JSON.stringify(responseData));
          throw new GeocachingError(errorMessage, {
            ok: response.ok,
            statusText: response.statusText,
            redirected: response.redirected,
            type: response.type,
            status: response.status,
            headers: response.headers,
            responseData
          });
        });
      }

      if (response.status === 204) {
        logger.log('Response: 204 - No Content');
        return {data: {}};
      }

      return response.json();
    })
    .then(responseJSON => {
      return responseJSON.data.result;
    });
};

const get = (configuration: APIConfiguration, url: string, options: UrlOptions, fetchMethod: any = fetch) => {
  return request(configuration, GET, url, options, fetchMethod, undefined);
};

const post = (
  configuration: APIConfiguration,
  url: string,
  options: UrlOptions,
  object: any,
  fetchMethod: any = fetch
) => {
  const body = getBody(options);
  return request(configuration, POST, url, options, fetchMethod, body);
};

const put = (
  configuration: APIConfiguration,
  url: string,
  options: UrlOptions,
  object: any,
  fetchMethod: any = fetch
) => {
  const body = getBody(options);
  return request(configuration, PUT, url, options, fetchMethod, body);
};

// tslint:disable-next-line
const delete_ = (configuration: APIConfiguration, url: string, options: UrlOptions, fetchMethod: any = fetch) => {
  return request(configuration, DELETE, url, options, fetchMethod, undefined);
};

const buildUrlString = (path: string, pathParams: any) => {
  return path.replace(/{(.*?)\}/g, (match, token) => {
    return pathParams[token];
  });
};

const buildGetParamString = (getParams: any) => {
  const params: string[] = [];
  let paramsString = '';

  for (const key in getParams) {
    if (getParams.hasOwnProperty(key)) {
      const value = getParams[key];
      if (value !== undefined && value !== null && value !== '') {
        params.push(`${key}=${value}`);
      }
    }
  }

  for (let i = 0; i < params.length; i++) {
    let param = '';
    if (i === 0) {
      param += '?';
    } else {
      param += '&';
    }
    param += params[i];

    paramsString += param;
  }

  return paramsString;
};

const buildFilterParamString = (filterParams: any) => {
  const processedFilterParams = {};
  for (const key in filterParams) {
    if (filterParams.hasOwnProperty(key)) {
      processedFilterParams[key] = filterParams[key].join(',');
    }
  }
  return processedFilterParams;
};

const buildListCallFunction = <T, J = {}>(
  httpClient: HttpClient,
  configuration: APIConfiguration,
  url: string
): List<T, J> => {
  return (limit?: number, offset?: number, sort?: string, filter?: any): Promise<Pagination<T, J>> => {
    let urlToCall = url;

    const filterParams = filter ? buildFilterParamString(filter) : {};
    const getParams = buildGetParamString({
      ...filterParams,
      limit,
      offset,
      sort
    });

    if (getParams.length > 0) {
      urlToCall = urljoin(url, getParams);
    }

    return httpClient.get<Pagination<T, J>>(configuration, urlToCall);
  };
};

const Http: HttpClient = {
  get,
  post,
  put,
  delete_
};

export const utils = {
  buildGetParamString,
  buildFilterParamString,
  buildListCallFunction,
  buildUrlString
};

export default Http;
