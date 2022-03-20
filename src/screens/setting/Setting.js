import { View, Text,Image } from 'react-native'
import React from 'react'

import { styles } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImagesPath from '../../constants/ImagesPath'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../store/actions/AuthAction'

export default function Setting() {

 const dispatch=useDispatch()

const ctaLogout=()=>{
dispatch(doLogout())
}

  return (
    <View style={styles.root} >
      <Text>Setting</Text>
      <TouchableOpacity onPress={ctaLogout} activeOpacity={0.6} style={styles.logoutBtn}>
          <Image style={styles.LogoutImage} source={ImagesPath.setting} />
          <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}