import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'


import TreatmentCard from '../../components/TreatmentCard'
import { styles } from './styles'
import ImagesPath from '../../constants/ImagesPath'
import NavigationStrings from '../../constants/NavigationStrings'



export default function Treatment({ navigation }) {
  const [height, setheight] = useState(0)
  const [translateY, settranslateY] = useState(false)
  const actionSheet = useRef(new Animated.Value(0)).current

  const BottomSheetAnimation = (Value) => {
    Animated.timing(actionSheet, {
      duration: 250,
      toValue: -Value,
      useNativeDriver: true
    }).start()
  }
  actionSheet.addListener(({ value }) => {
    if (value == 0) {
      settranslateY(false)
    } else {
      settranslateY(true)
    }
  })
  useEffect(() => {


    return () => {
      console.log('bye')
      settranslateY(false)
    }
  }, [])

  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setheight(height)
  }
  const navigateTo = (route) => {
    BottomSheetAnimation(0)
    navigation.navigate(route)
  }
  return (
    <View style={styles.root}>
      <TreatmentCard />
      <TreatmentCard />
      <TreatmentCard />
      <TouchableOpacity onPress={() => BottomSheetAnimation(height)} activeOpacity={0.8} style={styles.AddBtn}>
        <Image style={styles.addBtnImg} source={ImagesPath.Add} />
        <Text style={styles.addBtnText}>ADD</Text>
      </TouchableOpacity>
      {translateY ? <TouchableOpacity onPress={() => BottomSheetAnimation(0)} style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', position: 'absolute' }} /> : null}

      <Animated.View onLayout={onLayout} style={[styles.bottomSheet, { transform: [{ translateY: actionSheet }], bottom: -height }]}>
        <TouchableOpacity
          onPress={() => navigateTo(NavigationStrings.SelectMedicine)}
          style={styles.sheetBtn}>
          <Image style={styles.bottomPic} source={ImagesPath.Medicine} />
          <Text style={styles.sheetText}>Add Medication</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateTo(NavigationStrings.SelectMeasurement)}
          style={styles.sheetBtn}>
          <Image style={styles.bottomPic} source={ImagesPath.Medicine} />
          <Text style={styles.sheetText}>Add Measurement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sheetBtn}>
          <Image style={styles.bottomPic} source={ImagesPath.Medicine} />
          <Text style={styles.sheetText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sheetBtn}>
          <Image style={styles.bottomPic} source={ImagesPath.Medicine} />
          <Text style={styles.sheetText}>Symptom check</Text>
        </TouchableOpacity>

      </Animated.View>
    </View>
  )
}