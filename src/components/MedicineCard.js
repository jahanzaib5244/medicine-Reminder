import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import COLORS from '../style/COLORS'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import FontSize from '../style/FontSize'
import ImagesPath from '../constants/ImagesPath'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function MedicineCard() {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <Text style={styles.time}>4:10 pm</Text>
            <View style={styles.rowContainer}>
                <View style={styles.picContainer}>
                  <View style={styles.picbackContainer}>
                    <Image style={styles.image} source={ImagesPath.Medicine} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.medHeading}>Blood</Text>
                    <Text style={styles.pillText}>1pills(s)</Text>
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
        fontSize: FontSize.des
    },
    rowContainer: {
        flexDirection: 'row',
        paddingBottom:moderateVerticalScale(8)
    },
    medHeading: {
        fontSize: FontSize.heading

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