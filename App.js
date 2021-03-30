import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CurrencyNavigator from './navigation/CurrencyNavigator'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import currencyReducer from './store/reducers/currency'
import { useSelector, useDispatch } from 'react-redux'

import { setInitRate } from './store/actions/currency'

const rootReducer = combineReducers({
  currency: currencyReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// const dispatch = useDispatch()
// dispatch(setInitRate())


export default function App() {
  return (
    <Provider store={store}>
      <CurrencyNavigator />
    </Provider>
  )
}

const styles = StyleSheet.create({})
