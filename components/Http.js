import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setInitRate } from '../store/actions/currency'
import { getParsedDate } from '../components/getFormattedDate'

const Http = (props) => {
  const dispatch = useDispatch()
  const rate = useSelector((state) => state.currency.rate)
  const error = useSelector((state) => state.currency.error)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    dispatch(setInitRate())
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
        <Text>На дату: ({getParsedDate(rate.Date)})</Text>
      </View>
      <View style={styles.currencyContainer}>
        <View>
          <Text style={styles.currencyText}>USD: {rate.Valute.USD.Value}</Text>
        </View>
        <View>
          <Text style={styles.currencyText}>EUR: {rate.Valute.EUR.Value}</Text>
        </View>
      </View>
      <View style={styles.title}>
        <Text>На более раннюю дату: ({getParsedDate(rate.PreviousDate)})</Text>
      </View>
      <View style={styles.currencyContainer}>
        <View>
          <Text style={styles.currencyText}>
            USD: {rate.Valute.USD.Previous}
          </Text>
        </View>
        <View>
          <Text style={styles.currencyText}>
            EUR: {rate.Valute.EUR.Previous}
          </Text>
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
    backgroundColor: '#d0efff',
  },
  currencyText: {
    fontSize: 18,
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
