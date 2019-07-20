# GeocachingApiV10.UtilitiesApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**utilitiesGetReferenceCode**](UtilitiesApi.md#utilitiesGetReferenceCode) | **GET** /v{api-version}/utilities/referencecode | Returns the reference code from an id


<a name="utilitiesGetReferenceCode"></a>
# **utilitiesGetReferenceCode**
> &#39;String&#39; utilitiesGetReferenceCode(id, codePrefix, apiVersion)

Returns the reference code from an id



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UtilitiesApi();

var id = 789; // Number | the id to get the reference code for

var codePrefix = "codePrefix_example"; // String | the prefix of the reference code (e.g. GC)

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.utilitiesGetReferenceCode(id, codePrefix, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the id to get the reference code for | 
 **codePrefix** | **String**| the prefix of the reference code (e.g. GC) | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

