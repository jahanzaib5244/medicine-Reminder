import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'


export const styles = StyleSheet.create({
    root: {
        flex: 1,
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
        
    }
})