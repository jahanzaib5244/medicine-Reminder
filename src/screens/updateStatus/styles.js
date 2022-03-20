import { StyleSheet } from 'react-native'
import COLORS from '../../style/COLORS'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import FontSize from '../../style/FontSize'


export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.blackOpacity30,
    },
    headerContainer: {
        flex: 0.2,
        justifyContent:'space-between',
   backgroundColor:COLORS.blackOpacity80
    },
    detailsContainer: {
        flex: 0.6,
     
    },
    btnsContainer: {
        flex: 0.2,
        flexDirection:'row',
    },
    btn:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    doseContainer:{
        paddingHorizontal:moderateScale(30),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:moderateVerticalScale(30),
        borderBottomWidth:0.4,
        borderColor:COLORS.white50

    },
    backBtnImage:{
        height:moderateScale(30),
        width:moderateScale(30),
        tintColor:COLORS.white50,
    },
    backBtn:{
        marginTop:moderateVerticalScale(8),
        paddingHorizontal:moderateScale(10),
        paddingVertical:moderateVerticalScale(10),

    },
    btnImage:{
        height:moderateScale(30),
        width:moderateScale(30),
        tintColor:COLORS.black
    },
    btnText:{
        fontSize:FontSize.heading,
        color:COLORS.black,
        paddingTop:moderateVerticalScale(3)
    },
    doseText:{
        fontSize:FontSize.heading,
        color:COLORS.themeColor,
    },
    des:{
  fontSize:FontSize.heading,
  color:COLORS.white50,

    },
    title:{
    fontSize:FontSize.large,
    paddingBottom:moderateVerticalScale(5),
    color:COLORS.white
    },
    headerTextcontainer:{
        marginBottom:moderateVerticalScale(10),
        marginLeft:moderateScale(50)
    }
})