import {DrawerActions} from '@react-navigation/native';

import {navigationRef} from '../../App.js';

export function openDrawer() {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
}
