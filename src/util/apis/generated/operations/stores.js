/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var WebResource = msRest.WebResource;

/**
 * @class
 * Stores
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the MobileCenterClient.
 * Initializes a new instance of the Stores class.
 * @constructor
 *
 * @param {MobileCenterClient} client Reference to the service client.
 */
function Stores(client) {
  this.client = client;
}

/**
 * Return the store details for specified store name.
 *
 * @param {string} storeName The id of the store
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Stores.prototype.get = function (storeName, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (storeName === null || storeName === undefined || typeof storeName.valueOf() !== 'string') {
      throw new Error('storeName cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}';
  requestUrl = requestUrl.replace('{store_name}', encodeURIComponent(storeName));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 404) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['ExternalStoreResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 404) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['ErrorDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError1 = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * delete the store based on specific store name.
 *
 * @param {string} storeName The name of the store
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *                      See {@link ErrorDetails} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Stores.prototype.deleteMethod = function (storeName, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (storeName === null || storeName === undefined || typeof storeName.valueOf() !== 'string') {
      throw new Error('storeName cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/distribution_stores/{store_name}';
  requestUrl = requestUrl.replace('{store_name}', encodeURIComponent(storeName));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 204 && statusCode !== 404) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 404) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['ErrorDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Create a new external store for the specified application.
 *
 * @param {object} body The store request
 * 
 * @param {string} [body.type] store Type. Possible values include:
 * 'googleplay', 'intune'
 * 
 * @param {string} [body.name] name of the store. In case of googleplay this
 * is fixed to GooglePlay-Production.
 * 
 * @param {object} [body.intuneDetails]
 * 
 * @param {object} [body.intuneDetails.secretJson]
 * 
 * @param {string} [body.intuneDetails.secretJson.idToken] the id token of user
 * 
 * @param {string} [body.intuneDetails.secretJson.refreshToken] the refresh
 * token for user
 * 
 * @param {string} [body.intuneDetails.secretJson.refreshTokenExpiry] the
 * expiry of refresh token
 * 
 * @param {string} [body.intuneDetails.targetAudience] target audience in
 * intune store
 * 
 * @param {string} [body.intuneDetails.appCategory] app category in intune
 * store
 * 
 * @param {string} [body.intuneDetails.tenantId] tenant id of the intune store
 * 
 * @param {object} [body.googleplayDetails]
 * 
 * @param {object} [body.googleplayDetails.secretJson] Provide service account
 * details JSON (this is provided by google).
 * 
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Stores.prototype.create = function (body, ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (body === null || body === undefined) {
      throw new Error('body cannot be null or undefined.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/distribution_stores';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  var requestContent = null;
  var requestModel = null;
  try {
    if (body !== null && body !== undefined) {
      var requestModelMapper = new client.models['ExternalStoreRequest']().mapper();
      requestModel = client.serialize(requestModelMapper, body, 'body');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    var serializationError = new Error(util.format('Error "%s" occurred in serializing the ' + 
        'payload - "%s"', error.message, util.inspect(body, {depth: null})));
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 201 && statusCode !== 400 && statusCode !== 409) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 201) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['ExternalStoreResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 400) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['ErrorDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError1 = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }
    // Deserialize Response
    if (statusCode === 409) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = new client.models['ErrorDetails']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError2 = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError2.request = msRest.stripRequest(httpRequest);
        deserializationError2.response = msRest.stripResponse(response);
        return callback(deserializationError2);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};

/**
 * Get all the store details from Storage store table for a particular
 * application.
 *
 * @param {string} ownerName The name of the owner
 * 
 * @param {string} appName The name of the application
 * 
 * @param {object} [options] Optional Parameters.
 * 
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 * 
 * @param {function} callback
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {array} [result]   - The deserialized result object.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
Stores.prototype.listByApplicationId = function (ownerName, appName, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var baseUrl = this.client.baseUri;
  var requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/distribution_stores';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody ' + 
                         '- "%s" for the default response.', defaultError.message, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      var parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          var resultMapper = {
            required: false,
            serializedName: 'parsedResponse',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ExternalStoreResponseElementType',
                  type: {
                    name: 'Composite',
                    className: 'ExternalStoreResponse'
                  }
              }
            }
          };
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        var deserializationError = new Error(util.format('Error "%s" occurred in deserializing the responseBody - "%s"', error, responseBody));
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
};


module.exports = Stores;
