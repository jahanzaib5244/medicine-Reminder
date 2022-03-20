import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState ,useRef} from 'react'
import COLORS from '../style/COLORS'
import FontSize from '../style/FontSize'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ImagesPath from '../constants/ImagesPath'
import { Colors } from 'react-native/Libraries/NewAppScreen'


export default function AuthInput({ onchange,blur,error, placeholderText='',inputStyle={},secure, ...props }) {
    const [BorderColor, setBorderColor] = useState(COLORS.white50)
    const [show, setshow] = useState(!!secure ? true :false)
  
    return (
        <View style={[styles.container,inputStyle ,{ borderColor:error ? COLORS.danger: BorderColor }]}>
            <TextInput
                {...props}
                secureTextEntry={show}
                onChangeText={(e) => onchange(e)}
                placeholder={!!placeholderText ? placeholderText : 'Medication name'}
                placeholderTextColor={error ? COLORS.danger:COLORS.white50}
                style={[styles.input, { borderColor: BorderColor }]}
                onFocus={() => setBorderColor(COLORS.themeColor)}
                onBlur={(e) => blur(e)}
            />
             {!!secure  &&
                <TouchableOpacity onPress={()=>setshow(!show)} style={{ paddingLeft:moderateScale(10),paddingRight:moderateScale(10) }}>
                    <Image style={[styles.closePic,{tintColor:error ? COLORS.danger:COLORS.white50}]} source={show?ImagesPath.hideEye:ImagesPath.showEye} />
                </TouchableOpacity>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
        borderBottomWidth: moderateScale(2),
        marginTop: moderateVerticalScale(20),
    },
    input: {

        paddingHorizontal: 0,
        paddingVertical: 0,
        fontSize: FontSize.heading,
        fontWeight: '700',
        color: COLORS.white,

        paddingBottom: moderateVerticalScale(3),
        paddingHorizontal: moderateScale(5),
        flex: 1,
    },
    closePic: {
        tintColor: COLORS.white50,
        height:moderateScale(18),
        width:moderateScale(18),
        resizeMode:'contain'
    }
})