# GeocachingApiV10.ReferenceDataApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**referenceDataGetAttributes**](ReferenceDataApi.md#referenceDataGetAttributes) | **GET** /v{api-version}/attributes | Returns the available attributes
[**referenceDataGetCountries**](ReferenceDataApi.md#referenceDataGetCountries) | **GET** /v{api-version}/countries | Returns current list of country ids and names
[**referenceDataGetGeocacheLogTypes**](ReferenceDataApi.md#referenceDataGetGeocacheLogTypes) | **GET** /v{api-version}/geocachelogtypes | Returns the geocache log types
[**referenceDataGetGeocacheTypes**](ReferenceDataApi.md#referenceDataGetGeocacheTypes) | **GET** /v{api-version}/geocachetypes | Returns the available geocache types
[**referenceDataGetMembershipLevels**](ReferenceDataApi.md#referenceDataGetMembershipLevels) | **GET** /v{api-version}/membershiplevels | Returns the membership levels
[**referenceDataGetStates**](ReferenceDataApi.md#referenceDataGetStates) | **GET** /v{api-version}/states | Returns the state (aka region) names and ids
[**referenceDataGetStatesByCountry**](ReferenceDataApi.md#referenceDataGetStatesByCountry) | **GET** /v{api-version}/countries/{countryId}/states | Returns the state (aka region) names and ids
[**referenceDataGetTrackableLogTypes**](ReferenceDataApi.md#referenceDataGetTrackableLogTypes) | **GET** /v{api-version}/trackablelogtypes | Returns the trackable log types


<a name="referenceDataGetAttributes"></a>
# **referenceDataGetAttributes**
> [AttributeType] referenceDataGetAttributes(apiVersion)

Returns the available attributes



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetAttributes(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[AttributeType]**](AttributeType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="referenceDataGetCountries"></a>
# **referenceDataGetCountries**
> [Country] referenceDataGetCountries(apiVersion)

Returns current list of country ids and names



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetCountries(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[Country]**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="referenceDataGetGeocacheLogTypes"></a>
# **referenceDataGetGeocacheLogTypes**
> [GeocacheLogType] referenceDataGetGeocacheLogTypes(apiVersion)

Returns the geocache log types



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetGeocacheLogTypes(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[GeocacheLogType]**](GeocacheLogType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="referenceDataGetGeocacheTypes"></a>
# **referenceDataGetGeocacheTypes**
> [GeocacheType] referenceDataGetGeocacheTypes(apiVersion)

Returns the available geocache types



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetGeocacheTypes(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[GeocacheType]**](GeocacheType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="referenceDataGetMembershipLevels"></a>
# **referenceDataGetMembershipLevels**
> [MembershipLevel] referenceDataGetMembershipLevels(apiVersion)

Returns the membership levels



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetMembershipLevels(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[MembershipLevel]**](MembershipLevel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="referenceDataGetStates"></a>
# **referenceDataGetStates**
> [State] referenceDataGetStates(apiVersion)

Returns the state (aka region) names and ids



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetStates(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[State]**](State.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="referenceDataGetStatesByCountry"></a>
# **referenceDataGetStatesByCountry**
> [State] referenceDataGetStatesByCountry(countryId, apiVersion)

Returns the state (aka region) names and ids



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var countryId = 56; // Number | 

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetStatesByCountry(countryId, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryId** | **Number**|  | 
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[State]**](State.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="referenceDataGetTrackableLogTypes"></a>
# **referenceDataGetTrackableLogTypes**
> [TrackableLogType] referenceDataGetTrackableLogTypes(apiVersion)

Returns the trackable log types



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ReferenceDataApi();

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.referenceDataGetTrackableLogTypes(apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 

### Return type

[**[TrackableLogType]**](TrackableLogType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

