/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var ServiceClient = msRest.ServiceClient;

var models = require('./models');
var operations = require('./operations');

/**
 * @class
 * Initializes a new instance of the MobileCenterClient class.
 * @constructor
 *
 * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 */
function MobileCenterClient(credentials, baseUri, options) {
  if (credentials === null || credentials === undefined) {
    throw new Error('\'credentials\' cannot be null.');
  }

  if (!options) options = {};

  MobileCenterClient['super_'].call(this, credentials, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'https://api.mobile.azure.com/';
  }
  this.credentials = credentials;

  this.devices = new operations.Devices(this);
  this.orgInvitations = new operations.OrgInvitations(this);
  this.distributionGroupInvitations = new operations.DistributionGroupInvitations(this);
  this.appInvitations = new operations.AppInvitations(this);
  this.users = new operations.Users(this);
  this.releases = new operations.Releases(this);
  this.apps = new operations.Apps(this);
  this.organizations = new operations.Organizations(this);
  this.organization = new operations.Organization(this);
  this.builds = new operations.Builds(this);
  this.crashes = new operations.Crashes(this);
  this.test = new operations.Test(this);
  this.symbols = new operations.Symbols(this);
  this.missingSymbolGroups = new operations.MissingSymbolGroups(this);
  this.tables = new operations.Tables(this);
  this.azure = new operations.Azure(this);
  this.identity = new operations.Identity(this);
  this.repositories = new operations.Repositories(this);
  this.repositoryConfigurations = new operations.RepositoryConfigurations(this);
  this.releaseUploads = new operations.ReleaseUploads(this);
  this.storeReleases = new operations.StoreReleases(this);
  this.stores = new operations.Stores(this);
  this.distributionGroups = new operations.DistributionGroups(this);
  this.deploymentReleases = new operations.DeploymentReleases(this);
  this.deploymentMetrics = new operations.DeploymentMetrics(this);
  this.deployments = new operations.Deployments(this);
  this.crashGroupsOperations = new operations.CrashGroupsOperations(this);
  this.commits = new operations.Commits(this);
  this.branchConfigurations = new operations.BranchConfigurations(this);
  this.analytics = new operations.Analytics(this);
  this.apiTokens = new operations.ApiTokens(this);
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(MobileCenterClient, ServiceClient);

module.exports = MobileCenterClient;
