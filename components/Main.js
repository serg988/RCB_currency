import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setInitRate, setCurrentRate } from '../store/actions/currency'
import { getParsedDate } from './getFormattedDate'
import { FontAwesome } from '@expo/vector-icons'

const Main = (props) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate)
  const currentUsd = useSelector((state) => state.currency.currentUsd)
  const currentEur = useSelector((state) => state.currency.currentEur)
  const error = useSelector((state) => state.currency.error)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    dispatch(setInitRate())
  }, [])

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
      <View style={styles.title}>
        <Text>Текущий курс (неофициальный)</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.currencyBox}>
          <Text style={styles.currencyText}>$: {currentUsd}</Text>
        </View>

        <View style={styles.currencyBox}>
          <Text style={styles.currencyText}>€: {currentEur}</Text>
        </View>
      </View>

      <View style={styles.title}>
        <Text>Официальный. Дата: ({getParsedDate(rate.Date)})</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.currencyBox}>
          {rate.Valute.USD.Value > rate.Valute.USD.Previous ? (
            <FontAwesome
              name='long-arrow-up'
              size={24}
              color='red'
              style={{ position: 'absolute', left: 5 }}
            />
          ) : (
            <FontAwesome
              name='long-arrow-down'
              size={24}
              color='green'
              style={{ position: 'absolute', left: 5 }}
            />
          )}
          <Text style={styles.currencyText}>
            $: {rate.Valute.USD.Value.toFixed(4)}
          </Text>
        </View>

        <View style={styles.currencyBox}>
          {rate.Valute.EUR.Value > rate.Valute.EUR.Previous ? (
            <FontAwesome
              name='long-arrow-up'
              size={24}
              color='red'
              style={{ position: 'absolute', left: 5 }}
            />
          ) : (
            <FontAwesome
              name='long-arrow-down'
              size={24}
              color='green'
              style={{ position: 'absolute', left: 5 }}
            />
          )}
          <Text style={styles.currencyText}>
            €: {rate.Valute.EUR.Value.toFixed(4)}
          </Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text>На более раннюю дату: ({getParsedDate(rate.PreviousDate)})</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.currencyBox}>
          <Text style={styles.currencyText}>
            $: {rate.Valute.USD.Previous.toFixed(4)}
          </Text>
        </View>
        <View style={styles.currencyBox}>
          <Text style={styles.currencyText}>
            €: {rate.Valute.EUR.Previous.toFixed(4)}
          </Text>
        </View>
      </View>
      {showError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#9db802',
    // marginBottom: 70,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  title: {
    // flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
  },
  currencyBox: {
    padding: 10,
    width: '47%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 7,
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

export default Main
