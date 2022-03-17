import {StyleSheet} from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'
export const styles = StyleSheet.create({
    root:{
       flex:1,
       backgroundColor:COLORS.blackOpacity30
    },
    AddBtn: {
        backgroundColor: COLORS.themeColor,
        flexDirection: 'row',
        paddingHorizontal: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: moderateVerticalScale(10),
        right: moderateScale(15),
        paddingVertical: moderateVerticalScale(8),
        borderRadius: moderateScale(30)
    },
    addBtnText: {
        paddingLeft: moderateScale(4),
        color: COLORS.black,
        fontSize:FontSize.des

    },
    addBtnImg: {
        tintColor: COLORS.black,
    },
    bottomSheet:{
        backgroundColor:COLORS.black,
        position:'absolute',
        width:'100%',
       
    },
    sheetBtn:{
        alignItems:'center',
        
        flexDirection:"row",
        paddingHorizontal:moderateScale(15),
        paddingVertical:moderateVerticalScale(10)
    },
    bottomPic:{
        height:moderateScale(20),
        tintColor:COLORS.white,
        
        width:moderateScale(20)
    },
    sheetText:{
        fontSize:FontSize.heading,
        color:COLORS.white,
        paddingLeft:moderateScale(15),
    }
})