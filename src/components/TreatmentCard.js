import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'

// own components imports
import COLORS from '../style/COLORS'
import FontSize from '../style/FontSize'
import ImagesPath from '../constants/ImagesPath'

export default function TreatmentCard({ item, index }) {
    return (
        <View style={styles.card}>
            <View style={styles.headingContainer}>
                <Image source={ImagesPath.bell} style={styles.headingImage} />
                <Text style={styles.headingText}>{!!item?.MedName ? item?.MedName : 'No name'}</Text>
            </View>
            <Text style={styles.descriptionText}>Daily-{!!item?.displayTime ? item.displayTime : 'No time'}</Text>
            <View style={styles.bottomContainer}>
                <View style={styles.piilsContainer} >
                    <Text style={styles.PillsText} >{!!item?.Leftpills ? item.Leftpills : 'NO provided'} {!!item.Unit ? `${item.Unit} left` : ''}</Text>
                </View>
                <View style={styles.bellContainer}>
                    <Image source={ImagesPath.bell} style={styles.BellImage} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        marginHorizontal: '5%',
        paddingVertical: moderateVerticalScale(6),
        paddingHorizontal: moderateScale(10),
        backgroundColor: COLORS.blackOpacity80,
        borderRadius: moderateScale(10),
        marginTop: moderateVerticalScale(10)


    },
    headingContainer: {
        flexDirection: 'row',
        marginTop: moderateVerticalScale(8),


    },
    headingImage: {
        tintColor: COLORS.white,
        height: moderateVerticalScale(18),
        resizeMode: 'contain',
        width: moderateScale(30)
    },
    headingText: {
        color: COLORS.white,
        fontSize: FontSize.heading,
        fontWeight: '600'
    },
    descriptionText: {
        color: COLORS.white50,
        marginTop: moderateVerticalScale(7),
        fontSize: FontSize.des,
        marginHorizontal: moderateScale(5)
    },
    piilsContainer: {
        backgroundColor: COLORS.yellow80,
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateVerticalScale(4),
        borderRadius: moderateScale(30)
    },
    PillsText: {
        color: COLORS.black,
        fontSize: FontSize.des

    },
    bellContainer: {
        backgroundColor: COLORS.themeColor,
        padding: moderateScale(2),
        borderRadius: moderateScale(50),
        marginRight: moderateScale(5)
    },
    BellImage: {
        resizeMode: 'contain',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: moderateVerticalScale(10)
    }
})