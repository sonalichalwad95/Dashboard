import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import Constants from '../../constants/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/colors';
import Size from '../../constants/size';

interface balanceProps {
  currency_title: string;
  title: string;
  balance: string;
  up_val: string;
  down_val: string;
  status_title: string;
  balance_status: string;
}
const BalanceViewComponent: React.FC<balanceProps> = (props: any) => {
  const {
    title,
    currency_title,
    balance,
    up_val,
    down_val,
    status_title,
    balance_status,
  } = props || {};

  return (
    <View style={styles.mainView}>
      <View style={styles.balanceView}>
        <View style={styles.baseView}>
          <Text style={styles.balance}> {title}</Text>

          <Text style={styles.balanceDetails}> {balance} </Text>
        </View>

        <View style={styles.currencyView}>
          <View style={styles.percentageView}>
            <Icon
              name="long-arrow-up"
              style={styles.arrow}
              size={Size.icon_arrow}
              color={Colors.Pistachio}
            />

            <Text style={styles.increaseDetails}>{up_val}</Text>
          </View>

          <View style={styles.percentageView}>
            <Icon
              name="long-arrow-down"
              style={styles.arrow}
              size={Size.icon_arrow}
              color={Colors.Tea_rose_red}
            />

            <Text style={styles.decreaseDetails}>{down_val}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomCurrencyView}>
        <View style={styles.baseView}>
          <View>
            <Text style={styles.currency}>{currency_title}</Text>
          </View>
          <Text style={styles.currencyDetails}>
            {Constants.balance_currency}
          </Text>
        </View>
        <View style={styles.baseView}>
          <View>
            <Text style={styles.currency}>{status_title}</Text>
          </View>

          <View>
            <Text style={styles.currencyDetails}>{balance_status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 180,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: Colors.White,
    elevation: 25,
    shadowColor: Colors.Violet_blue,
    shadowRadius: 20,
    shadowOpacity: 1,
    textShadowOffset: {
      height: 50,
      width: 10,
    },
  },
  balanceView: {
    flex: 1,
    margin: '2%',
    flexDirection: 'row',
  },

  currencyView: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  bottomCurrencyView: {
    borderTopColor: Colors.Ghost_white,
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  balance: {
    margin: '5%',
    color: Colors.Batship_gray,
    fontSize: Size.text_font_size,
    textAlignVertical: 'center',
    paddingBottom: '2%',
    fontWeight: 'bold',
  },

  balanceDetails: {
    marginLeft: '5%',
    color: Colors.Jet,
    fontSize: Size.text_larger_size,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  increaseDetails: {
    color: Colors.Pistachio,
    fontSize: Size.text_small_size,
    paddingLeft: '4%',
    fontWeight: 'bold',
  },
  decreaseDetails: {
    color: Colors.Tea_rose_red,
    fontSize: Size.text_small_size,
    paddingLeft: '4%',
    fontWeight: 'bold',
  },
  percentageView: {
    flex: 1,
    paddingTop: '28%',
    height: 100,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  baseView: {
    flex: 1,
  },
  arrow: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: '4%',
  },
  currency: {
    marginLeft: '8%',
    marginBottom: '3%',
    color: Colors.Batship_gray,
    fontSize: Size.text_font_size,
    fontWeight: 'bold',
  },

  currencyDetails: {
    marginLeft: '8%',
    color: Colors.Jet,
    fontSize: Size.text_font_size,
    fontWeight: '700',
  },
});

export default BalanceViewComponent;
