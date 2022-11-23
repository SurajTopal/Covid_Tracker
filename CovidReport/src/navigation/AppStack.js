import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, TouchableOpacity} from 'react-native';

import {CustomDrawer} from '../components/index.js';
import {openDrawer} from './DrawerNavigation.js';

import {Menu, UserCheck} from '../assets/icons/index.js';

import {LIGHTRED, WHITE} from '../theme/color.js';

import {DRAWER_DATA} from './constant.js';

const Drawer = createDrawerNavigator();

function AppStack() {
  const drawerRendering = () => {
    return DRAWER_DATA.map((drawerInfo, index) => {
      const {name, component, icon, headerTitle, headerShown} = drawerInfo;
      return (
        <Drawer.Screen
          key={index}
          name={name}
          component={component}
          options={{
            drawerIcon: () => <View>{icon}</View>,
            headerLeft: () => (
              <TouchableOpacity onPress={openDrawer}>
                <Menu />
              </TouchableOpacity>
            ),
            headerRight: UserCheck,
            headerRightContainerStyle: {padding: 10},
            headerTitle: headerTitle,
            headerTitleAlign: 'center',
            headerShown: headerShown,
          }}
        />
      );
    });
  };

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: LIGHTRED,
        drawerActiveTintColor: WHITE,
        drawerType: 'front',
      }}>
      {drawerRendering()}
    </Drawer.Navigator>
  );
}

export default AppStack;
