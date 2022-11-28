import { View, ImageBackground, TouchableOpacity, Image, Animated, ToastAndroid, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { Avatar, Button, Chip, TextInput } from 'react-native-paper'
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { Card,Text } from 'react-native-paper'
import axios from 'axios'

const Contactus = ({ navigation }) => {

  // let [fontsLoaded] = useFonts({
  //   Poppins_500Medium,
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  const [name, setname] = useState("");
  const [email, setemail] = useState("")
  const [phoneno, setphoneno] = useState("");
  const [query, setquery] = useState("");

  const validate=()=>{
    const emailregex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if((name=="")||(email=="")||(query=="")||(phoneno=="")){
      ToastAndroid.show("Input all fields",ToastAndroid.SHORT);
    }
    else if(!emailregex.test(email)){
      ToastAndroid.show("Enter proper email",ToastAndroid.SHORT);

    }
    else if(phoneno.length!=10){
        ToastAndroid.show("Phone number should be 10 digit",ToastAndroid.SHORT);
    }
    else{
        addquery();
    }
}

  const addquery = async () => {
    await axios({
      method: 'POST',
      url: 'http://192.168.0.109:8081/addcontact',
      data: {
        name: name,
        email: email,
        phoneno: phoneno,
        query:query
      }
    })
      .then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        ToastAndroid.show("Query Submitted",ToastAndroid.SHORT);
      })
      .catch(function (error) {
        console.log("error", error)
        alert(error);
      })
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={styles.banner}>
        <Text style={styles.heading} variant='displaySmall'>Contact us</Text>
        <Image style={styles.bannerimg} source={require('./assets/Trickshot.png')}></Image>
      </View>
      <Card style={styles.form}>
                <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="account" />} onChangeText={(name)=>setname(name)} underlineColor='transparent' style={styles.input} placeholder='Name'></TextInput>
                <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="email" />}  onChangeText={(email)=>setemail(email)} underlineColor='transparent' style={styles.input} placeholder='Email'></TextInput>
                <TextInput keyboardType='number-pad' activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="cellphone" />} onChangeText={(phoneno)=>setphoneno(phoneno)} underlineColor='transparent' style={styles.input} placeholder='Phone Number'></TextInput>
                <TextInput numberOfLines={4} activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="comment-question-outline" />}  onChangeText={(query)=>setquery(query)} underlineColor='transparent' style={styles.input} placeholder='Your Query'></TextInput>
                <TouchableOpacity onPress={validate} style={styles.btn}>
                    <Text style={styles.btntext}>Send Query</Text>
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
    top: -60
  },
  // heading: {
  //   top: 40,
  //   left: 10,
  //   fontFamily: 'Poppins_500Medium',
  //   fontSize: 30,

  // },
  info: {
    marginTop: 50,
    width: 360,
    height: 150,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignSelf: 'center',
    // backgroundColor:'grey'
  },
  infotext: {
    bottom: 10,
    left: 72,
    fontSize: 15,
  },
  paymentmode: {
    alignSelf: 'center',
    height: 50,
    width: 150,
    borderColor: 'black',
    backgroundColor: 'pink',
    borderRadius: 20,
    margin: 15,
    top: -15,
  },
  paymenttext: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    fontFamily: 'Poppins_500Medium'
  },
  form: {
    top:30,
    alignSelf: 'center',
    height: 400,
    width: 350,
  },
  input: {
    top: 15,
    margin: 10,
    alignSelf: 'center',
    height: 35,
    width: 300,
    borderRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'white',
    // borderColor:'black',
    borderWidth: 1.5,
    padding: 5,
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  btn: {
    // opacity:0.8,
    justifyContent: 'center',
    // left:20,
    alignSelf: 'center',
    top: 40,
    borderColor: 'white',
    height: 50,
    width: 300,
    marginBottom: 20,
    backgroundColor: '#00a46c',
    borderRadius: 17,
    // marginBottom:20
  },
  btntext: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
});
export default Contactus