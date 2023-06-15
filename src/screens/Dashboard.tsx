import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Constants from '../constants';
import CardViewComponent from './components/CardView';
import BalanceViewComponent from './components/BalanceView';
import TransferViewComponent from './components/TransferView';
import Colors from '../colors';
import NewCardViewComponent from './components/NewCardView';

import callAPI from '../service/BalanceAPI';
import Icon from 'react-native-vector-icons/FontAwesome';
import Size from './size';

const Dashboard = () => {
  const [balance_, setBalance_] = useState<any>(0);

  useEffect(() => {
    callBalanceApi();
  }, []);

  const callBalanceApi = async () => {
    let result = await callAPI();
    console.log('result>> ', result);
    setBalance_(result?.balance);
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.primaryCardView}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}> {Constants.card_title}</Text>

            <View style={styles.headerIcon}>
              <TouchableOpacity>
                <Icon name="ellipsis-v" size={24} color={Colors.Jet} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <CardViewComponent
              color={Colors.Violet_blue}
              cardNumber={Constants.card_number}
              expiryDate={Constants.card_date}
            />

            <BalanceViewComponent
              title={Constants.balance_title}
              currency_title={Constants.balance_currency_title}
              balance={`$${balance_}`}
              up_val={Constants.balance_up}
              down_val={Constants.balance_down}
              status_title={Constants.balance_status_title}
              balance_status={Constants.balance_status}
            />
            <NewCardViewComponent new_card={Constants.new_card} />
          </View>
        </View>

        <View style={styles.transferView}>
          <TransferViewComponent
            title={Constants.transfer_title}
            card={Constants.transfer_card}
            card_number={Constants.card_number}
            card_visa={Constants.transfer_card_visa}
            primary={Constants.primary_button}
            secondary={Constants.secondary_button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  primaryCardView: {
    backgroundColor: Colors.Seasalt,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
    elevation: 25,
    shadowColor: Colors.Violet_blue,
    shadowRadius: 10,
    shadowOpacity: 1,
    textShadowOffset: {
      height: 50,
      width: 10,
    },
  },

  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: Size.text_larger_size,
    color: Colors.Jet,
    marginBottom: 30,
    fontWeight: '600',
  },

  headerIcon: {
    paddingTop: '2%',
    opacity: 0.8,
  },
  transferView: {
    height: 300,
    margin: 15,
  },
});

export default Dashboard;
