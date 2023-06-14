import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Constants from '../../constants'


const CardViewComponent = (props:any) => {

    const {
        cardNumber
    } = props ||{}

    return(
    <View style={styles.cardView}>
                <View style={styles.logoView}>
                    <Image source={require('../../image/chip.png')} style={styles.cardChipIcon} />
                    <Image source={require('../../image/cardIcon.png')} style={styles.cardLogoIcon} />
                </View>
                <View>
                    <Text style={styles.cardNumberDetails}>{}</Text>
                    <Text style={styles.cardDateDetails}>{Constants.card_date}</Text>
                </View>
                <View style={styles.visaLogoView}>
                    <Image source={require('../../image/visa.jpg')} style={styles.cardVisaIcon} />
                </View>
                </View>
                )
}

const styles = StyleSheet.create({
    
    cardView: {
        height: '25%',
        width: '75%',
        borderRadius: 10,
        backgroundColor: '#2947AA',
        shadowColor:'grey',
        alignSelf: 'center'
    },

    logoView: {
        flexDirection: 'row',
    },

    visaLogoView: {
        marginTop:'5%',
        flexDirection: 'row',
        justifyContent:'flex-end',
        marginRight:'8%',
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

export default CardViewComponent;