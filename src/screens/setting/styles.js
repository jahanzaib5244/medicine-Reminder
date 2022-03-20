import {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'

export const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:COLORS.blackOpacity30,
        justifyContent:'space-between'
    },
    logoutBtn:{
        paddingHorizontal:moderateScale(20),
        paddingVertical:moderateVerticalScale(12),
        flexDirection:'row'
    },
    logoutText:{
        color:COLORS.white,
        fontSize:FontSize.heading,
        paddingHorizontal:moderateScale(10)
    },
    LogoutImage:{
        tintColor:COLORS.white,
        height:moderateScale(20),
        width:moderateScale(20),
        resizeMode:'contain'
    }
})