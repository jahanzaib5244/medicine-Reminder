import PushNotification, { Importance } from "react-native-push-notification";


// Create channel for specific notification
export const createChannelNoti = () => {
    return (PushNotification.createChannel(
        {
            channelId: `medicineReminder`, // (required)
            channelName: `medicine name`, // (required)
        },
        created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    )
    )
}
// delete channel for specific notification
export const deleteChannel = (id, name) => {
    PushNotification.createChannel(
        {
            channelId: 'DemoAppID', // (required)
            channelName: 'DemoApp', // (required)
        },
        created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
}
// register sedule notification
export const seduleNotification = (notificationID,FirebaseID, date, time, displayTime, Name, dose, unit) => {
    const fTime = time.split(':')
    const fDate = date.split('-')
    console.log(fTime, 'time')
    console.log(fDate, 'date')
    PushNotification.cancelAllLocalNotifications()
    const FireDATE = new Date(fDate[2], (fDate[1] - 1), fDate[0], fTime[0], fTime[1], 0, 0)
    console.log(FireDATE)
    
     const notiTitile=`Medication due at ${displayTime}`
     const notiMsg= `${Name} ${dose} ${unit}(s)`
     PushNotification.localNotificationSchedule({
         id:`${notificationID}`,
        title: `Medication due at ${displayTime}`,
        message: `${Name} ${dose} ${unit}(s)`,
        date: FireDATE, // first trigger in 30 secs
        channelId: 'DemoAppID',
        allowWhileIdle: false,
        vibration: 5000,
        playSound: true,
        repeatType: 'hour',
        soundName: "noti.wav",
        repeatTime: 24,
    });
    var notificationId=''
  
   PushNotification.getScheduledLocalNotifications((res)=>{
       console.log(res,'get sedule notification')
   })

   return(notificationId)
}
export const snoozNotification = (title, msg, fireDate, channelid,) => {
    PushNotification.localNotificationSchedule({
        title: "My notification title",
        message: "My notification message",
        date: new Date(Date.now() + 30 * 1000), // first trigger in 30 secs
        channelId: 'DemoAppID',
        repeatType: 'time',
        repeatTime: 30 * 1000 // repeats every 30 seconds (value has to be defined in miliseconds when the repeatType is 'time')
    });
}
