import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';

import {openDrawer} from './DrawerNavigation.js';

import CustomModalStats from '../components/custom-modal-stats/CustomModalStats.js';

import {LIGHTRED} from '../theme/color.js';
import {TAB_NAVIGATION_DATA} from './constant.js';

import {Menu} from '../assets/icons/index.js';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabRendering = () => {
    return TAB_NAVIGATION_DATA.map((tabInfo, index) => {
      const {name, component, icon, headerShown, headerTitle} = tabInfo;

      return (
        <Tab.Screen
          key={`tab-${index}`}
          name={name}
          component={component}
          options={{
            tabBarIcon: () => <View>{icon}</View>,
            headerLeft: () => (
              <TouchableOpacity onPress={openDrawer}>
                <Menu />
              </TouchableOpacity>
            ),
            headerShown: headerShown,
            headerTitle: headerTitle,
            headerTitleAlign: 'center',
            headerRight: CustomModalStats,
            headerRightContainerStyle: {padding: 10},
            headerLeftContainerStyle: {padding: 10},
          }}
        />
      );
    });
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: LIGHTRED,
      }}>
      {tabRendering()}
    </Tab.Navigator>
  );
};

export default TabNavigator;
