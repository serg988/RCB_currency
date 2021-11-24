import React from 'react'
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native'
import { codes } from '../currencyCodes'
import Icon from 'react-native-ico-flags'

const MultiCurrencyItem = ({ code, name, rate }) => {
  const flag = codes[code]
  console.log('FLAG', flag)
  return (
    <View style={styles.container}>
      <View>
        <Text>{code}</Text>
        <Icon name={flag} height='40' width='40' />
      </View>
      <View style={styles.nameBox}>
        <Text>{name}</Text>
      </View>
      <View>
        <Text>{rate}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  nameBox: {
    justifyContent: 'center',
  },
})

export default MultiCurrencyItem
