import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { useSelector } from 'react-redux'

const ReportsMainScreen = props => {
  let myState = useSelector(state => state)

  const feedings = myState.feedings.feedings
  const foods = myState.foods.foods
  const lastFeeding = feedings[feedings.length - 1]
  const lastFood = foods.find(f => f.upc == lastFeeding.upc)

  return <View style={styles.content}>
    <Text>{feedings.length} feedings logged.</Text>
    <Text>{foods.length} food types logged.</Text>
  </View>
};


const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ReportsMainScreen;