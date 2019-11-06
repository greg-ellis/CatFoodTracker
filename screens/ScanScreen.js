import React, { useState, useCallback, useEffect } from "react"
import {
  View,
  // Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
  // Button
} from "react-native"
import { Container, Header, Content, Button, Text } from "native-base"
import { BarCodeScanner } from "expo-barcode-scanner"
import { useSelector, useDispatch } from "react-redux"
import { addFeeding } from "../store/actions/feedings"
import { addFood } from "../store/actions/foods"
import { feeding } from "../models/feeding"
import { food } from '../models/food'
var moment = require("moment")
const axios = require('axios');

const { width } = Dimensions.get("window")
const qrSize = width * 0.7

const ScanScreen = props => {
  const [scannedUPC, setScannedUPC] = useState(null)

  let myState = useSelector(state => state)

  handleBarCodeScanned = ({ type, data }) => {
    setScannedUPC(data)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    getUPCInfo = async (upc) => {
      const url = `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`
      console.log(url)
      const results = await axios.get(url);
      console.log('UPC lookup results:')
      if (results.status == 200 && results.data) {
        const data = results.data
        if (data.code && data.code == "OK" && data.items && data.items.length > 0) {
          const info = data.items[0]
          console.log(info.brand)
          console.log(info.title)
          let image = null
          if (info.images && info.images.length > 0)
          {
            image = info.images[0]
          }
          const newFood = food(upc, info.brand, info.title, image)
          dispatch(addFood(newFood))      
        }
      } else {
        console.log('BAD UPC CODE LOOKUP?')
        console.log(results)
      }
    };

    if (scannedUPC === null) return
    const newFeeding = feeding(moment(), scannedUPC, null)
    dispatch(addFeeding(newFeeding))

    console.log('myState:', myState)
    const foods = myState.foods.foods
    const thisFood = foods.find(f => f.upc == scannedUPC)
    console.log('foods is', foods)
    console.log('thisFood is', thisFood)
    if (thisFood === undefined) {
      getUPCInfo(scannedUPC)
    }

    props.navigation.navigate("Main")
  }, [scannedUPC])

  // https://forums.expo.io/t/styling-the-barcodescanner/4637/8
  return (
    <BarCodeScanner
      onBarCodeScanned={scannedUPC ? undefined : this.handleBarCodeScanned}
      style={[StyleSheet.absoluteFill, styles.container]}
    >
      <Text style={styles.description}>Scan your QR code</Text>
      <Image style={styles.qr} source={require("../assets/aim.png")} />
      <Text onPress={() => props.navigation.pop()} style={styles.cancel}>
        Cancel
      </Text>
    </BarCodeScanner>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center"
  },
  qr: {
    marginTop: "20%",
    marginBottom: "20%",
    width: qrSize,
    height: qrSize
  },
  description: {
    fontSize: width * 0.09,
    marginTop: "30%",
    textAlign: "center",
    width: "70%",
    color: "white"
  },
  cancel: {
    marginTop: 100,
    fontSize: width * 0.05,
    textAlign: "center",
    width: "70%",
    color: "white"
  }
})

export default ScanScreen
