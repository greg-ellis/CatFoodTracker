import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { useSelector } from 'react-redux'

const EditFoodScreen = props => {
  // const favMeals = useSelector(state => state.meals.favoriteMeals)

  return <View style={styles.content}>
    <DefaultText>Edit food screen</DefaultText>
  </View>
};


const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default EditFoodScreen;
