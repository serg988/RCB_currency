import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Http from '../components/Http'

const HomeScreen = (props) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Курсы Валют</Text>
    <Http />
  </View>
)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 50,
  },
})

export default HomeScreen
