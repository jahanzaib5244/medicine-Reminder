import {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'

export const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:COLORS.blackOpacity30,
    },
    upperContainer:{
        paddingHorizontal:moderateScale(30),

    },
    heading:{
        color:COLORS.themeColor,
        fontSize:FontSize.des,
        paddingVertical:moderateVerticalScale(10)
    },
    Itembtn:{
   
    justifyContent:'center',
    width:'100%'
    },
    ItemText:{
        color:COLORS.white,
        paddingVertical:moderateVerticalScale(10),
        fontSize:FontSize.heading,

    }
})