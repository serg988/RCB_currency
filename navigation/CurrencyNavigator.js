import * as React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
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

const Stack = createStackNavigator()

function CurrencyNavigator(navigation) {
  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: 'Текущие курсы валют',
              // headerRight: () => (
              //   <Button
              //     onPress={() => {}}
              //     title='...'
              //     backgroundColor='#5094cb'
              //     color='#5094cb'
              //   />
              // ),
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
