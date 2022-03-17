import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import COLORS from '../../style/COLORS'
import FontSize from '../../style/FontSize'
export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:COLORS.blackOpacity30
    },
    headerContainer: {
        flexDirection: 'row',

    },
    charts: {
        flex: 1,
        backgroundColor: COLORS.blackOpacity80,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: moderateScale(2),
    },

    navigationTxt: {
        fontSize: FontSize.heading,
        paddingVertical: moderateVerticalScale(13)
    }
})