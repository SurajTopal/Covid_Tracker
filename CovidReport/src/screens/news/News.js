import React from 'react';

import {CustomWebView} from '../../components/index.js';

import {NEWS_URL} from '../constant.js';

function News() {
  return <CustomWebView url={NEWS_URL} />;
}

export default News;
