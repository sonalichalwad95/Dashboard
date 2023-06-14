import * as React from 'react';
import { View, Text, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from './src/constants';
import Dashboard from './src/screens/Dashboard';




const App= ()=> {
  
const Stack = createNativeStackNavigator();

  const done = () => {
    console.log('Pressed')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{
            title: 'My Cards',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTintColor: '#3A3A3A',

            headerRight: () => (
              <TouchableOpacity onPress={done}>
            <Icon name="ellipsis-v" size={26} color='#3A3A3A'/>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
