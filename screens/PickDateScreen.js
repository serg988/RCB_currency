import React, { useState, useCallback } from 'react'
import { View, Button, Text, StyleSheet, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { enableScreens } from 'react-native-screens'
import { useSelector, useDispatch } from 'react-redux'
import { setRate } from '../store/actions/currency'

enableScreens()

const PickDateScreen = ({ navigation }) => {
  const currentDate = useSelector((state) => state.currency.date)
  const [date, setDate] = useState(currentDate)
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()

  const onChange = (event, selectedDate) => {
    setShow(false)
    dispatch(setRate(selectedDate))
    setDate(selectedDate)
  }

  // console.log(date)
  return (
    <View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={currentDate}
          mode={currentDate}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
      <View style={styles.dateText}>
        <Text style={styles.text}>
          {date.toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
      </View>

      <Button
        title='Показать курсы на заданную дату'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  dateText: {
    margin: 50,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
})

export default PickDateScreen
