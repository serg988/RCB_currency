import React from 'react'
import { ScrollView, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MultiCurrencyItem from '../components/MultiCurrencyItem'

const MultiCurrencyScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate.Valute)
  const unfilteredRates = []
  for (const key in rate) {
    unfilteredRates.push({
      currencyCode: key,
      currencyName: rate[key].Name,
      currencyRate: rate[key].Value,
    })
    console.log(key, rate[key].Name)
  }
  const rates = unfilteredRates.filter((rate) => rate.currencyCode !== 'XDR')

  return (
    <ScrollView>
      <Button
        title='Выберите дату'
        color='#5094cb'
        onPress={() => navigation.navigate('PickDate')}
      />
      {rates.map((r) => {
        return (
          <MultiCurrencyItem
            key={r.currencyCode}
            code={r.currencyCode}
            name={r.currencyName}
            rate={r.currencyRate}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default MultiCurrencyScreen
