import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import StackNavigations from './StackNavigation'

export default function Navigations() {
  return (
    <NavigationContainer>
      <StackNavigations />
      </NavigationContainer>
      
  )
}