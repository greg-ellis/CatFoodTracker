import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
var moment = require('moment');

import {
  View,
  Text,
  StyleSheet,
  Button,
  Slider
} from "react-native";

const MainScreen = props => {
  let myState = useSelector(state => state)

  const lastFeeding = myState.feedings.feedings[myState.feedings.feedings.length - 1]
  const foods = myState.foods.foods
  const lastFood = foods.find(f => f.upc == lastFeeding.upc)

  return (
    <View style={styles.screen}>
      <Text>Last feeding:</Text>
      <Text>{lastFeeding.timestamp.format('M/D h:mma')}</Text>
      <Text>{lastFood ? lastFood.brand : 'Unknown'}</Text>
      <Text>{lastFood ? lastFood.title : 'Unknown'}</Text>
      <Slider
         style={{ width: 300 }}
         step={1}
         minimumValue={0}
         maximumValue={10}
         value={0}
        //  onValueChange={val => this.setState({ age: val })}
        //  onSlidingComplete={ val => this.getVal(val)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MainScreen;