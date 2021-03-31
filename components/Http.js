import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setInitRate } from '../store/actions/currency'
import { getParsedDate } from '../components/getFormattedDate'

const Http = (props) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate)
  const error = useSelector((state) => state.currency.error)

  const date = new Date(rate.Date)

  useEffect(() => {
    dispatch(setInitRate())
  }, [])

  let errorText = ''
  if (error) errorText = error

  return (
    <View style={styles.screen}>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
      <View style={styles.title}>
        <Text>На дату: ({getParsedDate(rate.Date)})</Text>
      </View>
      <View style={styles.currencyContainer}>
        <View>
          <Text>USD: {rate.Valute.USD.Value}</Text>
        </View>
        <View>
          <Text>EUR: {rate.Valute.EUR.Value}</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text>На более раннюю дату: ({getParsedDate(rate.PreviousDate)})</Text>
      </View>
      <View style={styles.currencyContainer}>
        <View>
          <Text>USD: {rate.Valute.USD.Previous}</Text>
        </View>
        <View>
          <Text>EUR: {rate.Valute.EUR.Previous}</Text>
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
  errorContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'purple',
    fontSize: 14,
    textAlign: 'center',
  },
})

export default Http
