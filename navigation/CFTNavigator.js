import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from '../screens/MainScreen'
import ScanScreen from '../screens/ScanScreen'
import EditFoodScreen from '../screens/EditFoodScreen'
import EditFeedingScreen from '../screens/EditFeedingScreen'
import ReportsMainScreen from '../screens/ReportsMainScreen'

const defaultStackNavOptions = {
  header: null
};

const CFTNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Scan: ScanScreen,
    EditFood: EditFoodScreen,
    EditFeeding: EditFeedingScreen,
    Reports: ReportsMainScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

export default createAppContainer(CFTNavigator)
