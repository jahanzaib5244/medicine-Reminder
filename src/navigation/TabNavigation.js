import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationStrings from '../constants/NavigationStrings';
import { Image ,TouchableOpacity,Text } from 'react-native'

import { Home, Progress, Team, Treatment } from '../screens'
import ImagesPath from '../constants/ImagesPath';
import COLORS from '../style/COLORS'
import { moderateScale } from 'react-native-size-matters';


const Tab = createBottomTabNavigator();

export default function TabNavigation({navigation}) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:COLORS.blackOpacity80
                
                },
             headerTintColor:COLORS.white,
                headerShown: true,
                tabBarInactiveTintColor: COLORS.white50,
                tabBarActiveTintColor: COLORS.themeColor,
                tabBarStyle: ({
                    paddingBottom:8,
                    height:55,
                    backgroundColor:COLORS.blackOpacity80,
                    borderTopWidth:0
                  }),
            }}
        >
            <Tab.Screen name={NavigationStrings.Home} component={Home}
                options={{
                    tabBarIcon: ({ focused ,size }) => {
                        return (
                            <Image style={{
                                resizeMode:'contain',
                                height:size,
                                width:size,
                                tintColor: focused ? COLORS.themeColor : COLORS.white50
                            }} source={ImagesPath.home} />
                        )
                    }
                }} />
            <Tab.Screen name={NavigationStrings.Progress} component={Progress}
                options={{
                    tabBarIcon: ({ focused ,size}) => {
                        return (
                            <Image style={{
                                resizeMode:'contain',
                                height:size,
                                width:size,
                                tintColor: focused ? COLORS.themeColor : COLORS.white50
                            }} source={ImagesPath.ProgressBar} />
                        )
                    }
                }} />
            <Tab.Screen name={NavigationStrings.Team} component={Team}
                options={{
                    tabBarIcon: ({ focused ,size }) => {
                        return (
                            <Image style={{
                                resizeMode:'contain',
                                height:size,
                                width:size,
                                tintColor: focused ? COLORS.themeColor : COLORS.white50
                            }} source={ImagesPath.Team} />
                        )
                    }
                }} />
            <Tab.Screen name={NavigationStrings.Treatment} component={Treatment}
                options={{
                    headerRight:()=>{
                        return(
                            <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.Seeting)} style={{paddingHorizontal:moderateScale(20)}}>
                               <Image style={{tintColor:COLORS.white}} source={ImagesPath.setting} />
                            </TouchableOpacity>
                        )
                    },
                    tabBarIcon: ({ focused ,size }) => {
                        return (
                            <Image style={{
                                resizeMode:'contain',
                                height:size,
                                width:size,
                                tintColor: focused ? COLORS.themeColor : COLORS.white50
                            }} source={ImagesPath.Medicine} />
                        )
                    }
                }} />
        </Tab.Navigator>
    );
}