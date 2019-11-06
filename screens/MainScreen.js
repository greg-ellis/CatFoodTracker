import React, { useState, useEffect } from "react";
import * as Permissions from 'expo-permissions';
import { useSelector } from 'react-redux'
var moment = require('moment');

import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

const MainScreen = props => {
  let myState = useSelector(state => state)

  const [hasCameraPermission, setCameraPermission] = useState(null)

  useEffect(() => {
    getPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === 'granted');
    };
    getPermissions()
  }, [])

  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (myState.feedings.feedings.length == 0) {
    return (
      <View style={styles.screen}>
        <Text>Main {myState.feedings.feedings.length} {myState.foods.foods.length} </Text>
        <Button title="Scan" onPress={() => props.navigation.navigate('Scan')}  />
      </View>
    )
  }

  const lastFeeding = myState.feedings.feedings[myState.feedings.feedings.length - 1]
  const foods = myState.foods.foods
  const lastFood = foods.find(f => f.upc == lastFeeding.upc)

  console.log(JSON.stringify(myState, null, 2))
  return (
    <View style={styles.screen}>
      <Text>Main {myState.feedings.feedings.length} {myState.foods.foods.length} </Text>
      <Button title="Scan" onPress={() => props.navigation.navigate('Scan')}  />

      <Text>Last feeding:</Text>
      <Text>{lastFeeding.timestamp.format('M/D h:mma')}</Text>
      <Text>{lastFood ? lastFood.brand : 'Unknown'}</Text>
      <Text>{lastFood ? lastFood.title : 'Unknown'}</Text>
      <Button title='Edit' onPress={() => props.navigation.navigate('EditFeeding')}/>

      <Button title="Reports" />
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