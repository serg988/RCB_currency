import React, { useState } from 'react'
import { View } from 'react-native'
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
    setShow(false)
    dispatch(setRate(selectedDate))
    setDate(selectedDate)
    navigation.navigate('Home')
  }

  return (
    <View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={currentDate}
          mode={date}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
    </View>
  )
}

export default PickDateScreen
