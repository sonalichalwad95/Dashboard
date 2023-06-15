import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Constants from '../../constants/constants';
import Colors from '../../constants/colors';
import Size from '../../constants/size';

interface cardDetails {
  cardNumber: string;
  expiryDate: string;
  color: string;
}

const CardViewComponent: React.FC<cardDetails> = (props: any) => {
  const {cardNumber, expiryDate, color} = props || {};

  return (
    <View style={[styles.cardView]}>
      <View style={styles.logoView}>
        <View style={styles.chipView1}>
          <Image
            source={require('../../image/chip.png')}
            style={styles.cardChipIcon}
          />
        </View>
        <View style={styles.chipView}></View>

        <View style={styles.chipView2}>
          <Image
            source={require('../../image/cardIcon.png')}
            style={styles.cardLogoIcon}
          />
        </View>
      </View>
      <View style={styles.numberView}>
        <Text style={styles.cardNumberDetails}>{cardNumber}</Text>
        <Text style={styles.cardDateDetails}>{expiryDate}</Text>
      </View>
      <View style={styles.visaLogoView}>
        <Image
          source={require('../../image/visa.jpg')}
          style={styles.cardVisaIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderRadius: 10,
    paddingTop: 25,
    paddingBottom: 25,
    paddingStart: 30,
    paddingEnd: 30,
    backgroundColor: Colors.Violet_blue,
    elevation: 25,
    shadowColor: Colors.Violet_blue,
    shadowRadius: 10,
    shadowOpacity: 1,
    textShadowOffset: {
      height: 50,
      width: 10,
    },
  },

  logoView: {
    flexDirection: 'row',
  },

  chipView: {
    flex: 1,
    alignItems: 'center',
  },

  chipView1: {
    flex: 1,
    alignItems: 'flex-start',
  },
  chipView2: {
    flex: 1,
    alignItems: 'flex-end',
  },
  visaLogoView: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'flex-end',
  },

  numberView: {
    paddingTop: 30,
  },
  cardChipIcon: {
    height: 35,
    width: 50,
    borderRadius: 8,
  },

  cardLogoIcon: {
    height: 30,
    width: 90,
    borderRadius: 7,
  },
  cardVisaIcon: {
    marginLeft: 70,
    height: 20,
    width: 70,
    borderRadius: 7,
  },

  cardNumberDetails: {
    color: Colors.Ghost_white,
    fontSize: Size.text_large_size,
    opacity: 0.7,
    fontWeight: '500',
  },
  cardDateDetails: {
    color: Colors.Ghost_white,
    fontSize: Size.text_font_size,
    opacity: 0.7,
    fontWeight: '500',
  },
});

export default CardViewComponent;
