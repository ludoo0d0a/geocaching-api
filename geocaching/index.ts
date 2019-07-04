import * as urljoin from 'url-join';

// import account, {Account} from './account';
// import analytics, {Analytics} from './analytics';
// import encoding, {Encoding} from './encoding';
// import notifications, {Notifications} from './notifications';
// import player, {Player} from './player';
import trackable, {Trackable} from './endpoints/trackable';
import trackablelog, {Trackablelog} from './endpoints/trackablelog';
import logdraft, {Logdraft} from './endpoints/logdraft';
import userwaypoint, {UserWaypoint} from './endpoints/userwaypoint';
import list, {List} from './endpoints/list';
import user, {User} from './endpoints/user';
import friend, {Friend} from './endpoints/friend';
import utility, {Utility} from './endpoints/utility';

import logger from './utils/Logger';
import utils from './utils/Utils';
import {APIConfiguration, APIConfiguration} from './utils/types';

declare const __VERSION__: any;

const checkAuthorizationInConfiguration = configuration => {
  if (utils.isNoEmptyString(configuration.apiKey)) {
    return;
  }

  logger.log('No apiKey provided in configuration.');
};

const setupConfiguration = configuration => {
  const internalConfig: APIConfiguration = {
    ...configuration
  };

  if (configuration.debug && configuration.debug === true) {
    logger.enableLogging();
  }

  if (internalConfig.protocol === undefined) {
    internalConfig.protocol = 'https';
  }

  if (internalConfig.host === undefined) {
    internalConfig.host = 'api.geocaching.com';
  }

  if (internalConfig.basePath === undefined) {
    internalConfig.basePath = '/v1';
  }

  if (internalConfig.requestTimeout === undefined) {
    internalConfig.requestTimeout = 30000;
  }

  if (internalConfig.xApiClient === undefined) {
    internalConfig.xApiClient = 'geocaching-javascript';
  }

  if (internalConfig.additionalHeaders === undefined) {
    internalConfig.additionalHeaders = {};
  }

  internalConfig.apiBaseUrl = urljoin(internalConfig.protocol + '://' + internalConfig.host, internalConfig.basePath);

  internalConfig.httpHeaders = {
    'Content-Type': 'application/json',
    'X-Api-Key': internalConfig.apiKey,
    'X-Api-Client': internalConfig.xApiClient,
    'X-Api-Client-Version': `${__VERSION__}`,
    ...internalConfig.additionalHeaders
  };

  if (internalConfig.tenantOrgId !== undefined) {
    internalConfig.httpHeaders['X-Tenant-Org-Id'] = internalConfig.tenantOrgId;
  }

  return internalConfig;
};

export interface GeocachingAPI {
  trackable: Trackable;
  trackablelog: Trackablelog;
  logdraft: Logdraft;
  userwaypoint: UserWaypoint;
  list: List;
  user: User;
  friend: Friend;
  utility: Utility;
  // encoding: Encoding;
  // player: Player;
  // analytics: Analytics;
  // account: Account;
  // notifications: Notifications;
}

const Geocaching = (configuration: APIConfiguration): GeocachingAPI => {
  checkAuthorizationInConfiguration(configuration);

  const internalConfig: APIConfiguration = setupConfiguration(configuration);

  const geocaching: GeocachingAPI = {
    trackable: trackable(internalConfig),
    trackablelog: trackablelog(internalConfig),
    logdraft: logdraft(internalConfig),
    userwaypoint: userwaypoint(internalConfig),
    list: list(internalConfig),
    user: user(internalConfig),
    friend: friend(internalConfig),
    utility: utility(internalConfig)
    // encoding: encoding(internalConfig),
    // player: player(internalConfig),
    // analytics: analytics(internalConfig),
    // account: account(internalConfig),
    // notifications: notifications(internalConfig)
  };

  return geocaching;
};

export default Geocaching;
