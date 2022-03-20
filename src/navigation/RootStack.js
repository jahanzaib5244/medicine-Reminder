import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationStrings from '../constants/NavigationStrings';
import { ForgetPassword, Login, Signup } from '../screens';
import COLORS from '../style/COLORS';


const Stack = createStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.blackOpacity80,
                },
                headerTintColor: COLORS.white

            }} >
            <Stack.Screen options={{ headerShown: false }} name={NavigationStrings.Login} component={Login} />
            <Stack.Screen name={NavigationStrings.Signup} component={Signup} />
            <Stack.Screen name={NavigationStrings.ForgetPassword} component={ForgetPassword} />
        </Stack.Navigator>
    )
}