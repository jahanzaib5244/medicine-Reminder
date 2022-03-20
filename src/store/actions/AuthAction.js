import { LOGIN, LOGOUT } from '../states'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { seduleNotification } from '../../helperfunction/NotificationHandler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import PushNotification, { Importance } from "react-native-push-notification";

export const doLogin = (setloading, email, password) => async (dispatch) => {
    try {
        setloading(true)
        const res = await auth().signInWithEmailAndPassword(email, password)
        setloading(false)
        await AsyncStorage.setItem('uid', res.user.uid)
        database().ref(`users/${res.user.uid}/AllMedicine`).on('value', async (snapshot) => {
            if (snapshot.exists()) {
                const AllMedicine = Object.values(snapshot.val()).filter(async (val) => {
                    if (val.AllStatus === "countinue") {
                        seduleNotification(val.notificationID, val.key, val.Date, val.Time, val.displayTime, val.MedName, val.Dose, val.Unit)
                    }
                })
            }
        })

        
        PushNotification.getScheduledLocalNotifications(item=>{
            console.log(item,'notification')
        })

    } catch (error) {
        setloading(false)
        const errorMessage = (error.code).split('/')
        console.log(errorMessage[1])

    }
}
export const doSingup = (setloading, password, email, firstName, lastName) => async (dispatch) => {
    try {
        setloading(true)
        const res = await auth().createUserWithEmailAndPassword(email, password)
        setloading(false)
        console.log(res)
    } catch (error) {
        setloading(false)
        const errorMessage = (error.code).split('/')
        console.log(errorMessage)
        if (error.code === 'auth/email-already-in-use') {
            console.log('Email already exist try a different one')
        } else {
            const errorMessage = (error.code).split('/')
        }
    }
}

export const doForgetPassword = (setloading, email) => async (dispatch) => {
    try {
        setloading(true)
        const res = await auth().sendPasswordResetEmail(email)
        setloading(false)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
export const doLogout = () => async (dispatch) => {
    try {
        const allMedicine = {}
        PushNotification.cancelAllLocalNotifications()
        await AsyncStorage.removeItem('uid')
        const res = await auth().signOut()
        console.log(res)
        dispatch({
            type: LOGOUT,
            payload: allMedicine
        })
    } catch (error) {
        console.log(error)
    }
}