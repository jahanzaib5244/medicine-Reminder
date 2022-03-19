import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import COLORS from '../style/COLORS'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import FontSize from '../style/FontSize'
import ImagesPath from '../constants/ImagesPath'
import { TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import NavigationStrings from '../constants/NavigationStrings'

export default function MedicineCard({item,index}) {
  
  const [overTime, setoverTime] = useState(false)

  const navigation=useNavigation()
  
     useEffect(() => {
         console.log(item.Time)
       const dateNow=moment.now()
       const time=moment(dateNow).format('HH:mm')
       const HourMinute=time.split(':')
       const DBHourMinute=(item.Time).split(':')
       console.log(DBHourMinute,HourMinute)
       if((parseInt(DBHourMinute[0])) >= (parseInt(HourMinute[0]))){
           console.log('condition true for hours')
        if((parseInt(DBHourMinute[1]))  < (parseInt(HourMinute[1]))){
            setoverTime(true)
        }
       }else{
        setoverTime(true)
       }
     }, [])
     

     
    return (
        <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.updateStatus,{item})} activeOpacity={0.7} style={[styles.card,{borderLeftWidth:overTime ? 8 :0,borderColor:COLORS.danger}]}>
            <Text style={[styles.time,{color:overTime ? COLORS.danger : COLORS.themeColor}]}>{!!item?.displayTime ? item.displayTime : 'No provided'}</Text>
            <View style={styles.rowContainer}>
                <View style={styles.picContainer}>
                  <View style={styles.picbackContainer}>
                    <Image style={[styles.image,{tintColor:overTime ? COLORS.danger : COLORS.themeColor}]} source={ImagesPath.Medicine} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.medHeading,{color:overTime ? COLORS.danger:COLORS.white}]}>{!!item.MedName ?item.MedName:'No provided' }</Text>
                    <Text style={[styles.pillText,{color:overTime ?COLORS.danger:COLORS.white50 }]}>{!!item.Leftpills ?item.Leftpills:'' } {!!item.Unit ? item.Unit : 'No provided'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    card: {
        marginBottom: moderateVerticalScale(5),
        width: '100%',
        backgroundColor: COLORS.blackOpacity80,
      
    },
    picbackContainer:{
        padding:moderateScale(2),
        backgroundColor:COLORS.blackOpacity20,
        borderRadius:moderateScale(40/2),
        height:moderateScale(35),
        width:moderateScale(35),
        alignItems:'center',
        justifyContent:'center',
        bottom:moderateScale(5)
    },
    time: {
        color: COLORS.themeColor,
        marginHorizontal: moderateScale(20),
        paddingTop:moderateVerticalScale(8),
        fontSize: FontSize.des,
        paddingBottom:moderateVerticalScale(4),
    },
    image: {
        resizeMode: 'contain',
        tintColor: COLORS.themeColor,
    
   
    },
    pillText: {
        fontSize: FontSize.des,
        color:COLORS.white50,
    },
    rowContainer: {
        flexDirection: 'row',
        paddingBottom:moderateVerticalScale(8)
    },
    medHeading: {
        fontSize: FontSize.heading,
        color:COLORS.white,

    },
    textContainer: {
        paddingBottom:moderateVerticalScale(9)
    },
    picContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex:0.19,

   
    
    }
})