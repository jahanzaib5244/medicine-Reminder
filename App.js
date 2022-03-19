
import React,{useEffect} from 'react'
import Store from './src/config/Store'
import { Provider } from 'react-redux'
import Navigations from './src/navigation/Navigations'
import PushNotification from "react-native-push-notification";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

PushNotification.createChannel(
  {
    channelId: 'DemoAppID', // (required)
    channelName: 'DemoApp', // (required)
  },
  created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);


export default function App() {

  function setRepeatingNotification(interval){
    PushNotification.cancelAllLocalNotifications()
    if (interval == "every 30 seconds") {
      PushNotification.localNotificationSchedule({
        title: "My notification title",
        message: "My notification message",
        date: new Date(Date.now() + 30 * 1000), // first trigger in 30 secs
        channelId: 'DemoAppID',
        repeatType: 'time',
        repeatTime: 30 * 1000 // repeats every 30 seconds (value has to be defined in miliseconds when the repeatType is 'time')
      });
      Alert.alert("Successful!", "Your notification is coming in 30 seconds and will repeat itself every 30 seconds.")
    }
    else if (interval == "once in two days") {
      PushNotification.localNotificationSchedule({
        title: "My notification title",
        message: "My notification message",
        date: new Date(Date.now() + 10 * 1000), // first trigger in 10 secs
        channelId: 'DemoAppID',
        repeatType: 'day',
        repeatTime: 2, // repeats every 2 days
      });
      Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself once in two days.")
    }
    else if (interval == "once a week") {
      PushNotification.localNotificationSchedule({
        title: "My notification title",
        message: "My notification message",
        date: new Date(Date.now() + 10 * 1000), // first trigger in 10 secs
        channelId: 'DemoAppID',
        repeatType: 'week',
        repeatTime: 1 // repeats every week
      });
      Alert.alert("Successful!", "Your notification is coming in 10 seconds and will repeat itself every week.")
    }
  }

  
  
  return (
      <Provider store={Store}>
        <Navigations />
      </Provider>
  
  )
}
