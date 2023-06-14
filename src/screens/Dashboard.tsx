import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Constants from '../constants'
import CardViewComponent from './components/CardView'

const Dashboard = () => {
    return (
        
        <View style={styles.mainView}>
            <CardViewComponent
            />
        
</View>


    )
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#FFFFFF', padding: 20,
    },

    cardView: {
        height: '25%',
        width: '75%',
        borderRadius: 10,
        backgroundColor: '#2947AA',
        shadowColor: 'grey',
        alignSelf: 'center'
    },

    logoView: {
        flexDirection: 'row',
    },

    visaLogoView: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: '8%',
    },

    cardChipIcon: {
        margin: 25,
        height: 40,
        width: 60,
        borderRadius: 8,
    },

    cardLogoIcon: {
        margin: 25,
        marginLeft: 60,
        height: 30,
        width: 90,
        borderRadius: 7,
    },
    cardVisaIcon: {
        // margin: 25,
        marginLeft: 70,
        height: 20,
        width: 70,
        borderRadius: 7,
    },

    cardNumberDetails: {
        marginLeft: 20,
        color: '#FFFFFF',
        fontSize: 20,
    },
    cardDateDetails: {
        marginLeft: 20,
        color: '#FFFFFF',
        fontSize: 16,
    }
})

export default Dashboard;