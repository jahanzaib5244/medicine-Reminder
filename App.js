import { View, Text } from 'react-native'
import React from 'react'
import Store from './src/config/Store'
import { Provider } from 'react-redux'
import Navigations from './src/navigation/Navigations'




export default function App() {


  return (
    <Provider store={Store}>
      <Navigations />
    </Provider>
  )
}