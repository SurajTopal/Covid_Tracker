import React from 'react';

import TabNavigator from './TabNavigator.js';
import {Discovery, Education, Home, Map, News} from '../screens/index';

import {
  DiscoveryIcon,
  EducationIcon,
  HomeIcon,
  HomeTabIcon,
  MapIcon,
  NewsIcon,
} from '../assets/icons/';

export const DRAWER_DATA = [
  {
    name: 'Home',
    component: TabNavigator,
    icon: <HomeIcon width="20" height="20" />,
    headerShown: false,
  },
  {
    name: 'Map',
    component: Map,
    icon: <MapIcon width="20" height="20" />,
    headerTitle: 'World Wide Map',
    headerShown: true,
  },

  {
    name: 'Education',
    component: Education,
    icon: <EducationIcon width="20" height="20" />,
    headerTitle: 'Education',
  },
  {
    name: 'Discovery',
    component: Discovery,
    icon: <DiscoveryIcon width="20" height="20" />,
    headerTitle: 'Discovery',
  },
  {
    name: 'News',
    component: News,
    icon: <NewsIcon width="20" height="20" />,
    headerTitle: 'News',
  },
];

export const TAB_NAVIGATION_DATA = [
  {
    name: 'Home',
    component: Home,
    icon: <HomeTabIcon />,
    headerTitle: 'COVID - 19',
  },
  {
    name: 'Map',
    component: Map,
    icon: <MapIcon />,
    headerTitle: 'World Wide Map',
  },
  {
    name: 'Education',
    component: Education,
    icon: <EducationIcon />,
    headerTitle: 'Education',
  },
  {
    name: 'Discovery',
    component: Discovery,
    icon: <DiscoveryIcon />,
    headerTitle: 'Discovery',
  },
  {name: 'News', component: News, icon: <NewsIcon />, headerTitle: 'News'},
];
