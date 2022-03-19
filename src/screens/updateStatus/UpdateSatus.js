import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

export default function UpdateSatus() {
    return (
        <View style={styles.root}>
            <View style={styles.headerContainer}>
                <Image />
            </View>
            <View style={styles.detailsContainer}>
                <View></View>
                <View></View>
            </View>
            <View style={styles.btnsContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Image  />
                    <Text>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Image  />
                    <Text>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}