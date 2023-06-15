import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from '../../constants';
import Colors from '../../colors';
import Size from '../size';

interface cardDetails {
  new_card: string;
}

const NewCardViewComponent: React.FC<cardDetails> = (props: any) => {
  const {new_card} = props || {};

  return (
    <View style={styles.newCardView}>
      <Icon name="plus" size={Size.icon_plus} color={Colors.Violet_blue} />
      <Text style={styles.newCard}> {new_card}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  newCardView: {
    marginTop: '5%',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 10,
    backgroundColor: Colors.Ghost_white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 25,
    shadowColor: Colors.Violet_blue,
    shadowRadius: 10,
    shadowOpacity: 1,
    textShadowOffset: {
      height: 50,
      width: 10,
    },
  },

  newCard: {
    color: Colors.Violet_blue,
    fontSize: Size.text_font_size,
    fontWeight: 'bold',
  },
});

export default NewCardViewComponent;
