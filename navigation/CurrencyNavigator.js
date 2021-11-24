import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'

import { OverflowMenuProvider } from 'react-navigation-header-buttons'
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import PickDateScreen from '../screens/PickDateScreen'
import About from '../screens/About'
import MultiCurrencyScreen from '../screens/MultiCurrencyScreen'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesome5 name='home' size={24} color='black' />
          ),
        }}
      />
      <Tab.Screen
        name='Все валюты'
        component={MultiCurrencyScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Foundation name='dollar-bill' size={34} color='black' />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

//

function CurrencyNavigator(navigation) {
  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <Stack.Navigator>
          <Stack.Screen name='Tabs' component={Tabs} />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: 'Текущие курсы валют',

              headerStyle: {
                backgroundColor: '#5094cb',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name='PickDate'
            component={PickDateScreen}
            options={{ title: 'Выбор Даты' }}
          />
          <Stack.Screen
            name='About'
            component={About}
            options={{ title: 'О приложении' }}
          />
        </Stack.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  )
}

export default CurrencyNavigator
