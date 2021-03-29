import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'

const Http = (props) => {
  const [usd, setUsd] = useState('')
  const [eur, setEur] = useState('')
  const [date, setDate] = useState('')

  const [usdPrev, setUsdPrev] = useState('')
  const [eurPrev, setEurPrev] = useState('')
  const [datePrev, setDatePrev] = useState('')

  useEffect(() => {
    async function fetchData() {
      // https://www.cbr-xml-daily.ru//archive//2013//03//26//daily_json.js
      const data = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      setUsd(data.data.Valute.USD.Value)
      setEur(data.data.Valute.EUR.Value)
      let date = new Date(data.data.Date).toLocaleDateString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      setDate(date)
      setUsdPrev(data.data.Valute.USD.Previous)
      setEurPrev(data.data.Valute.EUR.Previous)
      let datePrev = new Date(data.data.PreviousDate).toLocaleDateString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      setDatePrev(datePrev)
    }
    fetchData()
  }, [])
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text>На текущую дату ({date})</Text>
      </View>
      <View style={styles.currencyContainer}>
        <View>
          <Text>USD: {usd}</Text>
        </View>
        <View>
          <Text>EUR: {eur}</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text>На пред. дату ({datePrev})</Text>
      </View>
      <View style={styles.currencyContainer}>
        <View>
          <Text>USD: {usdPrev}</Text>
        </View>
        <View>
          <Text>EUR: {eurPrev}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginBottom: 70,
    alignItems: 'center',
  },
  title: {
    // flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#ccc',
  },
})

export default Http
