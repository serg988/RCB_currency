import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { codes } from '../currencyCodes'
import Icon from 'react-native-ico-flags'

const MultiCurrencyItem = ({ code, name, rate, diff }) => {
  const fl = codes[code]
  const flag = fl.text
  const ch = codes[code]
  const char = ch.char
  const cu = codes[code]
  const curr = cu.curr
  console.log('FLAG', flag)
  return (
    <View style={styles.container}>
      <View>
        <Text>{code}</Text>
        <Icon name={flag} height='40' width='40' />
      </View>
      <View style={styles.nameBox}>
        <Text style={styles.nameText}>{curr}</Text>
      </View>
      <View>
        <Text>{`${char} = `}</Text>
        <Text>{`${rate} руб.`}</Text>
        {diff <= 0 && <Text style={{ color: 'red' }}>{`${diff}`}</Text>}
        {diff > 0 && <Text style={{ color: 'green' }}>{`+${diff}`}</Text>}
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
  nameText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
})

export default MultiCurrencyItem
