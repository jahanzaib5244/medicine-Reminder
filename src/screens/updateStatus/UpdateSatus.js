import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

import ImagesPath from '../../constants/ImagesPath'
import COLORS from '../../style/COLORS'
import { useDispatch } from 'react-redux'
import { DBupdateStatus } from '../../store/actions/MedicineAction'

export default function UpdateSatus({navigation,route}) {
    
const {item}=route.params
console.log(item)
const dispatch=useDispatch()
const confirmPress=(status)=>{
    dispatch(DBupdateStatus(item,status))
}
    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backBtn} onPress={()=>navigation.goBack()}>
                <Image style={styles.backBtnImage} source={ImagesPath.icBakc}/>
                </TouchableOpacity>
                <View style={styles.headerTextcontainer}>
                <Text style={styles.title}>{!!item.MedName?item.MedName:'No provided'}</Text>
                <Text style={styles.des}>{!!item.Leftpills ?item.Leftpills:'' } {!!item.Unit?item.Unit:'No provided'}</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.doseContainer}>
                    <Text style={[styles.doseText,{color:COLORS.white50}]}>Dose</Text>
                    <Text style={styles.doseText}>{!!item.Dose?item.Dose:''}{!!item.Unit?item.Unit:'No provided'}</Text>
                </View>
                <View style={styles.doseContainer}>
                <Text style={[styles.doseText,{color:COLORS.white50}]}>Time</Text>
                    <Text style={styles.doseText}>{!!item.displayTime? item.displayTime : "No provided" }</Text>
                </View>
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity  activeOpacity={0.8} onPress={()=>confirmPress('skip')} style={[styles.btn,{backgroundColor:COLORS.blackOpacity80}]}>
                    <Image style={[styles.btnImage,{tintColor:COLORS.white50}]}  source={ImagesPath.Close}  />
                    <Text style={[styles.btnText,{color:COLORS.white50}]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.8} onPress={()=>confirmPress('confirm')} style={[styles.btn,{backgroundColor:COLORS.success}]}>
                    <Image style={[styles.btnImage]} source={ImagesPath.Checked} />
                    <Text style={[styles.btnText]}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}