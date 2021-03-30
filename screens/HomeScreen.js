import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Http from '../components/Http'

import PickDateScreen from './PickDateScreen'

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Курсы Валют</Text>
    <Http />
    <Button
      title='Выберите другую дату'
      onPress={() => navigation.navigate('PickDate')}
    />
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
