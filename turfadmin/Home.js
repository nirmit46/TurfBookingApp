import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View ,Button,Image, FlatList} from 'react-native';
import { useState } from 'react';
import { Card, ToggleButton } from 'react-native-paper';
import React from 'react';
import { TextInput } from 'react-native-paper';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native-paper';


const Home = ({navigation,route}) => {


    const {username}=route.params;
  return (
    <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: '#f0f0f0' }}>
    <View style={styles.banner}>
     <Text style={styles.heading} variant='displaySmall'>Admin Home</Text>
     <Image style={styles.bannerimg} source={require('./assets/Trickshot.png')}></Image>
   </View>
   <Card style={styles.form}>
    <Card.Title title="Select Operation" titleStyle={{fontWeight:'bold',fontSize:25,top:20}}></Card.Title>
    <TouchableOpacity onPress={()=>navigation.navigate("Dateselect",{username})} style={styles.btn}>
        <Text style={styles.btntext}>Check Bookings by Date</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=>navigation.navigate("Query")} style={styles.btn}>
        <Text style={styles.btntext}>View User Queries</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Signup")}>
        <Text style={styles.btntext}>Add Admin</Text>
       </TouchableOpacity>
   </Card>
   </View>
  )
}
const styles = StyleSheet.create({
    banner: {
      backgroundColor: '#00a46c',
      height: "28%",
      borderBottomLeftRadius: 20,
      borderBottomEndRadius: 20,
      paddingHorizontal: 20,
    },
    heading: {
      color: 'white',
      top: 100,
      fontWeight: 'bold'
    },
    bannerimg: {
      height: 250,
      width: 200,
      resizeMode: 'cover',
      alignSelf: 'center',
      left: 120,
      top: -45
    },
    form: {
        top:30,
        alignSelf: 'center',
        height: 530,
        width: 350,
      },
      btn: {
        // opacity:0.8,
        justifyContent: 'center',
        // left:20,
        alignSelf: 'center',
        top: 70,
        borderColor: 'white',
        height: 50,
        width: 300,
        marginBottom: 20,
        backgroundColor: '#5adbb5',
        borderRadius: 17,
        // marginBottom:20
    },
    btntext1: {
  alignSelf: 'center',
  fontSize: 20,
  color:'black',
  left:40
},
btntext: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight:'bold',
    color:'white'
  },
});  
export default Home