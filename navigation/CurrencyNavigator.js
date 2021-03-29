import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import PickDateScreen from '../screens/PickDateScreen'


const Stack = createStackNavigator()

function CurrencyNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Текущие курсы валют' }}
        />
        <Stack.Screen name='PickDate' component={PickDateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CurrencyNavigator
