import React from 'react'
import { ScrollView, Text, Button, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import MultiCurrencyItem from '../components/MultiCurrencyItem'

const MultiCurrencyScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate.Valute)
  console.log(rate)
  const unfilteredRates = []
  for (const key in rate) {
    unfilteredRates.push({
      currencyCode: key,
      currencyName: rate[key].Name,
      currencyRate: rate[key].Value,
      diff: (rate[key].Value - rate[key].Previous).toFixed(4),
    })
    console.log(key, rate[key].Name)
  }
  const rates = unfilteredRates.filter((rate) => rate.currencyCode !== 'XDR')

  return (
    <ScrollView style={styles.container}>
      <Button
        title='Выберите дату'
        color='#9db802'
        onPress={() => navigation.navigate('PickDate')}
      />
      {rates.map((r) => {
        return (
          <MultiCurrencyItem
            key={r.currencyCode}
            code={r.currencyCode}
            name={r.currencyName}
            rate={r.currencyRate}
            diff={r.diff}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfcdcb',
  },
})

export default MultiCurrencyScreen
