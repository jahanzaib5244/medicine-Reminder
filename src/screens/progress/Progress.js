import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import COLORS from '../../style/COLORS'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { FlatList, Swipeable } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import moment from 'moment'
import ImagesPath from '../../constants/ImagesPath'


export default function Progress() {
  const Progress = useSelector(state => state.Mainreducer.MedicineHistory)
  // console.log(Progress)
  return (
    <View style={styles.root}>

      <FlatList
        data={Object.values(Progress)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          const splitDate = (Object.keys(Progress)[index]).split('-')
          const jsDate = new Date(splitDate[2], splitDate[1], splitDate[0])
          var displayDate = moment(jsDate).format('dddd');
          return (
            <View>
              <Text style={styles.Textheading}>{displayDate} , {Object.keys(Progress)[index]}</Text>
              {Object.values(item).map((item, index) => {
                  var skiped =false
                if (item.Status !== 'pending') {
                  if (item.Status == "confirm") {
                    skiped=false
                  } else {
                    if (item.Status == "skip") {
                      skiped=true
                    }
                  }


                  return (
                    <View style={styles.ItemContainer} key={index}>
                      <View style={styles.itemtextImage}>
                        <View style={styles.ImageBackground}>
                          <Image style={[styles.itemImage, { tintColor: skiped ? COLORS.white50 : COLORS.themeColor }]} source={ImagesPath.Medicine} />
                        </View>
                        <View style={styles.itemTextContainer}>
                          <Text style={[styles.itemTitle, { color: skiped ? COLORS.white50 : COLORS.white }]}>{!!item.MedName ? item.MedName : 'No Found'}</Text>
                          <Text style={styles.itemdes}>{!!item.Dose ? item.Dose : ''} {!!item.Unit ? item.Unit : 'No found'}</Text>
                        </View>
                      </View>
                      <View style={styles.statusContainer}>
                        <Text style={[styles.displayTime, { color: skiped ? COLORS.white50 : COLORS.success }]}>{!!item.displayTime ? item.displayTime : 'No found'}</Text>
                        <Image style={[styles.CheckedImage, { tintColor: skiped ? COLORS.white50 : COLORS.success }]} source={skiped ? ImagesPath.Close : ImagesPath.Checked} />
                      </View>
                    </View>
                  )
                }
              })
              }
            </View>
          )
        }}
      />
    </View>
  )
}


