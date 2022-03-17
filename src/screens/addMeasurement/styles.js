import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.blackOpacity30,
        justifyContent: 'space-between',
        
    },
    upperContainer: {
        flex: 0.3,
        borderBottomWidth:0.5,
        borderColor:COLORS.white50,
        alignItems:'center',
        justifyContent:'center'
    },
    centerContainer: {
        flex: 0.5, 
    },
    buttonContainer: {
        flex: 0.2,
        backgroundColor:'blue',
    },
    input:{
        width:'40%',
        alignItems:'center',
        justifyContent:'center'
    },
    unitText:{
        fontSize:FontSize.heading,
        color:COLORS.white50,
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
    doseContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
        flexDirection: 'row',
        borderBottomWidth: 0.4,
        paddingVertical: moderateVerticalScale(20),
        borderColor: COLORS.white50,

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
})