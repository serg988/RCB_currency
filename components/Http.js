import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setInitRate } from '../store/actions/currency'
import { set } from 'react-native-reanimated'

const Http = (props) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate)
  const error = useSelector((state) => state.currency.error)

  useEffect(() => {
    dispatch(setInitRate())
  }, [])

  console.log('ERRRRROR', error)

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    )
  }
  return (
    <View style={styles.screen}>
      <View style={styles.title}>
        <Text>
          На дату: (
          {new Date(rate.Date).toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          )
        </Text>
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
        <Text>
          На предшествующую дату (
          {new Date(rate.PreviousDate).toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          )
        </Text>
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
    padding: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 24,
  },
})

export default Http
