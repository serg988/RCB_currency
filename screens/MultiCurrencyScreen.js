import React from 'react'
import { ScrollView, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const MultiCurrencyScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate.Valute)
  // console.log('MULTI RATE', rate)
  const rates = []
  for (const key in rate) {
    rates.push({
      currencyCode: key,
      currencyName: rate[key].Name,
      currencyRate: rate[key].Value,
    })
    console.log(key, rate[key].Name)
  }

  return (
    <ScrollView>
      <Button
        title='Выберите дату'
        color='#5094cb'
        onPress={() => navigation.navigate('PickDate')}
      />
      {rates.map((r) => {
        return <Text>{r.currencyCode}</Text>
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default MultiCurrencyScreen
