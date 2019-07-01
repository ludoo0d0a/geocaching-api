/**
 * {title}
{desription}

Path: {path}
HTTP Method: {method}
Response Type: {responseType}
Response Codes: {responseCodes}
Restrictions: {restrictions}

 * @link {link}
 * @access {access}
 * @param  {param}
 * @return {responseType} {responseTypeUrl}
 */
GeocachingApi.prototype.{functionName} = function (params, cb) {
    // check required params on {required_params}
    if (!array_key_exists('log', params)) {
        throw new Exception('log is missing.');
    }

    return this.{method}Request({path}, params, cb);
}