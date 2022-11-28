import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { ToggleButton } from 'react-native-paper';
import React from 'react';
import Booking from './Booking'
import { Chip } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dateselect from './Dateselect';
import GetStarted from './GetStarted';
import Login from './Login';
import Signup from './Signup';
import Tabs from './navigation/Tabs';
import ForgotPass from './ForgotPass';
import Payment from './Payment';
import Rating from './Rating';
import Contactus from './Contactus';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (


    <NavigationContainer>
     
     <Stack.Navigator initialRouteName='GetStarted' screenOptions={{headerShown:false}}>
     <Stack.Screen name='GetStarted' component={GetStarted}></Stack.Screen>
     <Stack.Screen name='Login' component={Login}></Stack.Screen>
     <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
     <Stack.Screen name='ForgotPass' component={ForgotPass}></Stack.Screen>
     <Stack.Screen name='Tabs' component={Tabs}></Stack.Screen>
       <Stack.Screen name='Dateselect' component={Dateselect}></Stack.Screen>
       <Stack.Screen name='Booking' component={Booking}></Stack.Screen>
       <Stack.Screen name='Payment' component={Payment}></Stack.Screen>
       <Stack.Screen name='Contactus' component={Contactus}></Stack.Screen>
       <Stack.Screen name='Rating' component={Rating}></Stack.Screen>
       
     </Stack.Navigator>
    </NavigationContainer>
    
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
