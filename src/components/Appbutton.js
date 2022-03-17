import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../style/COLORS'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import FontSize from '../style/FontSize'

export default function Appbutton({ name, onPress, style,...props }) {
    return (
        <TouchableOpacity {...props} onPress={onPress} style={[style, styles.btn]}>
            {!!name && <Text style={styles.text}>{name}</Text>}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: COLORS.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
        height:moderateVerticalScale(45),
        borderRadius:moderateScale(10),
        
        
    },
    text:{
        fontSize:FontSize.heading,
        fontWeight:'700',
        color:COLORS.white,

    }
})