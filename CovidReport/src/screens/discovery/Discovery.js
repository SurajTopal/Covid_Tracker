import React from 'react';

import {CustomWebView} from '../../components';

import {DISCOVERY_URL} from '../constant';

function Discovery() {
  return <CustomWebView url={DISCOVERY_URL} />;
}

export default Discovery;
