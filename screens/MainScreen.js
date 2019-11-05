import React, { useState, useEffect } from "react";
import * as Permissions from 'expo-permissions';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
// import { Container, Header, Content, Button, Text } from "native-base";

const MainScreen = props => {
  console.log('MainScreen code hit')
  // const [game, setGame] = useState(null);
  const [hasCameraPermission, setCameraPermission] = useState(null)

  useEffect(() => {
    getPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === 'granted');
    };
    getPermissions()
  }, [])

  // const scan = game => {
  //   props.navigation.navigate({
  //     routeName: "Scan"
  //       });
  // };

  if (hasCameraPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.screen}>
      <Text>Madsiin</Text>
      <Button title="Scan" onPress={() => props.navigation.navigate("Scan")} />
      <Button title="Edit" />
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