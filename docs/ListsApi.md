# GeocachingApiV10.ListsApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsAddGeocache**](ListsApi.md#listsAddGeocache) | **POST** /v{api-version}/lists/{referenceCode}/geocaches | Add a geocache to a list
[**listsAddGeocaches**](ListsApi.md#listsAddGeocaches) | **POST** /v{api-version}/lists/{referenceCode}/bulkgeocaches | Add multiple geocaches to a list
[**listsCreateList**](ListsApi.md#listsCreateList) | **POST** /v{api-version}/lists | Create a list
[**listsDeleteGeocache**](ListsApi.md#listsDeleteGeocache) | **DELETE** /v{api-version}/lists/{referenceCode}/geocaches/{geocacheReferenceCode} | Remove a geocache from a list
[**listsDeleteList**](ListsApi.md#listsDeleteList) | **DELETE** /v{api-version}/lists/{referenceCode} | Remove a list
[**listsGetGeocaches**](ListsApi.md#listsGetGeocaches) | **GET** /v{api-version}/lists/{referenceCode}/geocaches | Get a list of geocaches for a specified list
[**listsGetList**](ListsApi.md#listsGetList) | **GET** /v{api-version}/lists/{referenceCode} | Get a list
[**listsGetZippedPocketQuery**](ListsApi.md#listsGetZippedPocketQuery) | **GET** /v{api-version}/lists/{referenceCode}/geocaches/zipped | Gets a zipped file for a pocket query
[**listsUpdateList**](ListsApi.md#listsUpdateList) | **PUT** /v{api-version}/lists/{referenceCode} | Edit a list


<a name="listsAddGeocache"></a>
# **listsAddGeocache**
> Geocache listsAddGeocache(referenceCode, geocache, apiVersion, opts)

Add a geocache to a list

This method will return the geocache added.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | unique identifier of the list

var geocache = new GeocachingApiV10.PostListGeocache(); // PostListGeocache | geocache to add to the list

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Property fields you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsAddGeocache(referenceCode, geocache, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **geocache** | [**PostListGeocache**](PostListGeocache.md)| geocache to add to the list | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**Geocache**](Geocache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsAddGeocaches"></a>
# **listsAddGeocaches**
> BulkResponse listsAddGeocaches(referenceCode, geocacheCodes, apiVersion)

Add multiple geocaches to a list

This method will return the successful and failed geocache codes.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | unique identifier of the list

var geocacheCodes = [new GeocachingApiV10.[String]()]; // [String] | geocache reference codes to add to the list

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsAddGeocaches(referenceCode, geocacheCodes, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **geocacheCodes** | **[String]**| geocache reference codes to add to the list | 
 **apiVersion** | **String**| The requested API version | 

### Return type

[**BulkResponse**](BulkResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsCreateList"></a>
# **listsCreateList**
> GeocacheList listsCreateList(list, apiVersion, opts)

Create a list

This method will return the created geocache list.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var list = new GeocachingApiV10.PostGeocacheList(); // PostGeocacheList | The list to add

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Property fields you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsCreateList(list, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list** | [**PostGeocacheList**](PostGeocacheList.md)| The list to add | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**GeocacheList**](GeocacheList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsDeleteGeocache"></a>
# **listsDeleteGeocache**
> Object listsDeleteGeocache(referenceCode, geocacheReferenceCode, apiVersion)

Remove a geocache from a list

This method will not return anything.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | unique identifier of the list

var geocacheReferenceCode = "geocacheReferenceCode_example"; // String | unique identifier of the geocache to remove

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsDeleteGeocache(referenceCode, geocacheReferenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **geocacheReferenceCode** | **String**| unique identifier of the geocache to remove | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsDeleteList"></a>
# **listsDeleteList**
> Object listsDeleteList(referenceCode, apiVersion)

Remove a list

This method will not return anything.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | unique identifier of the list

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsDeleteList(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| unique identifier of the list | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsGetGeocaches"></a>
# **listsGetGeocaches**
> [ListGeocache] listsGetGeocaches(referenceCode, apiVersion, opts)

Get a list of geocaches for a specified list

This method will return a list of geocaches.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | identifier of the list

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | how many geocaches to skip over
  'take': 10, // Number | how many geocaches to retrieve
  'lite': true, // Boolean | whether to return lite geocaches or not
  'fields': "referenceCode", // String | fields you want to return, defaults to \"referenceCode\"
  'expand': "" // String | fields to include with base geocache object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsGetGeocaches(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| identifier of the list | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| how many geocaches to skip over | [optional] [default to 0]
 **take** | **Number**| how many geocaches to retrieve | [optional] [default to 10]
 **lite** | **Boolean**| whether to return lite geocaches or not | [optional] [default to true]
 **fields** | **String**| fields you want to return, defaults to \&quot;referenceCode\&quot; | [optional] [default to referenceCode]
 **expand** | **String**| fields to include with base geocache object | [optional] [default to ]

### Return type

[**[ListGeocache]**](ListGeocache.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsGetList"></a>
# **listsGetList**
> GeocacheList listsGetList(referenceCode, apiVersion, opts)

Get a list

This method will return a list.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the list (example: BM25).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Property fields you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsGetList(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the list (example: BM25). | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**GeocacheList**](GeocacheList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsGetZippedPocketQuery"></a>
# **listsGetZippedPocketQuery**
> &#39;Blob&#39; listsGetZippedPocketQuery(referenceCode, apiVersion)

Gets a zipped file for a pocket query

This method will return a zipped file.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | identifier of the pocket query

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsGetZippedPocketQuery(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| identifier of the pocket query | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="listsUpdateList"></a>
# **listsUpdateList**
> GeocacheList listsUpdateList(referenceCode, list, apiVersion, opts)

Edit a list

This method will return the updated geocache list.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.ListsApi();

var referenceCode = "referenceCode_example"; // String | the unique identifier of the list (ex: BM100)

var list = new GeocachingApiV10.GeocacheList(); // GeocacheList | The list to update

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "referenceCode" // String | Property fields you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsUpdateList(referenceCode, list, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| the unique identifier of the list (ex: BM100) | 
 **list** | [**GeocacheList**](GeocacheList.md)| The list to update | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**GeocacheList**](GeocacheList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

