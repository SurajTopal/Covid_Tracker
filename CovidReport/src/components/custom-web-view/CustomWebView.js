import React from 'react';
import WebView from 'react-native-webview';

import {LoadingIndicator} from '../index.js';

export default function CustomWebView(props) {
  const {url} = props;
  return (
    <WebView
      source={{uri: url}}
      startInLoadingState={true}
      renderLoading={LoadingIndicator}
    />
  );
}
