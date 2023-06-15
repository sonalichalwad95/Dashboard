import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import Constants from '../../constants/constants';
import Colors from '../../constants/colors';
import UserAPI from '../../service/UserAPI';
import Icon from 'react-native-vector-icons/FontAwesome';
import Size from '../../constants/size';

interface balanceProps {
  title: string;
  card: string;
  card_number: string;
  card_visa: string;
  primary: string;
  secondary: string;
}

const TransferViewComponent: React.FC<balanceProps> = (props: any) => {
  const {title, card, card_number, card_visa, primary, secondary} = props || {};
  const multiuser = [
    <Image
      source={require('../../image/user1_.jpeg')}
      style={styles.userIcon}
    />,
    <Image
      source={require('../../image/user2_.jpeg')}
      style={styles.userIcon}
    />,
    <Image
      source={require('../../image/user3_.jpeg')}
      style={styles.userIcon}
    />,
    <Image
      source={require('../../image/user4_.jpeg')}
      style={styles.userIcon}
    />,
    <Image
      source={require('../../image/user5_.png')}
      style={styles.userIcon}
    />,
    <Image
      source={require('../../image/user6_.png')}
      style={styles.userIcon}
    />,
    <Icon
      name="chevron-right"
      size={Size.icon_right}
      color={Colors.Batship_gray}
      style={styles.arrowIcon}
    />,
  ];

  return (
    <View style={styles.mainView}>
      <View style={styles.mainUserView}>
        <Text style={styles.transferText}> {title} </Text>
        <View style={styles.userView}>
          <UserAPI />
          {multiuser}
        </View>
      </View>

      <Text style={styles.cardText}>{card}</Text>
      <View style={styles.cardDetailsView}>
        <TextInput style={styles.cardNumberText}>{card_number}</TextInput>
        <Text style={styles.cardVisaText}>{card_visa}</Text>
      </View>

      <View style={styles.buttonView}>
        <View style={styles.sendButton}>
          <Text style={styles.sendtext}>{primary}</Text>
        </View>
        <View style={styles.saveButton}>
          <TouchableOpacity>
            <Text style={styles.saveText}>{secondary}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: Colors.Seasalt,
    elevation: 25,
    padding: 15,
    shadowColor: Colors.Violet_blue,
    shadowRadius: 10,
    shadowOpacity: 1,
    textShadowOffset: {
      height: 50,
      width: 10,
    },
  },
  mainUserView: {
    alignSelf: 'flex-start',
  },

  userView: {
    borderRadius: 10,
    flexDirection: 'row',
  },

  cardDetailsView: {
    flexDirection: 'row',
    marginRight: 8,
    marginLeft: 8,
    borderRadius: 10,
    paddingStart: 10,
    borderColor: Colors.Violet_blue,
    borderWidth: 0.5,
    elevation: 1,
    shadowColor: Colors.Ghost_white,
    shadowRadius: 1,
    shadowOpacity: 1,
    textShadowOffset: {
      height: 53,
      width: 1,
    },
  },

  transferText: {
    marginBottom: 10,
    color: Colors.Jet,
    fontWeight: 'bold',
    fontSize: Size.text_large_size,
  },
  userIcon: {
    borderRadius: 45,
    height: 45,
    width: 45,
    marginEnd: 5,
  },
  arrowIcon: {
    alignSelf: 'center',
    marginStart: 15,
    opacity: 0.5,
  },
  buttonView: {
    marginTop: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardText: {
    marginTop: 15,
    marginBottom: 10,
    marginStart: 8,
    fontSize: Size.text_font_size,
  },
  cardNumberText: {
    margin: '1%',
    flex: 0.9,
    height: 40,
    fontSize: Size.text_font_size,
  },
  cardVisaText: {
    fontSize: Size.text_font_size,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sendButton: {
    height: 45,
    width: '48%',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: Colors.Violet_blue,
  },
  sendtext: {
    color: Colors.Ghost_white,
    alignSelf: 'center',
    textAlign: 'center',
    opacity: 0.8,
  },
  saveButton: {
    height: 45,
    width: '48%',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: Colors.White,
    elevation: 5,
    shadowColor: Colors.Violet_blue,
    shadowRadius: 10,
    shadowOpacity: 1,
    textShadowOffset: {
      height: 50,
      width: 10,
    },
  },
  saveText: {
    color: Colors.Batship_gray,
    alignSelf: 'center',
    opacity: 0.8,
  },
});

export default TransferViewComponent;
