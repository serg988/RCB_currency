import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const PickDateScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(true)

  const onChange = (event, selectedDate) => {
    setShow(false)
    setDate(selectedDate)
  }
  console.log(date)
  return (
    <View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={date}
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
    fontSize: 34,
  },
})

export default PickDateScreen
