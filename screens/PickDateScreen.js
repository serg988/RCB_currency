import React, { useState, useEffect } from 'react'
import { View, Text, Button, Platform, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { enableScreens } from 'react-native-screens'
import { useSelector, useDispatch } from 'react-redux'
import { setRate } from '../store/actions/currency'

enableScreens()

const PickDateScreen = ({ navigation }) => {
  const currentDate = useSelector((state) => state.currency.date)
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(true)
  const dispatch = useDispatch()

  const onChange = (e, selectedDate) => {
    console.log('CURRENT', selectedDate)

    setShow(Platform.OS === 'ios')

    setDate(selectedDate)
    dispatch(setRate(selectedDate))
    navigation.navigate('Tabs')
  }

  return (
    <View style={styles.container}>
      {show && (
        <DateTimePicker
          value={date}
          mode={'date'}
          color='#38220f'
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          is24Hour={true}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  datePicker: {
    width: 320,
    height: 360,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})

export default PickDateScreen
