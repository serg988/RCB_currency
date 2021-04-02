import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const About = (props) => (
  <View style={styles.screen}>
    <Text>Версия: 1.0.0</Text>
    <Text>Written by: Sergey Popov</Text>
    <Text>Email me: serg98888@gmail.com</Text>
  </View>
)

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})

export default About
