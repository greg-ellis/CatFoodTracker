import React, { useState } from "react";
import {
  View,
  // Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
  // Button
} from "react-native";
import { Container, Header, Content, Button, Text } from "native-base";
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanScreen = props => {
  const [scanned, setScanned] = useState(false)

  handleBarCodeScanned = ({ type, data }) => {
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  // const [game, setGame] = useState(null);

  // const scan = game => {
  //   props.navigation.navigate({
  //     routeName: "Scan"
  //       });
  // };

  return (
    <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ScanScreen;
