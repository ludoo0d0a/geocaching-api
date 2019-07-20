# GeocachingApiV10.GeocacheNotesApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geocacheNotesDeleteNote**](GeocacheNotesApi.md#geocacheNotesDeleteNote) | **DELETE** /v{api-version}/geocaches/{referenceCode}/notes | Delete a geocache note for the calling user
[**geocacheNotesUpsertNote**](GeocacheNotesApi.md#geocacheNotesUpsertNote) | **PUT** /v{api-version}/geocaches/{referenceCode}/notes | Upsert a geocache note for the calling user


<a name="geocacheNotesDeleteNote"></a>
# **geocacheNotesDeleteNote**
> Object geocacheNotesDeleteNote(referenceCode, apiVersion)

Delete a geocache note for the calling user

This method will return no content.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheNotesApi();

var referenceCode = "referenceCode_example"; // String | The identifier of the geocache (ex: GC25)

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheNotesDeleteNote(referenceCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the geocache (ex: GC25) | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="geocacheNotesUpsertNote"></a>
# **geocacheNotesUpsertNote**
> &#39;String&#39; geocacheNotesUpsertNote(referenceCode, geocacheNote, apiVersion)

Upsert a geocache note for the calling user

This method will return the upserted text.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.GeocacheNotesApi();

var referenceCode = "referenceCode_example"; // String | The identifier of the geocache (ex: GC25)

var geocacheNote = new GeocachingApiV10.GeocacheNote(); // GeocacheNote | The geocache note text.

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.geocacheNotesUpsertNote(referenceCode, geocacheNote, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The identifier of the geocache (ex: GC25) | 
 **geocacheNote** | [**GeocacheNote**](GeocacheNote.md)| The geocache note text. | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

