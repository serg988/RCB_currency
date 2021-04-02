import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const About = () => (
  <View style={styles.screen}>
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Особенности приложения:</Text>
    </View>
    <View style={styles.textBody}>
      <Text>- Используется официальная база курсов валют ЦБ РФ.</Text>
      <Text>
        - Минималистичный дизайн - оставлено только самое необходимое.
      </Text>
      <Text>
        - При отсутствии курса в базе на определенную дату, будут выведены курсы
        на ближайшие прошедшую и будущую даты.
      </Text>
    </View>
    <Text style={styles.textBottom}>Версия: 1.0.0</Text>
    <Text style={styles.textBottom}>Written by: Sergey Popov</Text>
    <Text style={styles.textBottom}>Email me: serg98888@gmail.com</Text>
  </View>
)

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerContainer: {
    marginVertical: 70,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textBody: {
    marginBottom: 30,
  },
  textBottom: {
    color: 'steelblue',
  },
})

export default About
