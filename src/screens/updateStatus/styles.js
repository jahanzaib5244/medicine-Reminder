import { StyleSheet } from 'react-native'
import COLORS from '../../style/COLORS'

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: COLORS.blackOpacity30,
    },
    headerContainer: {
        flex: 0.2,
        backgroundColor:'blue'
    },
    detailsContainer: {
        flex: 0.6,
        backgroundColor:'green'
    },
    btnsContainer: {
        flex: 0.2,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    btn:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})