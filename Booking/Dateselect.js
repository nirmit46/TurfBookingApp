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


const Dateselect = ({navigation,route}) => {
    const [date, setDate] = useState(new Date())
    const month=date.getMonth()+1;
    const selecteddate=date.getDate()+"-"+month+"-"+date.getFullYear();
    const username=route.params.username;
    const today=new Date()
    const maxdate=new Date().setMonth(today.getMonth()+3) ;
    const move=()=>{
      if(Date.now()>=date){
        alert("Select Proper Date")
      }
      else{
      navigation.navigate("Booking",{selecteddate,username})
    }
    }
    const onChange = (event, selectedDate) => {
      
      setDate(selectedDate);
    };
    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        minimumDate:date.getDate(),
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };

    const dateView = () => {
      DateTimePickerAndroid.open({
          value: date,
          minimumDate: new Date(),
          maximumDate:maxdate,
          onChange: onChange,
          mode: 'date',
      });
  };
    // const showDatepicker = () => {
    //   showMode('date');
    // };
  return (
    <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: '#f0f0f0' }}>
       <View style={styles.banner}>
        <Text style={styles.heading} variant='displaySmall'>Book Now</Text>
        <Image style={styles.bannerimg} source={require('./assets/Trickshot.png')}></Image>
      </View>
        {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
        <TouchableOpacity style={styles.btn1} onPress={dateView}>
          <View style={{flexDirection:'row'}}>
          <Image style={{height:20,width:20,alignSelf:'center',left:20}} source={require('./assets/icons/calendar.png')}></Image>
          <Text style={styles.btntext1}>{selecteddate}</Text>
          </View>
          
        </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={move}>
        <Text style={styles.btntext}>Book a Slot</Text>
       </TouchableOpacity>
       <Card style={{top:80,height:220,width:370,alignSelf:'center'}}>
       <Card.Title
              title="Rules"
              titleStyle={{ fontSize: 20,top:10,left:-15,fontWeight:'bold'}}
              left={(props) => <TextInput.Icon {...props} icon="notebook-outline"/>}
              leftStyle={{ top: 5 }}
            />
       <View style={{alignSelf:'center',left:10}}>
      <Text style={styles.rules}>1) Maximum 12 People Allowed on Field</Text>
      <Text style={styles.rules}>2) Food is not allowed on field premises</Text>
      <Text style={styles.rules}>3) Online bookings cannot be shifted once booked {"\n"}online unless approved by management</Text>
      <Text style={styles.rules}>4) No Drinking Alcohol and Smoking</Text>
      </View>
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
    top: -60
  },
 
  info: {
    marginTop: 10,
    width: 360,
    height: 100,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf: 'center',
    // backgroundColor:'grey'
  },
  info1: {
    marginTop: 10,
    width: 360,
    height: 160,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf: 'center',
    // backgroundColor:'grey'
  },
  chip: {
    marginRight: 5,
    backgroundColor: 'white',
    color:'#00a46c',
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
btn1: {
  // opacity:0.8,
  justifyContent: 'center',
  // left:20,
  alignSelf: 'center',
  top: 50,
  borderColor: 'white',
  height: 50,
  width: 200,
  marginBottom: 20,
  backgroundColor: 'white',
  borderRadius: 5,
  shadowColor: '#7F5DF0',
  shadowOffset: {
      width: 0,
      height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: 5
  // marginBottom:20
},
btntext: {
  alignSelf: 'center',
  fontSize: 20,
  fontWeight:'bold',
  color:'white'
},
btntext1: {
  alignSelf: 'center',
  fontSize: 20,
  color:'black',
  left:40
},
rules:{
  fontSize:15,
  paddingBottom:5,
}
});
export default Dateselect