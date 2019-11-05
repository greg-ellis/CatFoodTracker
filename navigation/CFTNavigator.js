import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from '../screens/MainScreen';
import ScanScreen from '../screens/ScanScreen';

const defaultStackNavOptions = {
  header: null
};

const CFTNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Scan: ScanScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

export default createAppContainer(CFTNavigator);
