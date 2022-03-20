import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'
export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:COLORS.blackOpacity30,
        position: 'relative',
    },
    addbtn: {
        position:'absolute',
        bottom:10,
        right:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:moderateScale(30),
        paddingHorizontal: moderateScale(20),
        backgroundColor: COLORS.themeColor,
        paddingVertical:moderateVerticalScale(10)
    },
    btnText: {
        color: COLORS.black,
        fontWeight:'400',
        fontSize: FontSize.heading,
      
    },
    loading:{
        color: COLORS.white,
        fontWeight:'600',
        fontSize: FontSize.extralarge,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnImage: {
        tintColor: COLORS.black,
        resizeMode: 'contain',
        paddingRight: moderateScale(30),
        right:moderateScale(4),
        height:moderateScale(20),
        width:moderateScale(20)        
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