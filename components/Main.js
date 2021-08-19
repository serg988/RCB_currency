import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setInitRate, setCurrentRate } from '../store/actions/currency'
import { getParsedDate } from './getFormattedDate'
import { FontAwesome } from '@expo/vector-icons'

const Http = (props) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate)
  const currentUsd = useSelector((state) => state.currency.currentUsd)
  const currentEur = useSelector((state) => state.currency.currentEur)
  const error = useSelector((state) => state.currency.error)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    dispatch(setInitRate())
  }, [])

  setTimeout(()=>{}, 3000)

  useEffect(() => {
    dispatch(setCurrentRate())
  }, [])

  useEffect(() => {
    if (error) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 3000)
    }
  }, [error])

  return (
    <View style={styles.screen}>
      {showError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.title}>
        <Text>Текущий курс (неофициальный)</Text>
      </View>
      <View style={styles.currencyContainer}>
        {/* {rate.Valute.USD.Value > rate.Valute.USD.Previous ? (
          <FontAwesome name='long-arrow-up' size={36} color='red' />
        ) : (
          <FontAwesome name='long-arrow-down' size={36} color='green' />
        )} */}
        <View style={styles.currencyLine}>
          <Text style={styles.currencyText}>$: {currentUsd}</Text>
        </View>
        {/* {rate.Valute.EUR.Value > rate.Valute.EUR.Previous ? (
          <FontAwesome name='long-arrow-up' size={36} color='red' />
        ) : (
          <FontAwesome name='long-arrow-down' size={36} color='green' />
        )} */}
        <View style={styles.currencyLine}>
          <Text style={styles.currencyText}>€: {currentEur}</Text>
        </View>
      </View>

      <View style={styles.title}>
        <Text>На дату (официальный): ({getParsedDate(rate.Date)})</Text>
      </View>
      <View style={styles.currencyContainer}>
        {rate.Valute.USD.Value > rate.Valute.USD.Previous ? (
          <FontAwesome name='long-arrow-up' size={36} color='red' />
        ) : (
          <FontAwesome name='long-arrow-down' size={36} color='green' />
        )}
        <View style={styles.currencyLine}>
          <Text style={styles.currencyText}>$: {rate.Valute.USD.Value}</Text>
        </View>
        {rate.Valute.EUR.Value > rate.Valute.EUR.Previous ? (
          <FontAwesome name='long-arrow-up' size={36} color='red' />
        ) : (
          <FontAwesome name='long-arrow-down' size={36} color='green' />
        )}
        <View style={styles.currencyLine}>
          <Text style={styles.currencyText}>€: {rate.Valute.EUR.Value}</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text>На более раннюю дату: ({getParsedDate(rate.PreviousDate)})</Text>
      </View>
      <View style={styles.currencyContainer}>
        <View style={styles.currencyLine}>
          <Text style={styles.currencyText}>$: {rate.Valute.USD.Previous}</Text>
        </View>
        <View style={styles.currencyLine}>
          <Text style={styles.currencyText}>€: {rate.Valute.EUR.Previous}</Text>
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
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    elevation: 5,
    backgroundColor: '#fff',
  },
  currencyLine: {
    flex: 1,
  },
  currencyText: {
    fontSize: 20,
  },
  errorContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#790e0e',
    fontSize: 14,
    textAlign: 'center',
  },
})

export default Http
