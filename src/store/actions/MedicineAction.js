import { AddMedicine } from "../states";
import database from '@react-native-firebase/database';
import moment from 'moment'


export const AddMedicineDB=(Name,selectedUnit,actualDose,time,Date)=>async(dispatch)=>{
    console.log(Name,selectedUnit,actualDose,time,Date)

    try {
        const firebaseKey=database().ref('users/123/AllMedicine').push()
        const res =await firebaseKey.set({
            key:firebaseKey.key,
             medName:Name,
             date:Date,
             time:time,
             dose:actualDose,
             unit:selectedUnit,
             leftpills:1
        })
        const date= moment.now()
        const saveDave=moment(date).format('DD-MM-YYYY')
        console.log(saveDave)
        const key = database().ref(`users/123/History/${saveDave}`).push()

      const res2= await key.set({
            key:key.key,
             medName:Name,
             date:Date,
             time:time,
             dose:actualDose,
             unit:selectedUnit,
             leftpills:1,
             status:'pending'
        })
        console.log(res,res2)
    } catch (error) {
        console.log(error)
    }

}
export const AddMeasurement=(Name,selectedUnit,actualDose,time,Date)=>async(dispatch)=>{
    console.log(Name,selectedUnit,actualDose,time,Date)

    try {
        const res =await database().ref('users/123/History').set({
             medName:Name,
             date:Date,
             time:time,
             dose:actualDose,
             unit:selectedUnit,
             leftpills:1
        })
        console.log(res)
    } catch (error) {
        console.log(error)
    }

}
export const getUserDataDB=(setloading)=>async(dispatch)=>{
  
    setloading(true)

    try {
        database().ref('users/123/AllMedicine').on('value', snapshot => {
            
            // let data = []
            //     {
            //         Object.values(snapshot.val()).forEach(val => {
            //             Object.values(val).forEach(val => {
            //                 data.push(val)
            //             })
            //         })
            //     }
                console.log(snapshot.val())
               
              
        });
    } catch (error) {
        console.log(error)
    }finally{
        setloading(false)
    }

}