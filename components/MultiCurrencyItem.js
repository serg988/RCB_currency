import React from 'react'
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native'
import { codes } from '../currencyCodes'
import Icon from 'react-native-ico-flags'

const MultiCurrencyItem = ({ code, name, rate }) => {
  const fl = codes[code]
  const flag = fl.text
  const ch = codes[code]
  const char = ch.char
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
        <Text>{`${char} = `}</Text>
        <Text>{`${rate} руб.`}</Text>
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
    marginHorizontal: 15,
  },
  nameBox: {
    justifyContent: 'center',
    width: '50%',
    paddingLeft: 15,
  },
})

export default MultiCurrencyItem
