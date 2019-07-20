# GeocachingApiV10.FriendsApi

All URIs are relative to *https://staging.api.groundspeak.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**friendsAcceptFriendRequest**](FriendsApi.md#friendsAcceptFriendRequest) | **POST** /v{api-version}/friendrequests/{requestId}/accept | Accept a friend request
[**friendsCreateFriendRequest**](FriendsApi.md#friendsCreateFriendRequest) | **POST** /v{api-version}/friendrequests | Create a friend request
[**friendsDeleteFriendRequest**](FriendsApi.md#friendsDeleteFriendRequest) | **DELETE** /v{api-version}/friendrequests/{requestId} | Delete a friend request
[**friendsGetFriendRequests**](FriendsApi.md#friendsGetFriendRequests) | **GET** /v{api-version}/friendrequests | Get a list of friend requests for the calling user
[**friendsGetFriends**](FriendsApi.md#friendsGetFriends) | **GET** /v{api-version}/friends | Get a list of friends for the calling user
[**friendsRemoveFriend**](FriendsApi.md#friendsRemoveFriend) | **DELETE** /v{api-version}/friends/{userCode} | Removes a friend


<a name="friendsAcceptFriendRequest"></a>
# **friendsAcceptFriendRequest**
> friendsAcceptFriendRequest(requestId, apiVersion)

Accept a friend request



### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.FriendsApi();

var requestId = 56; // Number | friend request identifier

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.friendsAcceptFriendRequest(requestId, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **Number**| friend request identifier | 
 **apiVersion** | **String**| The requested API version | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="friendsCreateFriendRequest"></a>
# **friendsCreateFriendRequest**
> FriendRequest friendsCreateFriendRequest(friendRequest, apiVersion, opts)

Create a friend request

This method will return the friend request created.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.FriendsApi();

var friendRequest = new GeocachingApiV10.FriendRequest(); // FriendRequest | The friend request to create.

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'fields': "id" // String | Properties you want to return, defaults to id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.friendsCreateFriendRequest(friendRequest, apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **friendRequest** | [**FriendRequest**](FriendRequest.md)| The friend request to create. | 
 **apiVersion** | **String**| The requested API version | 
 **fields** | **String**| Properties you want to return, defaults to id | [optional] [default to id]

### Return type

[**FriendRequest**](FriendRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/json-patch+json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="friendsDeleteFriendRequest"></a>
# **friendsDeleteFriendRequest**
> Object friendsDeleteFriendRequest(requestId, apiVersion)

Delete a friend request

This method will return no content.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.FriendsApi();

var requestId = 56; // Number | The identifier of the friend request

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.friendsDeleteFriendRequest(requestId, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **Number**| The identifier of the friend request | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="friendsGetFriendRequests"></a>
# **friendsGetFriendRequests**
> [FriendRequest] friendsGetFriendRequests(apiVersion, opts)

Get a list of friend requests for the calling user

This method will return a list of requests including both inbound and outbound requests.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.FriendsApi();

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | How many requests to skip (default = 0)
  'take': 10, // Number | How many requests to return (default = 10, max = 50)
  'fields': "id" // String | Properties you want to return, defaults to id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.friendsGetFriendRequests(apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| How many requests to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many requests to return (default &#x3D; 10, max &#x3D; 50) | [optional] [default to 10]
 **fields** | **String**| Properties you want to return, defaults to id | [optional] [default to id]

### Return type

[**[FriendRequest]**](FriendRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="friendsGetFriends"></a>
# **friendsGetFriends**
> [User] friendsGetFriends(apiVersion, opts)

Get a list of friends for the calling user

This method will return a list of Users.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.FriendsApi();

var apiVersion = "apiVersion_example"; // String | The requested API version

var opts = { 
  'skip': 0, // Number | How many friends to skip (default = 0)
  'take': 10, // Number | How many friends to return (default = 10, max = 50)
  'fields': "referenceCode" // String | Properties you want to return, defaults to referenceCode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.friendsGetFriends(apiVersion, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**| The requested API version | 
 **skip** | **Number**| How many friends to skip (default &#x3D; 0) | [optional] [default to 0]
 **take** | **Number**| How many friends to return (default &#x3D; 10, max &#x3D; 50) | [optional] [default to 10]
 **fields** | **String**| Properties you want to return, defaults to referenceCode | [optional] [default to referenceCode]

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

<a name="friendsRemoveFriend"></a>
# **friendsRemoveFriend**
> Object friendsRemoveFriend(userCode, apiVersion)

Removes a friend

This method will return no content.

### Example
```javascript
var GeocachingApiV10 = require('geocaching_api_v10');

var apiInstance = new GeocachingApiV10.FriendsApi();

var userCode = "userCode_example"; // String | The identifier of the friend (their user reference code)

var apiVersion = "apiVersion_example"; // String | The requested API version


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.friendsRemoveFriend(userCode, apiVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCode** | **String**| The identifier of the friend (their user reference code) | 
 **apiVersion** | **String**| The requested API version | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/json-patch+json

