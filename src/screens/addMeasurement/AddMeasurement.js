import { View, Text,TouchableOpacity ,Image,Animated} from 'react-native'
import React, { useState,useRef } from 'react'
import { styles } from './styles'
import AppInput from '../../components/AppInput'
import ImagesPath from '../../constants/ImagesPath'
import NavigationStrings from '../../constants/NavigationStrings'




export default function AddMeasurement({navigation, route }) {
  const [value, setvalue] = useState('')


  const name = route?.params?.name
  const unit = route?.params?.value
  const addBtnAnimation = useRef(new Animated.Value(0)).current
  const animationStart = () => {
    Animated.timing(addBtnAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false
    }).start(() => navigation.navigate(NavigationStrings.Home))
  }


  const boxinterpolate = addBtnAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '100%']
  })
 

  return (
    <View style={styles.root}>
      <View style={styles.upperContainer}>
        <AppInput placeholderText={`Add ${unit}`} keyboardType='numeric' value={(v) => setvalue(v)} selected={value} inputStyle={styles.input} />
        <Text style={styles.unitText}>{unit}</Text>
      </View>
      <View style={styles.centerContainer}>
      <View style={[styles.doseContainer, { borderBottomWidth: 0 }]}>
            <Text style={styles.DoseText}>Date</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={styles.DropdoenBtn}>
                <Text style={styles.dropDownBtnTxt}>Today</Text>
                <Image style={styles.dropDownPic} source={ImagesPath.DropdownArrow} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.doseContainer, { borderBottomWidth: 0 }]}>
            <Text style={styles.DoseText}>Date</Text>
            <View>
              <TouchableOpacity onPress={() => {}} style={styles.DropdoenBtn}>
                <Text style={styles.dropDownBtnTxt}>Today</Text>
                <Image style={styles.dropDownPic} source={ImagesPath.DropdownArrow} />
              </TouchableOpacity>
            </View>
          </View>
      </View>
      <Animated.View style={[styles.AddButton, { height: boxinterpolate }]}>
          <TouchableOpacity onPress={() => animationStart()} activeOpacity={0.9} style={styles.AddButton2}>
            <Image style={styles.btnPic} source={ImagesPath.Checked} />
            <Text style={styles.btntext}>Add now</Text>
          </TouchableOpacity>
        </Animated.View>
    </View>
  )
}