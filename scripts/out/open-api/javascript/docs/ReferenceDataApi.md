# ApiV10.ReferenceDataApi

All URIs are relative to *https://api.groundspeak.com*

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



## referenceDataGetAttributes

> [AttributeType] referenceDataGetAttributes(apiVersion)

Returns the available attributes

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetAttributes(apiVersion, (error, data, response) => {
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

### Return type

[**[AttributeType]**](AttributeType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## referenceDataGetCountries

> [Country] referenceDataGetCountries(apiVersion)

Returns current list of country ids and names

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetCountries(apiVersion, (error, data, response) => {
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

### Return type

[**[Country]**](Country.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## referenceDataGetGeocacheLogTypes

> [GeocacheLogType] referenceDataGetGeocacheLogTypes(apiVersion)

Returns the geocache log types

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetGeocacheLogTypes(apiVersion, (error, data, response) => {
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

### Return type

[**[GeocacheLogType]**](GeocacheLogType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## referenceDataGetGeocacheTypes

> [GeocacheType] referenceDataGetGeocacheTypes(apiVersion)

Returns the available geocache types

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetGeocacheTypes(apiVersion, (error, data, response) => {
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

### Return type

[**[GeocacheType]**](GeocacheType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## referenceDataGetMembershipLevels

> [MembershipLevel] referenceDataGetMembershipLevels(apiVersion)

Returns the membership levels

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetMembershipLevels(apiVersion, (error, data, response) => {
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

### Return type

[**[MembershipLevel]**](MembershipLevel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## referenceDataGetStates

> [State] referenceDataGetStates(apiVersion)

Returns the state (aka region) names and ids

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetStates(apiVersion, (error, data, response) => {
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

### Return type

[**[State]**](State.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## referenceDataGetStatesByCountry

> [State] referenceDataGetStatesByCountry(countryId, apiVersion)

Returns the state (aka region) names and ids

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let countryId = 56; // Number | 
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetStatesByCountry(countryId, apiVersion, (error, data, response) => {
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
 **countryId** | **Number**|  | 
 **apiVersion** | **String**| The requested API version | [default to &#39;1.0&#39;]

### Return type

[**[State]**](State.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json


## referenceDataGetTrackableLogTypes

> [TrackableLogType] referenceDataGetTrackableLogTypes(apiVersion)

Returns the trackable log types

### Example

```javascript
import ApiV10 from 'api_v1_0';

let apiInstance = new ApiV10.ReferenceDataApi();
let apiVersion = "'1.0'"; // String | The requested API version
apiInstance.referenceDataGetTrackableLogTypes(apiVersion, (error, data, response) => {
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

### Return type

[**[TrackableLogType]**](TrackableLogType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/json, application/json-patch+json

