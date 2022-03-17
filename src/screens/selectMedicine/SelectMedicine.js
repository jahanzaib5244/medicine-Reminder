import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import AppInput from '../../components/AppInput'
import DropdownUnit from '../../components/DropdownUnit'
import Appbutton from '../../components/Appbutton'
import { moderateVerticalScale } from 'react-native-size-matters'
import NavigationStrings from '../../constants/NavigationStrings'

export default function SelectMedicine({ navigation }) {
  const [Name, setName] = useState('')
  const [selectedUnit, setselectedUnit] = useState('')

  return (
    <View style={styles.root}>
      <AppInput selected={Name} value={(v) => setName(v)} />
      {Name.length > 0 &&
        <View>
          <DropdownUnit selectedItem={setselectedUnit} selectedUnit={selectedUnit} />
          {selectedUnit.length > 0 &&
            <Appbutton onPress={() => navigation.navigate(NavigationStrings.ConfirmMedicine, { Name, selectedUnit })} activeOpacity={0.8} name='NEXT' style={{ marginHorizontal: '5%', marginVertical: moderateVerticalScale(30) }} />
          }
        </View>
      }
    </View>
  )
}