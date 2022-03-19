import { View, Text, TouchableOpacity, Image, Modal, Animated } from 'react-native'
import React, { useState, useRef ,useEffect} from 'react'
import { styles } from './styles'
import ImagesPath from '../../constants/ImagesPath'
import DatePickerModal from "react-native-modal-datetime-picker";
import TimePickerModal from "react-native-modal-datetime-picker";
import NavigationStrings from '../../constants/NavigationStrings'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { AddMedicineDB } from '../../store/actions/MedicineAction';

export default function ConfirmMedicine({ navigation, route }) {
  const { Name, selectedUnit } = route.params
  const addBtnAnimation = useRef(new Animated.Value(0)).current
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [counter, setcounter] = useState(false)
  const [time, settime] = useState()
  const [displayDate, setdisplayDate] = useState('Today')
  const [displayTime, setdisplayTime] = useState()
  const [showTime, setshowTime] = useState(false)
  const [counterpills, setcounterpills] = useState(1)
  const [actualDose, setactualDose] = useState(1)
  const [Date, setDate] = useState()
  // console.log(Name, selectedUnit)

const dispatch=useDispatch()

useEffect(() => {
 const date= moment.now()
 setDate(moment(date).format('DD-MM-YYYY')) 
 setdisplayDate(moment(date).format('DD-MMM-YYYY')) 
 settime(moment(date).format('HH:mm'))
 setdisplayTime(moment(date).format('hh:mm A')) 
}, [])



  const handleTimeConfirm = (date) => {
    setDatePickerVisibility(false);
    settime(moment(date).format('HH:mm'))
    setdisplayTime(moment(date).format('hh:mm A'))
    
  }
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setshowTime(false);
  };

  const handleDateConfirm = (date) => {
    setshowTime(false);
    setDate(moment(date).format('DD-MM-YYYY')) 
    setdisplayDate(moment(date).format('DD-MMM-YYYY')) 
    
  };

  const decriment = () => {
    if (counterpills <= 1) {
      setcounterpills(1)
    } else {
      setcounterpills(counterpills - 1)
    }
  }
  const animationStart = () => {
    Animated.timing(addBtnAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false
    }).start(() => {
      dispatch(AddMedicineDB(Name,selectedUnit,actualDose,time,Date,displayTime))
      navigation.navigate(NavigationStrings.Home)
    })
  }


  const boxinterpolate = addBtnAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['20%', '100%']
  })

  return (

    <View style={styles.root}>
      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View style={{ flex: 0.8 }}>
          <View style={styles.doseContainer}>
            <Text style={styles.DoseText}>Dose</Text>
            <View>
              <TouchableOpacity onPress={() => setcounter(true)} style={styles.DropdoenBtn}>
                <Text style={styles.dropDownBtnTxt}>{actualDose}{selectedUnit}(s)</Text>
                <Image style={styles.dropDownPic} source={ImagesPath.DropdownArrow} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.doseContainer, { borderBottomWidth: 0 }]}>
            <Text style={styles.DoseText}>Date</Text>
            <View>
              <TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.DropdoenBtn}>
                <Text style={styles.dropDownBtnTxt}>{displayDate}</Text>
                <Image style={styles.dropDownPic} source={ImagesPath.DropdownArrow} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.doseContainer, { borderBottomWidth: 0 }]}>
            <Text style={styles.DoseText}>Time</Text>
            <View>
              <TouchableOpacity onPress={() => setshowTime(true)} style={styles.DropdoenBtn}>
                <Text style={styles.dropDownBtnTxt}>{displayTime}</Text>
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


      <Modal
        transparent={true}
        visible={counter}
        onRequestClose={() => setcounter(false)}
      >
        <View style={styles.doseModal}>
          <View style={styles.doseCounterContainer}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.Dosetitle}>Dose</Text>
              <View style={styles.counterBtnCounter}>
                <TouchableOpacity onPress={() => decriment()} style={styles.increment}>
                  <Image source={ImagesPath.Add} />
                </TouchableOpacity>
                <View style={styles.doseNumber}>
                  <Text style={styles.doseNumberText}>{counterpills}</Text>
                </View>
                <TouchableOpacity onPress={() => setcounterpills(counterpills + 1)} style={styles.increment}>
                  <Image source={ImagesPath.Add} />
                </TouchableOpacity>
              </View>
              <Text style={styles.unit}>pills(s)</Text>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => setcounter(false)} style={styles.cancelBtn}>
                <Text style={styles.cancelText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setactualDose(counterpills)
                setcounter(false)
              }} style={styles.cancelBtn}>
                <Text style={styles.cancelText}>OK</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </Modal>
      <DatePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}

      />
      <TimePickerModal
        isVisible={showTime}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}

      />
    </View>

  )
}