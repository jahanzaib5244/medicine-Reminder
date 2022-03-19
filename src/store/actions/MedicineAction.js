import { ALLMEDICINE, DAILYMEDICINE, MEDICINEHISTORY, USERDATA } from "../states";
import database from '@react-native-firebase/database';
import moment from 'moment'
import COLORS from "../../style/COLORS";
import { seduleNotification } from "../../helperfunction/NotificationHandler";


export const AddMedicineDB = (Name, selectedUnit, actualDose, time, Date, displayTime) => async (dispatch) => {
    // console.log(Name,selectedUnit,actualDose,time,Date)

    try {


        const AllMedicine = database().ref('users/123/AllMedicine').push()
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
        const HistoryPath = database().ref(`users/123/History/${saveDate}/${AllMedicine.key}`)

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
        console.log(res, res2)
    } catch (error) {
        console.log(error)
    }

}
export const AddMeasurement = (Name, selectedUnit, actualDose, time, Date) => async (dispatch) => {
    console.log(Name, selectedUnit, actualDose, time, Date)

    try {
        const res = await database().ref('users/123/History').push().set({
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

        //current date 
        const date = moment.now()
        const saveDate = moment(date).format('DD-MM-YYYY')

        // initialize Values
        var HistoryPath = true
        var AllMedicine = []
        var DailyMedicine = []


        // daily medice Path check 
    
        // fetch all medicine from databse
        
        
              database().ref('users/123/AllMedicine').on('value',async (snapshot)=> {
            if (snapshot.exists()) {
                await database().ref(`users/123/History/${saveDate}`).once("value", snapshot => {
                    return HistoryPath = snapshot.exists()
                })
        
                Object.values(snapshot.val()).forEach(async (val) => {
                    AllMedicine.push(val)
                    if (!HistoryPath) {
                        if (val.AllStatus == "countinue") {
                            await database().ref(`users/123/History/${saveDate}/${val.key}`).set({
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
                    console.log(AllMedicine,'ALL medicine')
                    dispatch({
                        type:ALLMEDICINE,
                        payload:AllMedicine
                    })
                })
            }
        }) 
        database().ref('users/123/History').on('value', snapshot => {
            
            if (snapshot.exists()) {                 
                dispatch({
                    type: MEDICINEHISTORY,
                    payload: snapshot.val(),
                })
                {
                    Object.keys(snapshot.val()).forEach(async (val) => {

                        if (val == saveDate) {
                            Object.values(snapshot.val()).forEach(async (vales) => {
                                Object.values(vales).forEach(item => {
                                    DailyMedicine.push(item)
                                })
                                dispatch({
                                    type: DAILYMEDICINE,
                                    payload: DailyMedicine,
                                })
                            })
                        }

                    })
                }
            }

        })
      

    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }

}