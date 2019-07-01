/**
 * UPDATE GEOCACHE LOG
This method will update a specified geocache log. It will return the updated geocache log.

Path: /v1/geocachelogs/{referenceCode}
HTTP Method: PUT
Response Type: GeocacheLog
Response Codes: 200, 400, 401, 403, 404, 409, 429, 500
Restrictions: Only owner of geocache log may update the log.

 * @link https://api.groundspeak.com/documentation#update-geocachelog
 * @access public
 * @param  array  params
 * @return object
 */
GeocachingApi.prototype.updateGeocacheLog = function (params, cb) {
    if (!array_key_exists('log', params)) {
        throw new Exception('log is missing.');
    }

    return this.putRequest('/v1/geocachelogs/{referenceCode}', params, cb);
}