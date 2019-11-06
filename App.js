import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import CFTNavigator from "./navigation/CFTNavigator";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import foodsReducer from './store/reducers/foods'
import feedingsReducer from './store/reducers/feedings'

const rootReducer = combineReducers({
  foods: foodsReducer,
  feedings: feedingsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return <Provider store={store} >
    <CFTNavigator />
  </Provider>
}