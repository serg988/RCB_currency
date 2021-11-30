import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons' 

import { useSelector } from 'react-redux'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native'

import { OverflowMenuProvider } from 'react-navigation-header-buttons'

import HomeScreen from '../screens/HomeScreen'
import PickDateScreen from '../screens/PickDateScreen'
import About from '../screens/About'
import MultiCurrencyScreen from '../screens/MultiCurrencyScreen'
import { getParsedDate } from '../components/getFormattedDate'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

// const Tab = createBottomTabNavigator()

// function getHeaderTitle(route) {
//   // If the focused route is not found, we need to assume it's the initial screen
//   // This can happen during if there hasn't been any navigation inside the screen
//   // In our case, it's "Feed" as that's the first screen inside the navigator
//   const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

//   const rate = useSelector((state) => state.currency.rate)

//   switch (routeName) {
//     case 'Home':
//       return `Курс на ${getParsedDate(rate.Date)}`
//     case 'Multi':
//       return 'Multi-currency'
//   }
// }

function Tabs({ navigation, route }) {
  const rate = useSelector((state) => state.currency.rate)
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({ headerTitle: getHeaderTitle(route) })
  // }, [navigation, route])
  useEffect(() => {
    console.log('DATE', getParsedDate(rate.Date))
    // console.log('Navigation', navigation)
    navigation.setOptions({
      headerTitle: `Курс на ${getParsedDate(rate.Date)}`,
    })
  }, [navigation, route, rate])
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   activeTintColor: '#fff',
      //   inactiveTintColor: 'lightgray',
      //   activeBackgroundColor: '#025b0e',
      //   inactiveBackgroundColor: '#9db802',
      //   style: {
      //     backgroundColor: '#025b0e',
      //     paddingBottom: 0,
      //   },
      // }}
      activeColor='#fff'
      inactiveColor='#9db802'
      barStyle={{
        backgroundColor: '#025b0e',
        innerHeight: 55,
        paddingBottom: 8,
      }}
      shifting={true}
      labeled={true}
    >
      <Tab.Screen
        name='Домой'
        component={HomeScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name='home-currency-usd'
              size={24}
              color='white'
            />
          ),
        }}
      />
      <Tab.Screen
        name='Все валюты'
        component={MultiCurrencyScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name='currency-sign'
              size={24}
              color='white'
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function CurrencyNavigator() {
  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#025b0e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name='Tabs'
            // options={({ route }) => ({
            //   headerTitle: getHeaderTitle(route),
            // })}
            component={Tabs}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              title: 'Текущие курсы валют',

              headerStyle: {
                backgroundColor: '#9db802',
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
