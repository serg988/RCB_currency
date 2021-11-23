import React from 'react'
import { ScrollView, Text, Button, StyleSheet } from 'react-native'
import { codes } from '../currencyCodes'
import Icon from 'react-native-ico-flags'

const MultiCurrencyItem = ({ code, name, rate }) => {
  const flag = codes[code]
  console.log('FLAG', flag)
  return (
    <ScrollView style={styles.container}>
      <Icon name={flag} height='40' width='40' />
      <Text>{code}</Text>
      <Text>{name}</Text>
      <Text>{rate}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})

export default MultiCurrencyItem
