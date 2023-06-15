import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Size from '../size';
import Colors from '../constants/colors';

const UserAPI = () => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    const profiles: any = await fetch(
      'https://2.api.fy23ey01.careers.ifelsecloud.com/',
    )
      .then(reply => reply.json())
      .then(profiles => {
        return profiles;
      })
      .catch(error => {
        console.error(error);
      });
    console.log('here are the user details', profiles);
    setUserDetails(profiles);
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        horizontal={true}
        data={userDetails}
        renderItem={({item}) => (
          <View>
            <Image style={styles.userImage} source={{uri: item?.picture}} />
          </View>
        )}
        keyExtractor={item => item?.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    // margin: '2%',
    height: '30%',
    borderRadius: 7,
  },

  userImage: {
    // height: '50%',
    width: '20%',
    borderRadius: 7,
  },
});

export default UserAPI;
