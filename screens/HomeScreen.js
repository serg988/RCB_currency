import React, { useState } from 'react'
import {
  View,
  ScrollView,
  RefreshControl,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import Main from '../components/Main'
import { setCurrentRate } from '../store/actions/currency'

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false)
  const dispatch = useDispatch()

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            dispatch(setCurrentRate())
          }}
        />
      }
    >
      <View style={styles.screen}>
        {/* <Text style={styles.title}>Курсы Валют</Text> */}
        <View style={{ width: '100%' }}>
          <Button
            style={{ outerWidth: '100%' }}
            title='Выберите дату'
            color='#9db802'
            onPress={() => navigation.navigate('PickDate')}
          />
        </View>
        <Main />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginTop: 50,
  },
})

export default HomeScreen
