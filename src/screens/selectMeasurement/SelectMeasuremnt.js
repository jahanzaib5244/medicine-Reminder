import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import NavigationStrings from '../../constants/NavigationStrings'



export default function SelectMeasuremnt({navigation}) {
  return (
    <View style={styles.root}>
        <View style={styles.upperContainer}>
        <Text style={styles.heading}>Popular measurements</Text>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.AddMeasurement,{name:'Blood pressure',value:'bp'})} style={styles.Itembtn}>
            <Text style={styles.ItemText}>Blood pressure</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.AddMeasurement,{name:'Resting heart rate',value:'bpm'})} style={styles.Itembtn}>
            <Text style={styles.ItemText}>Resting heart rate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.AddMeasurement,{name:'Weight',value:'Kg'})} style={styles.Itembtn}>
            <Text style={styles.ItemText}>Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.AddMeasurement,{name:'Blood sugar (before the meal)',value:'mg/dL'})} style={styles.Itembtn}>
            <Text style={styles.ItemText}>Blood sugar (before the meal)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.AddMeasurement,{name:'Blood sugar (after the meal)',value:'mg/dL'})} style={styles.Itembtn}>
            <Text style={styles.ItemText}>Blood sugar (after the meal)</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}