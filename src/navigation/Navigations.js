import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

import StackNavigations from './StackNavigation'
import RootStack from './RootStack'

export default function Navigations() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <NavigationContainer>
        <RootStack />

      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <StackNavigations />

    </NavigationContainer>

  )
}
// {AuthState
//   ?
//   <StackNavigations />
//   :