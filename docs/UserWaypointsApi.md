# GeocachingApiV10.UserWaypointsApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userWaypointsCreateUserWaypoint**](UserWaypointsApi.md#userWaypointsCreateUserWaypoint) | **POST** /v{api-version}/userwaypoints | Create a user waypoint
[**userWaypointsDeleteCorrectedCoordinates**](UserWaypointsApi.md#userWaypointsDeleteCorrectedCoordinates) | **DELETE** /v{api-version}/geocaches/{referenceCode}/correctedcoordinates | Delete a corrected coordinate for the calling user
[**userWaypointsDeleteUserWaypoint**](UserWaypointsApi.md#userWaypointsDeleteUserWaypoint) | **DELETE** /v{api-version}/userwaypoints/{referenceCode} | Delete a user waypoint
[**userWaypointsGetGeocacheUserWaypoints**](UserWaypointsApi.md#userWaypointsGetGeocacheUserWaypoints) | **GET** /v{api-version}/geocaches/{referenceCode}/userwaypoints | Gets the user waypoints for a geocache
[**userWaypointsGetUserWaypoints**](UserWaypointsApi.md#userWaypointsGetUserWaypoints) | **GET** /v{api-version}/userwaypoints | Get a list of user waypoints for the calling user
[**userWaypointsUpdateUserWaypoint**](UserWaypointsApi.md#userWaypointsUpdateUserWaypoint) | **PUT** /v{api-version}/userwaypoints/{referenceCode} | Update a user waypoint
[**userWaypointsUpsertCorrectedCoordinates**](UserWaypointsApi.md#userWaypointsUpsertCorrectedCoordinates) | **PUT** /v{api-version}/geocaches/{referenceCode}/correctedcoordinates | Upsert a corrected coordinate for the calling user


<a name="userWaypointsCreateUserWaypoint"></a>
# **userWaypointsCreateUserWaypoint**
> UserWaypoint userWaypointsCreateUserWaypoint(userWaypoint, apiVersion, opts)

Create a user waypoint

This method will return the user waypoint created.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UserWaypointsApi();

var userWaypoint = new GeocachingApiV10.PostUserWaypoint(); // PostUserWaypoint | The user waypoint to create.

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referencecode" // String | Properties you want to return (default = referenceCode)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userWaypointsCreateUserWaypoint(userWaypoint, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userWaypoint** | [**PostUserWaypoint**](PostUserWaypoint.md)| The user waypoint to create. | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to referencecode]

### Return type

[**UserWaypoint**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="userWaypointsDeleteCorrectedCoordinates"></a>
# **userWaypointsDeleteCorrectedCoordinates**
> Object userWaypointsDeleteCorrectedCoordinates(referenceCode, apiVersion)

Delete a corrected coordinate for the calling user

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UserWaypointsApi();

var referenceCode = "referenceCode_example"; // String | geocache identifier

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userWaypointsDeleteCorrectedCoordinates(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| geocache identifier | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="userWaypointsDeleteUserWaypoint"></a>
# **userWaypointsDeleteUserWaypoint**
> Object userWaypointsDeleteUserWaypoint(referenceCode, apiVersion)

Delete a user waypoint

This method will return no content.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UserWaypointsApi();

var referenceCode = "referenceCode_example"; // String | The identifier of the user waypoint

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userWaypointsDeleteUserWaypoint(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the user waypoint | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="userWaypointsGetGeocacheUserWaypoints"></a>
# **userWaypointsGetGeocacheUserWaypoints**
> [UserWaypoint] userWaypointsGetGeocacheUserWaypoints(referenceCode, apiVersion, opts)

Gets the user waypoints for a geocache

This method will return a paged list of userwaypoints

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UserWaypointsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the geocache (example: GC25).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | How many user waypoints to skip. default = 0
  'take': 10, // Number | How many user waypoints to include in result set. default = 10
  'includeCorrectedCoordinates': false, // Boolean | Include corrected coordinates in the results. default = false
  'fields': "referencecode" // String | Properties you want to return. default = referencecode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userWaypointsGetGeocacheUserWaypoints(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache (example: GC25). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| How many user waypoints to skip. default &#x3D; 0 | [optional] [default to 0]
 **take** | **Number**| How many user waypoints to include in result set. default &#x3D; 10 | [optional] [default to 10]
 **includeCorrectedCoordinates** | **Boolean**| Include corrected coordinates in the results. default &#x3D; false | [optional] [default to false]
 **fields** | **String**| Properties you want to return. default &#x3D; referencecode | [optional] [default to referencecode]

### Return type

[**[UserWaypoint]**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="userWaypointsGetUserWaypoints"></a>
# **userWaypointsGetUserWaypoints**
> [UserWaypoint] userWaypointsGetUserWaypoints(apiVersion, opts)

Get a list of user waypoints for the calling user

This method will return an array of user waypoints.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UserWaypointsApi();

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | How many waypoints to skip (default = 0)
  'take': 10, // Number | How many drafts to return (default = 10)
  'includeCorrectedCoordinates': false, // Boolean | Include corrected coordinates in the results. default = false
  'fields': "referencecode" // String | Properties you want to return (default = referenceCode)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userWaypointsGetUserWaypoints(apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| How many waypoints to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many drafts to return (default &#x3D; 10) | [optional] [default to 10]
 **includeCorrectedCoordinates** | **Boolean**| Include corrected coordinates in the results. default &#x3D; false | [optional] [default to false]
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to referencecode]

### Return type

[**[UserWaypoint]**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="userWaypointsUpdateUserWaypoint"></a>
# **userWaypointsUpdateUserWaypoint**
> UserWaypoint userWaypointsUpdateUserWaypoint(referenceCode, userWaypoint, apiVersion, opts)

Update a user waypoint

This method will return the updated user waypoint.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UserWaypointsApi();

var referenceCode = "referenceCode_example"; // String | The identifier of the user waypoint

var userWaypoint = new GeocachingApiV10.UserWaypoint(); // UserWaypoint | The user waypoint to update.

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referencecode" // String | Properties you want to return (default = referenceCode)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userWaypointsUpdateUserWaypoint(referenceCode, userWaypoint, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the user waypoint | 
 **userWaypoint** | [**UserWaypoint**](UserWaypoint.md)| The user waypoint to update. | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to referencecode]

### Return type

[**UserWaypoint**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="userWaypointsUpsertCorrectedCoordinates"></a>
# **userWaypointsUpsertCorrectedCoordinates**
> UserWaypoint userWaypointsUpsertCorrectedCoordinates(referenceCode, coordinates, apiVersion, opts)

Upsert a corrected coordinate for the calling user

This method will return the created or updated corrected coordinate.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UserWaypointsApi();

var referenceCode = "referenceCode_example"; // String | the geocache identifier

var coordinates = new GeocachingApiV10.Coordinates(); // Coordinates | The corrected coordinates to upsert

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referencecode" // String | Properties you want to return (default = referenceCode)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userWaypointsUpsertCorrectedCoordinates(referenceCode, coordinates, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| the geocache identifier | 
 **coordinates** | [**Coordinates**](Coordinates.md)| The corrected coordinates to upsert | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to referencecode]

### Return type

[**UserWaypoint**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

