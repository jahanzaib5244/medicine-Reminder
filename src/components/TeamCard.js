import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../style/COLORS'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import ImagesPath from '../constants/ImagesPath'
import FontSize from '../style/FontSize'

export default function TeamCard({ Apointment  }) {
    return (
        <TouchableOpacity activeOpacity={0.6} style={styles.card} >
            <View style={styles.detail}>
                <Image style={styles.pic} source={ImagesPath.Doctor} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Dr Rizwan</Text>
                    <Text style={styles.des}>Dr Rizwan</Text>
                </View>
            </View>
            {!!Apointment &&
                <View>
                    <View style={styles.border} />
                    <View style={styles.bottomConatiner}>
                        <View style={styles.yellowBox} />
                        <Text style={styles.upcomingTime}>Appointment tomorrow at 2:45 PM</Text>
                    </View>
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        marginHorizontal: '5%',
        backgroundColor: COLORS.blackOpacity80,

        padding: moderateScale(15),
        borderRadius: moderateScale(10),
        marginTop: moderateVerticalScale(10)
    },
    pic: {
        height: moderateScale(45),
        width: moderateScale(45),
        resizeMode: 'contain'
    },
    textContainer: {
        paddingHorizontal: moderateScale(10),

    },
    title: {
        color: COLORS.white,
        fontSize: FontSize.heading,
        fontWeight: '600',
        marginTop: moderateVerticalScale(2)

    },
    des: {
        color: COLORS.white50,
        fontSize: FontSize.des,
    },
    detail: {
        flexDirection: 'row'
    },
    yellowBox: {
        height: moderateScale(7),
        backgroundColor: COLORS.yellow80,
        width: moderateScale(7),
        borderRadius: moderateScale(7)
    },
    bottomConatiner: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    upcomingTime: {
        paddingLeft: moderateScale(10),
        color: COLORS.white,
        fontSize: FontSize.des,
    },
    border: {
        height: moderateVerticalScale(1),
        backgroundColor: COLORS.white50,
        marginVertical: moderateVerticalScale(12)
    }
})
