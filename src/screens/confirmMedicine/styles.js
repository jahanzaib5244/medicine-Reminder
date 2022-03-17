import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'


export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.blackOpacity30,

    },
    AddButton: {
        backgroundColor: COLORS.success,

        alignItems: 'center',
        justifyContent: 'center',
    },
    AddButton2: {
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%',
        width:'100%',
        
    },
    btnPic: {
        height: moderateScale(40),
        width: moderateScale(40),
        tintColor: COLORS.blackOpacity80,
        resizeMode: 'contain'
    },
    btntext: {
        fontSize: FontSize.medium,
        fontWeight: '700',
        color: COLORS.blackOpacity80,
        paddingTop: moderateVerticalScale(5)
    },
    doseContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        flexDirection: 'row',
        borderBottomWidth: 0.4,
        paddingVertical: moderateVerticalScale(20),
        borderColor: COLORS.white50,

    },
    DoseText: {
        fontSize: FontSize.heading,
        color: COLORS.white,

    },
    dropDownBtnTxt: {
        color: COLORS.themeColor,
        fontSize: FontSize.heading
    },
    DropdoenBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: moderateVerticalScale(10),
        paddingLeft: moderateScale(10)
    },
    dropDownPic: {
        tintColor: COLORS.themeColor,

    },
    doseModal: {
        flex: 1,
        backgroundColor: COLORS.blackOpacity20,
        alignItems: 'center',
        justifyContent: 'center',

    },
    doseCounterContainer: {
        height: '25%',
        width: '80%',
        backgroundColor: COLORS.blackOpacity80,

        justifyContent: 'space-between'
    },
    Dosetitle: {
        fontSize: FontSize.heading,
        color: COLORS.white,
        alignSelf: 'center',
        paddingTop: moderateVerticalScale(15),
    },
    counterBtnCounter: {
        flexDirection: 'row',
        marginTop: moderateVerticalScale(25)

    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',



    },
    increment: {
        backgroundColor: COLORS.themeColor,
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(40 / 2),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: moderateScale(10)

    },
    doseNumber: {
        borderBottomWidth: 0.6,
        borderColor: COLORS.white50,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    doseNumberText: {
        fontSize: scale(29),
        color: COLORS.white
    },
    unit: {
        fontSize: FontSize.heading,
        color: COLORS.white50,
        paddingTop: moderateVerticalScale(10),
    },
    cancelBtn: {
        paddingVertical: moderateVerticalScale(15),
        paddingHorizontal: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelText: {
        color: COLORS.themeColor,
        fontSize: FontSize.des
    }

})