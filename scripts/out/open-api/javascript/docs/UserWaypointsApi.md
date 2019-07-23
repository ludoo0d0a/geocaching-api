# ApiV10.UserWaypointsApi

All URIs are relative to *https://api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userWaypointsCreateUserWaypoint**](UserWaypointsApi.md#userWaypointsCreateUserWaypoint) | **POST** /v{api-version}/userwaypoints | Create a user waypoint
[**userWaypointsDeleteCorrectedCoordinates**](UserWaypointsApi.md#userWaypointsDeleteCorrectedCoordinates) | **DELETE** /v{api-version}/geocaches/{referenceCode}/correctedcoordinates | Delete a corrected coordinate for the calling user
[**userWaypointsDeleteUserWaypoint**](UserWaypointsApi.md#userWaypointsDeleteUserWaypoint) | **DELETE** /v{api-version}/userwaypoints/{referenceCode} | Delete a user waypoint
[**userWaypointsGetGeocacheUserWaypoints**](UserWaypointsApi.md#userWaypointsGetGeocacheUserWaypoints) | **GET** /v{api-version}/geocaches/{referenceCode}/userwaypoints | Gets the user waypoints for a geocache
[**userWaypointsGetUserWaypoints**](UserWaypointsApi.md#userWaypointsGetUserWaypoints) | **GET** /v{api-version}/userwaypoints | Get a list of user waypoints for the calling user
[**userWaypointsUpdateUserWaypoint**](UserWaypointsApi.md#userWaypointsUpdateUserWaypoint) | **PUT** /v{api-version}/userwaypoints/{referenceCode} | Update a user waypoint
[**userWaypointsUpsertCorrectedCoordinates**](UserWaypointsApi.md#userWaypointsUpsertCorrectedCoordinates) | **PUT** /v{api-version}/geocaches/{referenceCode}/correctedcoordinates | Upsert a corrected coordinate for the calling user



## userWaypointsCreateUserWaypoint

> UserWaypoint userWaypointsCreateUserWaypoint(apiVersion, postUserWaypoint, opts)

Create a user waypoint

This method will return the user waypoint created.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UserWaypointsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let postUserWaypoint = new ApiV10.PostUserWaypoint(); // PostUserWaypoint | The user waypoint to create.
let opts = {
  'fields': "'referencecode'" // String | Properties you want to return (default = referenceCode)
};
apiInstance.userWaypointsCreateUserWaypoint(apiVersion, postUserWaypoint, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **postUserWaypoint** | [**PostUserWaypoint**](PostUserWaypoint.md)| The user waypoint to create. | 
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to &#39;referencecode&#39;]

### Return type

[**UserWaypoint**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json


## userWaypointsDeleteCorrectedCoordinates

> Object userWaypointsDeleteCorrectedCoordinates(referenceCode, apiVersion)

Delete a corrected coordinate for the calling user

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UserWaypointsApi();
let referenceCode = "referenceCode_example"; // String | geocache identifier
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.userWaypointsDeleteCorrectedCoordinates(referenceCode, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| geocache identifier | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## userWaypointsDeleteUserWaypoint

> Object userWaypointsDeleteUserWaypoint(referenceCode, apiVersion)

Delete a user waypoint

This method will return no content.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UserWaypointsApi();
let referenceCode = "referenceCode_example"; // String | The identifier of the user waypoint
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.userWaypointsDeleteUserWaypoint(referenceCode, apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the user waypoint | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## userWaypointsGetGeocacheUserWaypoints

> [UserWaypoint] userWaypointsGetGeocacheUserWaypoints(referenceCode, apiVersion, opts)

Gets the user waypoints for a geocache

This method will return a paged list of userwaypoints

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UserWaypointsApi();
let referenceCode = "referenceCode_example"; // String | The reference code of the geocache (example: GC25).
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | How many user waypoints to skip. default = 0
  'take': 10, // Number | How many user waypoints to include in result set. default = 10
  'includeCorrectedCoordinates': false, // Boolean | Include corrected coordinates in the results. default = false
  'fields': "'referencecode'" // String | Properties you want to return. default = referencecode
};
apiInstance.userWaypointsGetGeocacheUserWaypoints(referenceCode, apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the geocache (example: GC25). | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| How many user waypoints to skip. default &#x3D; 0 | [optional] [default to 0]
 **take** | **Number**| How many user waypoints to include in result set. default &#x3D; 10 | [optional] [default to 10]
 **includeCorrectedCoordinates** | **Boolean**| Include corrected coordinates in the results. default &#x3D; false | [optional] [default to false]
 **fields** | **String**| Properties you want to return. default &#x3D; referencecode | [optional] [default to &#39;referencecode&#39;]

### Return type

[**[UserWaypoint]**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## userWaypointsGetUserWaypoints

> [UserWaypoint] userWaypointsGetUserWaypoints(apiVersion, opts)

Get a list of user waypoints for the calling user

This method will return an array of user waypoints.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UserWaypointsApi();
let apiVersion = "'1.0'"; // String | The requested API version
let opts = {
  'skip': 0, // Number | How many waypoints to skip (default = 0)
  'take': 10, // Number | How many drafts to return (default = 10)
  'includeCorrectedCoordinates': false, // Boolean | Include corrected coordinates in the results. default = false
  'fields': "'referencecode'" // String | Properties you want to return (default = referenceCode)
};
apiInstance.userWaypointsGetUserWaypoints(apiVersion, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **skip** | **Number**| How many waypoints to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many drafts to return (default &#x3D; 10) | [optional] [default to 10]
 **includeCorrectedCoordinates** | **Boolean**| Include corrected coordinates in the results. default &#x3D; false | [optional] [default to false]
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to &#39;referencecode&#39;]

### Return type

[**[UserWaypoint]**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## userWaypointsUpdateUserWaypoint

> UserWaypoint userWaypointsUpdateUserWaypoint(referenceCode, apiVersion, userWaypoint, opts)

Update a user waypoint

This method will return the updated user waypoint.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UserWaypointsApi();
let referenceCode = "referenceCode_example"; // String | The identifier of the user waypoint
let apiVersion = "'1.0'"; // String | The requested API version
let userWaypoint = new ApiV10.UserWaypoint(); // UserWaypoint | The user waypoint to update.
let opts = {
  'fields': "'referencecode'" // String | Properties you want to return (default = referenceCode)
};
apiInstance.userWaypointsUpdateUserWaypoint(referenceCode, apiVersion, userWaypoint, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the user waypoint | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **userWaypoint** | [**UserWaypoint**](UserWaypoint.md)| The user waypoint to update. | 
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to &#39;referencecode&#39;]

### Return type

[**UserWaypoint**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json


## userWaypointsUpsertCorrectedCoordinates

> UserWaypoint userWaypointsUpsertCorrectedCoordinates(referenceCode, apiVersion, coordinates, opts)

Upsert a corrected coordinate for the calling user

This method will return the created or updated corrected coordinate.

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.UserWaypointsApi();
let referenceCode = "referenceCode_example"; // String | the geocache identifier
let apiVersion = "'1.0'"; // String | The requested API version
let coordinates = new ApiV10.Coordinates(); // Coordinates | The corrected coordinates to upsert
let opts = {
  'fields': "'referencecode'" // String | Properties you want to return (default = referenceCode)
};
apiInstance.userWaypointsUpsertCorrectedCoordinates(referenceCode, apiVersion, coordinates, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| the geocache identifier | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]
 **coordinates** | [**Coordinates**](Coordinates.md)| The corrected coordinates to upsert | 
 **fields** | **String**| Properties you want to return (default &#x3D; referenceCode) | [optional] [default to &#39;referencecode&#39;]

### Return type

[**UserWaypoint**](UserWaypoint.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
- **Accept**: application/json, text/json, application/json-patch+json

