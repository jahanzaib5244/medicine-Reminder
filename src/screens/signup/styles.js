import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'


export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.blackOpacity30,
    },
    btn: {
        marginTop: moderateVerticalScale(40),
        marginHorizontal: moderateScale(20),
    },
    upperContainer: {
        justifyContent: 'space-between',
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateVerticalScale(170),
        width: "100%"

    },
    inputContainer: {
        height: moderateVerticalScale(350),
        justifyContent: 'center',
        marginTop: moderateVerticalScale(30),
    },
    forgetBtn: {
        marginTop: moderateVerticalScale(10),
        alignItems: "flex-end",
        paddingHorizontal: moderateScale(24)
    },
    UserImage:{
        backgroundColor:COLORS.white50,
        height:moderateScale(110),
        width:moderateScale(110),
        borderRadius:moderateScale(110/2),
        alignItems:'center',
        justifyContent:'center'
    },
    AppName: {
        fontSize: FontSize.medium,
        fontWeight: '700',
        letterSpacing: 1,
        color: COLORS.white
    },
    logo: {
        height: moderateScale(100),
        width: moderateScale(100),
    },
    forgetText: {
        fontSize: FontSize.des,
        color: COLORS.themeColor,
        fontWeight: '600',
        paddingVertical: moderateVerticalScale(2),

    },
    singupText: {
        bottom: moderateVerticalScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateVerticalScale(30),

        flexDirection: 'row'
    },
    singup: {
        fontSize: FontSize.des,
        color: COLORS.white,

    },
    singupBtn: {
        paddingVertical: moderateVerticalScale(5),
        paddingRight: moderateScale(10),
        alignItems: 'flex-end',

    },
    singupBtnTxt: {
        color: COLORS.themeColor,

    }
})