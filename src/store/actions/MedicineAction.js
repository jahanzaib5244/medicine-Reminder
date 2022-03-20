import { ALLMEDICINE, DAILYMEDICINE, MEDICINEHISTORY, USERDATA } from "../states";
import database from '@react-native-firebase/database';
import moment from 'moment'
import COLORS from "../../style/COLORS";
import { seduleNotification } from "../../helperfunction/NotificationHandler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AddMedicineDB = (Name, selectedUnit, actualDose, time, Date, displayTime) => async (dispatch) => {
    // console.log(Name,selectedUnit,actualDose,time,Date)

    try {

        const uid = await AsyncStorage.getItem('uid')
        const AllMedicine = database().ref(`users/${uid}/AllMedicine`).push()
        const notificationID = Math.floor(Math.random() * 1000000000);
        seduleNotification(notificationID, AllMedicine.key, Date, time, displayTime, Name, actualDose, selectedUnit)
        const res = await AllMedicine.set({
            key: AllMedicine.key,
            notificationID,
            MedName: Name,
            Date: Date,
            Time: time,
            Dose: actualDose,
            Unit: selectedUnit,
            Leftpills: 1,
            AllStatus: 'countinue',
            displayTime,
        })

        const date = moment.now()
        const saveDate = moment(date).format('DD-MM-YYYY')
        const HistoryPath = database().ref(`users/${uid}/History/${saveDate}/${AllMedicine.key}`)

        const res2 = await HistoryPath.set({
            key: AllMedicine.key,
            MedName: Name,
            notificationID,
            Date: Date,
            Time: time,
            Dose: actualDose,
            Unit: selectedUnit,
            Leftpills: 1,
            Status: 'pending',
            displayTime,

        })
        // console.log(res, res2)
    } catch (error) {
        console.log(error)
    }

}

export const DBupdateStatus = (item, status) => async (dispatch) => {
    try {
        const uid = await AsyncStorage.getItem('uid')
        console.log(uid)
        const date = moment.now()
        const saveDate = moment(date).format('DD-MM-YYYY')
        const res = await database().ref(`users/${uid}/History/${saveDate}/${item.key}`).update({
            Status: status,
        })

    } catch (error) {
        console.log(error)
    }

}





export const AddMeasurement = (Name, selectedUnit, actualDose, time, Date) => async (dispatch) => {
    // console.log(Name, selectedUnit, actualDose, time, Date)

    try {
        const uid = await AsyncStorage.getItem('uid')
        const res = await database().ref(`users/${uid}/History`).push().set({
            medName: Name,
            date: Date,
            time: time,
            dose: actualDose,
            unit: selectedUnit,
            leftpills: 1
        })
        // console.log(res)
    } catch (error) {
        console.log(error)
    }

}
export const getUserDataDB = (setloading) => async (dispatch) => {

    setloading(true)

    try {
        const uid = await AsyncStorage.getItem('uid')
        //current date 
        const date = moment.now()
        const saveDate = moment(date).format('DD-MM-YYYY')

        // initialize Values
        var HistoryPath = true

        console.log(saveDate)
        // daily medice Path check 
        database().ref(`users/${uid}/History/${saveDate}`).on('value', snapshot => {
            if (snapshot.exists()) {
                const dailyMedicine = Object.values(snapshot.val()).filter(item => {
                    return (item)
                })
                dispatch({
                    type: DAILYMEDICINE,
                    payload: dailyMedicine,
                })
            }
        })



        // fetch all medicine from databse
        await database().ref(`users/${uid}/History/${saveDate}`).once("value", snapshot => {
            return HistoryPath = snapshot.exists()
        })

        database().ref(`users/${uid}/AllMedicine`).on('value', async (snapshot) => {
            if (snapshot.exists()) {
                const AllMedicine = Object.values(snapshot.val()).filter(async (val) => {

                    if (!HistoryPath) {
                        if (val.AllStatus == "countinue") {
                            await database().ref(`users/${uid}/History/${saveDate}/${val.key}`).set({
                                key: val.key,
                                MedName: val.MedName,
                                notificationID: val.notificationID,
                                Date: val.Date,
                                Time: val.Time,
                                Dose: val.Dose,
                                Unit: val.Unit,
                                Leftpills: val.Leftpills,
                                Status: 'pending',
                                displayTime: val.displayTime,
                            })
                        }

                    }
                    return (val)
                })
                dispatch({
                    type: ALLMEDICINE,
                    payload: AllMedicine
                })
            }
        })
        database().ref(`users/${uid}/History`).on('value', snapshot => {

            if (snapshot.exists()) {
                dispatch({
                    type: MEDICINEHISTORY,
                    payload: snapshot.val(),
                })
            }
        })

    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }

}