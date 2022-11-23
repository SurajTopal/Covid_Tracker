import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator.js';
import {Provider} from 'react-redux';
import store from './src/store/store.js';

export const navigationRef = React.createRef();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
