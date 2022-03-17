import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters'
import { TextInput } from 'react-native-gesture-handler'
import COLORS from '../style/COLORS'
import FontSize from '../style/FontSize'
import ImagesPath from '../constants/ImagesPath'
import unitsObject from '../constants/unitsObject'


export default function DropdownUnit({selectedItem,selectedUnit}) {
    const [BorderColor, setBorderColor] = useState(COLORS.white50)
    const [show, setshow] = useState(false)
    const [selectedIndex, setselectedIndex] = useState(null)
    const input = useRef()
    const selectItem=(index,item)=>{
        setselectedIndex(index)
        if(input.current){
            input.current.setNativeProps({
                text:item.name
            })
        }
        selectedItem(item.value)

    }
    return (
        <View>

            <TouchableOpacity
            onFocus={() => setBorderColor(COLORS.themeColor)}
            onBlur={() => setBorderColor(COLORS.white50)}
            onPress={() => setshow(!show)} style={[styles.dropdown, { borderColor: BorderColor }]}>
                <Text>Unit</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        ref={input}
                        editable={false} 
                        placeholder='Medication name'
                        placeholderTextColor={COLORS.white50}
                        style={[styles.input, { borderColor: BorderColor }]}
                        onFocus={() => setBorderColor(COLORS.themeColor)}
                        onBlur={() => setBorderColor(COLORS.white50)}
                    />
                    <Image style={[styles.downArrowpic,{tintColor:selectedUnit.length>0 ? COLORS.white:COLORS.white50}]} source={ImagesPath.DropdownArrow} />
                </View>
            </TouchableOpacity>
            <Modal
                style={styles.modalstyle}
                animationType='none'
                transparent={true}
                visible={show}
                onRequestClose={() => {

                    setshow(!show);
                }}
            >
                <View style={styles.modelContainer}>
                    <View style={styles.dropdownContainer}>
                        <View style={styles.headingComponent}>
                            <Text style={styles.heading}>Unit</Text>
                        </View>
                        <FlatList
                            data={unitsObject}

                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => selectItem(index,item)} style={styles.itemContainer}>
                                        <Image style={[styles.itemImage, { tintColor: selectedIndex == index ? COLORS.themeColor : COLORS.white50, }]} source={selectedIndex == index ? ImagesPath.ActiveRadio : ImagesPath.InactiveRadio} />
                                        <Text style={styles.optionText}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            }}

                        />
                        <View style={styles.footer}>
                            <TouchableOpacity style={styles.fotterBtn} onPress={() => setshow(false)}>
                                <Text style={styles.footerBtnTxt}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setshow(false)} style={styles.fotterBtn}>
                                <Text style={styles.footerBtnTxt}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>

    )
}
const styles = StyleSheet.create({
    dropdown: {
        marginTop: moderateVerticalScale(30),
        marginHorizontal: '5%',
        borderBottomWidth: 2,
        paddingLeft: moderateScale(5)

    },
    input: {
        padding: 0,
        fontSize: FontSize.heading,
        fontWeight: '700',
        flex: 1,
        color:COLORS.white,
    },
    modalstyle: {
        flex: 1,
    },
    modelContainer: {
        backgroundColor: COLORS.blackOpacity30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdownContainer: {
        height: '90%',
        width: '80%',
        marginHorizontal: '10%',
        backgroundColor: COLORS.blackOpacity80

    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',


    },
    itemImage: {
        height: moderateScale(20),
        width: moderateScale(20),
        resizeMode: 'contain',
        marginHorizontal: moderateScale(20),
        tintColor: COLORS.white50,
    },
    optionText: {
        fontSize: FontSize.heading,
        color: COLORS.white,
        paddingVertical: moderateVerticalScale(15),
    },
    heading: {
        fontSize: FontSize.medium,
        color: COLORS.white,
        fontWeight: '700',

    },
    headingComponent: {
        paddingHorizontal: moderateScale(23),
        paddingVertical: moderateVerticalScale(10),
        borderBottomWidth: 0.7,
        borderColor: COLORS.white50,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderTopWidth: 0.7,
        borderColor: COLORS.white50,
        paddingHorizontal: moderateScale(20),

    },
    fotterBtn: {
        padding: moderateScale(15),

    },
    footerBtnTxt: {
        fontSize: FontSize.des,
        color: COLORS.themeColor,
        fontWeight: '500',
        paddingHorizontal: moderateScale(0)

    },
    downArrowpic: {
        height: moderateScale(30),
        width: moderateScale(30),
        resizeMode: 'contain',

    }
})