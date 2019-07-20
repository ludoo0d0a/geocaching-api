# GeocachingApiV10.UsersApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGetGeocacheLogs**](UsersApi.md#usersGetGeocacheLogs) | **GET** /v{api-version}/users/{referenceCode}/geocachelogs | Get a list of a user&#39;s geocache logs
[**usersGetImages**](UsersApi.md#usersGetImages) | **GET** /v{api-version}/users/{referenceCode}/images | Get the images attached to a user profile
[**usersGetLists**](UsersApi.md#usersGetLists) | **GET** /v{api-version}/users/{referenceCode}/lists | Get a list of user&#39;s geocache lists
[**usersGetSouvenirs**](UsersApi.md#usersGetSouvenirs) | **GET** /v{api-version}/users/{referenceCode}/souvenirs | Get an account&#39;s souvenirs
[**usersGetUser**](UsersApi.md#usersGetUser) | **GET** /v{api-version}/users/{referenceCode} | Get a user
[**usersGetUsers**](UsersApi.md#usersGetUsers) | **GET** /v{api-version}/users | Get a list of users


<a name="usersGetGeocacheLogs"></a>
# **usersGetGeocacheLogs**
> [GeocacheLog] usersGetGeocacheLogs(referenceCode, apiVersion, opts)

Get a list of a user&#39;s geocache logs

This method will return a list of geocache lists.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UsersApi();

var referenceCode = "referenceCode_example"; // String | user identifier, use \"me\" to get lists for calling user

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | how many lists to skip over
  'take': 10, // Number | how many lists to retrieve
  'afterDate': new Date("2013-10-20T19:20:30+01:00"), // Date | filters results to logs with logdates after this date (inclusive)
  'beforeDate': new Date("2013-10-20T19:20:30+01:00"), // Date | filters results to logs with logdates before this date (inclusive)
  'fields': "referenceCode", // String | fields you want to return, defaults to referenceCode
  'includeArchived': false, // Boolean | flag to include archived logs
  'logTypes': "logTypes_example", // String | log types to include in response, defaults to all
  'expand': "" // String | fields to include with base geocache log object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetGeocacheLogs(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| user identifier, use \&quot;me\&quot; to get lists for calling user | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| how many lists to skip over | [optional] [default to 0]
 **take** | **Number**| how many lists to retrieve | [optional] [default to 10]
 **afterDate** | **Date**| filters results to logs with logdates after this date (inclusive) | [optional] 
 **beforeDate** | **Date**| filters results to logs with logdates before this date (inclusive) | [optional] 
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]
 **includeArchived** | **Boolean**| flag to include archived logs | [optional] [default to false]
 **logTypes** | **String**| log types to include in response, defaults to all | [optional] 
 **expand** | **String**| fields to include with base geocache log object | [optional] [default to ]

### Return type

[**[GeocacheLog]**](GeocacheLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="usersGetImages"></a>
# **usersGetImages**
> [Image] usersGetImages(referenceCode, apiVersion, opts)

Get the images attached to a user profile

This method will return a list of images.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UsersApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the user (example: PR18).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | Amount of images to skip over used for pagination. Defaults to 0.
  'take': 10, // Number | Amount of images to include in results. Defaults to 10.
  'fields': "url" // String | Properties you want to return. Defaults to url.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetImages(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the user (example: PR18). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| Amount of images to skip over used for pagination. Defaults to 0. | [optional] [default to 0]
 **take** | **Number**| Amount of images to include in results. Defaults to 10. | [optional] [default to 10]
 **fields** | **String**| Properties you want to return. Defaults to url. | [optional] [default to url]

### Return type

[**[Image]**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="usersGetLists"></a>
# **usersGetLists**
> [GeocacheList] usersGetLists(referenceCode, apiVersion, opts)

Get a list of user&#39;s geocache lists

This method will return a list of geocache lists.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UsersApi();

var referenceCode = "referenceCode_example"; // String | user identifier, use \"me\" to get lists for calling user

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'types': "bm", // String | comma delimited list of list types to return (fl, wl, il, bm, pq). Defaults to \"bm\"
  'skip': 0, // Number | how many lists to skip over
  'take': 10, // Number | how many lists to retrieve
  'fields': "referenceCode" // String | fields you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetLists(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| user identifier, use \&quot;me\&quot; to get lists for calling user | 
 **apiVersion** | **String**| The requested API version | 
 **types** | **String**| comma delimited list of list types to return (fl, wl, il, bm, pq). Defaults to \&quot;bm\&quot; | [optional] [default to bm]
 **skip** | **Number**| how many lists to skip over | [optional] [default to 0]
 **take** | **Number**| how many lists to retrieve | [optional] [default to 10]
 **fields** | **String**| fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**[GeocacheList]**](GeocacheList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="usersGetSouvenirs"></a>
# **usersGetSouvenirs**
> [Souvenir] usersGetSouvenirs(referenceCode, apiVersion, opts)

Get an account&#39;s souvenirs

This method will return a list of souvenirs.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UsersApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the user (example: PR18).

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | 
  'take': 20, // Number | 
  'fields': "title" // String | Property fields you want to return, defaults to title
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetSouvenirs(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the user (example: PR18). | 
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**|  | [optional] [default to 0]
 **take** | **Number**|  | [optional] [default to 20]
 **fields** | **String**| Property fields you want to return, defaults to title | [optional] [default to title]

### Return type

[**[Souvenir]**](Souvenir.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="usersGetUser"></a>
# **usersGetUser**
> User usersGetUser(referenceCode, apiVersion, opts)

Get a user

This method will return a user.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UsersApi();

var referenceCode = "referenceCode_example"; // String | The reference code of the user (example: PR18).

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
apiInstance.usersGetUser(referenceCode, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referenceCode** | **String**| The reference code of the user (example: PR18). | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Property fields you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="usersGetUsers"></a>
# **usersGetUsers**
> [User] usersGetUsers(apiVersion, opts)

Get a list of users

This method will return a list of users.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.UsersApi();

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'referenceCodes': "referenceCodes_example", // String | comma delimited list of user reference codes to retrieve (example: PR1,PR2,PR3)
  'usernames': "usernames_example", // String | comma delimited list of usernames to retrieve
  'fields': "referenceCode" // String | fields you want to return, defaults to \"referenceCode\"
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGetUsers(apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 
 **referenceCodes** | **String**| comma delimited list of user reference codes to retrieve (example: PR1,PR2,PR3) | [optional] 
 **usernames** | **String**| comma delimited list of usernames to retrieve | [optional] 
 **fields** | **String**| fields you want to return, defaults to \&quot;referenceCode\&quot; | [optional] [default to referenceCode]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

