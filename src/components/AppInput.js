import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState ,useRef} from 'react'
import COLORS from '../style/COLORS'
import FontSize from '../style/FontSize'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ImagesPath from '../constants/ImagesPath'


export default function AppInput({ value,selected,placeholderText='',inputStyle={}, ...props }) {
    const [BorderColor, setBorderColor] = useState(COLORS.white50)
  const input = useRef()
  
  
  const clearInput=()=>{
      if(input.current){
          input.current.clear()
          value('')
      }
  }
  console.log(!!placeholderText)
    return (
        <View style={[styles.container,inputStyle ,{ borderColor: BorderColor }]}>
            <TextInput
                {...props}
                
                onChangeText={(v) => value(v)}
                ref={input}
                placeholder={!!placeholderText ? placeholderText : 'Medication name'}
                placeholderTextColor={COLORS.white50}
                style={[styles.input, { borderColor: BorderColor }]}
                onFocus={() => setBorderColor(COLORS.themeColor)}
                onBlur={() => setBorderColor(COLORS.white50)}
            />
            {!!selected?.length > 0 &&
                <TouchableOpacity onPress={clearInput} style={{ paddingLeft:moderateScale(10),paddingRight:moderateScale(10) }}>
                    <Image style={styles.closePic} source={ImagesPath.Close} />
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
    }
})