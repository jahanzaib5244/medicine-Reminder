import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'


import { styles } from './styles'
import ImagesPath from '../../constants/ImagesPath'
import TreatmentCard from '../../components/TreatmentCard'
import TeamCard from '../../components/TeamCard'

export default function Team() {
  return (
    <View style={styles.root}>
      <TeamCard Apointment={true} />
      <TeamCard Apointment={true} />
      <TeamCard Apointment={false} />
      <TeamCard Apointment={false} />
      <TeamCard Apointment={true} />
      
    <TouchableOpacity activeOpacity={0.8} style={styles.AddBtn}>
      <Image style={styles.addBtnImg} source={ImagesPath.Add} />
      <Text style={styles.addBtnText}>ADD</Text>
    </TouchableOpacity>
    </View>
  )
}