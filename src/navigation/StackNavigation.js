import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStrings from '../constants/NavigationStrings';
import TabNavigation from './TabNavigation';
import { AddMeasurement, ConfirmMedicine, SelectMeasurement, SelectMedicine } from '../screens';
import COLORS from '../style/COLORS';

const Stack = createStackNavigator();

export default function StackNavigations() {
  return (
    <Stack.Navigator screenOptions={{
         headerStyle:{
           backgroundColor:COLORS.blackOpacity80,
         },
         headerTintColor:COLORS.white  

    }} 
    >
      <Stack.Screen options={{headerShown:false}} name={NavigationStrings.Home2} component={TabNavigation} />
      <Stack.Screen name={NavigationStrings.SelectMedicine} component={SelectMedicine} />
      <Stack.Screen  name={NavigationStrings.ConfirmMedicine} component={ConfirmMedicine}
      options={({route})=>({
        title:route.params.Name
      })}
      />
      <Stack.Screen name={NavigationStrings.AddMeasurement} component={AddMeasurement} 
       options={({route})=>({
        title:route?.params?.name
      })}
      />
      <Stack.Screen  name={NavigationStrings.SelectMeasurement} component={SelectMeasurement} />
    </Stack.Navigator>
  );
}