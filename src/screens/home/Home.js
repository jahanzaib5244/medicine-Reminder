import { View, Text, TouchableOpacity, Image, Animated, FlatList } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'


import MedicineCard from '../../components/MedicineCard'
import { styles } from './styles'
import ImagesPath from '../../constants/ImagesPath'
import NavigationStrings from '../../constants/NavigationStrings'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataDB } from '../../store/actions/MedicineAction'


export default function Home({ navigation }) {
const DailyMedicine=useSelector(state=>state.Mainreducer.DailyMedicine)

  const [height, setheight] = useState(0)
  const [translateY, settranslateY] = useState(false)
  const [loading, setloading] = useState(true)
  const actionSheet = useRef(new Animated.Value(0)).current

  const dispatch = useDispatch()

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

    dispatch(getUserDataDB(setloading))

    return () => {
      console.log('bye')
      settranslateY(false)
    }
  }, [])


  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setheight(height)
  }
  return (
    <View style={styles.root}>


      {loading ?

        <View styles={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading</Text>
        </View>
        :
        <>
          <FlatList
            data={DailyMedicine}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item,index})=>{
              if(item.Status == "pending"){
              return(
                <MedicineCard item={item} index={index} />
              )
              }
            }}
          />
          <TouchableOpacity onPress={() => BottomSheetAnimation(height)} activeOpacity={0.6} style={styles.addbtn}>
            <View style={styles.row}>
              <Image style={styles.btnImage} source={ImagesPath.Pencil} />
              <Text style={styles.btnText}>ONE-TIME ENTRY</Text>
            </View>
          </TouchableOpacity>
          {translateY ? <TouchableOpacity onPress={() => BottomSheetAnimation(0)} style={{ backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', position: 'absolute' }} /> : null}

          <Animated.View onLayout={onLayout} style={[styles.bottomSheet, { transform: [{ translateY: actionSheet }], bottom: -height }]}>
            <TouchableOpacity
              onPress={() => {
                BottomSheetAnimation(0)
                navigation.navigate(NavigationStrings.SelectMedicine)
              }
              }
              style={styles.sheetBtn}>
              <Image style={styles.bottomPic} source={ImagesPath.Medicine} />
              <Text style={styles.sheetText}>Add Medication</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sheetBtn}
              onPress={() => {
                BottomSheetAnimation(0)
                navigation.navigate(NavigationStrings.SelectMeasurement)
              }
              }
            >
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
        </>
      }
    </View>
  )
}