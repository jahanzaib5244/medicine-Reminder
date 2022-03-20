import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'
export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:COLORS.blackOpacity30
    },
    Textheading:{
        fontSize:FontSize.des,
        color:COLORS.themeColor,
        paddingTop:moderateVerticalScale(15),
        paddingHorizontal:moderateScale(15)
    },
    ItemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:moderateScale(15)
    },
    statusContainer:{
        flexDirection:'row',

    },
    itemImage:{
        height:moderateScale(30),
        width:moderateScale(30),
        resizeMode:'contain',
        tintColor:COLORS.themeColor,
    },
    ImageBackground:{
        height:moderateScale(35),
        width:moderateScale(35),
        backgroundColor:COLORS.black,
        borderRadius:moderateScale(35/2),
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:moderateVerticalScale(10),
    },
    itemTitle:{
        fontSize:FontSize.heading,
        color:COLORS.white,
        fontWeight:'700'
    },
    itemdes :{
        fontSize:FontSize.des,
        color:COLORS.white50,
    },
    itemTextContainer:{
        paddingHorizontal:moderateScale(10),
      
    },
    itemtextImage:{
        flexDirection: 'row',
        paddingVertical:moderateVerticalScale(10)
    },
    displayTime:{
        paddingHorizontal:moderateScale(10),
        fontSize:FontSize.des,
        color:COLORS.success,
    },
    CheckedImage:{
        height:moderateScale(20),
        width:moderateScale(20),
        resizeMode:'contain',
        tintColor:COLORS.success,
    }
})