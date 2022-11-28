import { View, Text, ImageBackground, TouchableOpacity, Image, Animated, ToastAndroid, FlatList } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { Avatar, Button, Chip, TextInput } from 'react-native-paper'
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins'
import { Card } from 'react-native-paper'
import axios from 'axios'
import { Alert } from 'react-native'

// import { useFonts, Inter_900Black} from '@expo-google-fonts/inter';
const Payment = ({ navigation, route }) => {
  const [selectedpay, setselectedpay] = useState("Card");
  const [data, setdata] = useState({ type: "Card", image: "require('./assets/icons/credit-card.png')" }, { type: "UPI", image: "require('./assets/icons/upi-icon.png')" })
  const { selecteddate, selectedslot, username } = route.params;
  const [name, setname] = useState("");
  const [email, setemail] = useState("")
  const [phoneno, setphoneno] = useState("");
  const [card, setcard] = useState("");
  const [cvv, setcvv] = useState("");
  const [expiry, setexpiry] = useState("");
  const [upi, setupi] = useState("")
  const register = async () => {
    await axios({
      method: 'POST',
      url: 'http://192.168.0.109:8081/addbooking',
      data: {
        username: username,
        name: name,
        date: selecteddate,
        time: selectedslot,
        email: email,
        phoneno: phoneno,
      }
    })
      .then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        //   alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log("error", error)
        alert(error);
      })
  }

  const validatecard=()=>{
    const emailregex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    const cardregex=new RegExp("^[0-9]{1,5}$");
    const cvvregex=new RegExp("[0-9]{1,3}")
    if((name=="")||(email=="")||(card=="")||(phoneno=="")||(cvv=="")||(expiry=="")){
      console.log(name,email,phoneno,cvv,card,expiry);
      ToastAndroid.show("Input all fields",ToastAndroid.SHORT);
    }
  
    else if(!emailregex.test(email)){
      ToastAndroid.show("Enter proper email",ToastAndroid.SHORT);

    }
    else if(phoneno.length!=10){
        ToastAndroid.show("Phone number should be 10 digit",ToastAndroid.SHORT);
    }
    else if(card.length!=16){
      console.log(card)
      ToastAndroid.show("Enter Proper Card Number",ToastAndroid.SHORT);
    }
    else if(cvv.length!=3){
      console.log(cvv)
      ToastAndroid.show("Enter Proper CVV",ToastAndroid.SHORT);
    }
    // else if(expiry.length!=5){
    //   console.log(expiry)
    //   ToastAndroid.show("Enter a Valid Expiry Date")
    // }
    else{
        Alert.alert("Confirm","Are you sure you want to continue?", [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK", onPress: () => navlog() }
          ],
          {cancelable:true})
    }
}

const validateupi=()=>{
  const emailregex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  const upiregex=new RegExp("[a-zA-Z0-9.\\-_]{2,256}@[a-zA-Z]{2,64}");
  if((name=="")||(email=="")||(phoneno=="")||(upi=="")){
    console.log(name,email,phoneno,upi)
    ToastAndroid.show("Input all the fields",ToastAndroid.SHORT);
  }

  else if(!emailregex.test(email)){
    ToastAndroid.show("Enter proper email",ToastAndroid.SHORT);

  }
  else if(phoneno.length!=10){
      ToastAndroid.show("Phone number should be 10 digit",ToastAndroid.SHORT);
  }
  else if(!upiregex.test(upi)){
    console.log(upi)
    ToastAndroid.show("Enter valid UPI ID",ToastAndroid.SHORT);
  }
  else{
      Alert.alert("Confirm","Are you sure you want to continue?", [
          {
            text: "Cancel",
            style: "cancel"
          },
          { text: "OK", onPress: () => navlog() }
        ],
        {cancelable:true})
  }
}
  const navlog = () => {
    register();
    ToastAndroid.show("Booking Successful", ToastAndroid.SHORT);
    navigation.navigate("Tabs", { username })
  }

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1, top: 30 }}>
      <Text style={styles.heading}>Payment</Text>
      <Card style={styles.info}>
        <Card.Title
          title="Cart"
          titleStyle={{ fontSize: 20, top: 10, fontWeight: 'bold' }}
          subtitleStyle={{ top: 10, fontSize: 12 }}
          left={(props) => <Avatar.Icon {...props} icon="cart" />}
          leftStyle={{ top: 7 }}
        />
        <Text style={styles.infotext}>Date: {selecteddate}</Text>
        <Text style={styles.infotext}>Time Slot: {selectedslot}</Text>
        <Text style={styles.infotext}>Price: 800</Text>
      </Card>
      <View style={{ flexDirection: 'row', justifyContent: 'center', top: 30 }}>
        <TouchableOpacity style={[styles.paymentmode, { backgroundColor: selectedpay == "Card" ? '#ab87ff' : 'white' }]} onPress={() => setselectedpay("Card")}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 30, width: 30 }} source={require('./assets/icons/credit-card.png')}></Image>
            <Text style={[styles.paymenttext, { color: selectedpay == "Card" ? 'white' : 'black' }]}>Card</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.paymentmode, { backgroundColor: selectedpay == "UPI" ? '#ab87ff' : 'white' }]} onPress={() => setselectedpay("UPI")}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: 40, width: 40, resizeMode: 'contain' }} source={require('./assets/icons/upi-icon.png')}></Image>
            <Text style={[styles.paymenttext, { color: selectedpay == "UPI" ? 'white' : 'black' }]}>UPI</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList showsVerticalScrollIndicator={false} style={{ marginTop: 30 }} data={selectedpay} renderItem={(e) => {
        if (e.item == "C") {
          return (
            <Card style={styles.form}>
              <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="account" />} underlineColor='transparent' onChangeText={(name) => setname(name)} style={styles.input} placeholder='Name'></TextInput>
              <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="email" />} underlineColor='transparent' onChangeText={(email) => setemail(email)} style={styles.input} placeholder='Email'></TextInput>
              <TextInput keyboardType='number-pad' activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="cellphone" />} underlineColor='transparent' onChangeText={(phoneno) => setphoneno(phoneno)} style={styles.input} placeholder='Phone Number'></TextInput>
              <TextInput keyboardType='number-pad' activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="credit-card" />} underlineColor='transparent' onChangeText={(card) => setcard(card)} style={styles.input} placeholder='Card Number'></TextInput>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TextInput keyboardType='number-pad' activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="card-bulleted-off" />} underlineColor='transparent' onChangeText={(cvv) => setcvv(cvv)} style={[styles.input, { width: 140 }]} placeholder='CVV'></TextInput>
                <TextInput keyboardType='number-pad' activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="calendar-alert" />} underlineColor='transparent' onChangeText={(expiry) => setexpiry(expiry)} style={[styles.input, { width: 140 }]} placeholder='Expiry'></TextInput>
              </View>
              <TouchableOpacity onPress={validatecard} style={styles.btn}>
                <Text style={styles.btntext}>Pay Now</Text>
              </TouchableOpacity>
            </Card>
          )
        }
        else if (e.item == "U") {
          return (
            <Card style={[styles.form, { height: 400 }]}>
              <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="account" />} underlineColor='transparent' onChangeText={(name) => setname(name)} style={styles.input} placeholder='Name'></TextInput>
              <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="email" />} underlineColor='transparent' onChangeText={(email) => setemail(email)} style={styles.input} placeholder='Email'></TextInput>
              <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="cellphone" />} underlineColor='transparent' onChangeText={(phoneno) => setphoneno(phoneno)} style={styles.input} placeholder='Phone Number'></TextInput>
              <TextInput activeUnderlineColor='transparent' left={<TextInput.Icon style={{ top: 4 }} icon="identifier" />} underlineColor='transparent' onChangeText={(upi) => setupi(upi)} style={styles.input} placeholder='UPI ID'></TextInput>
              <TouchableOpacity onPress={validateupi} style={styles.btn}>
                <Text style={styles.btntext}>Pay Now</Text>
              </TouchableOpacity>
            </Card>
          )
        }
      }}></FlatList>

    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    top: 40,
    left: 10,
    fontFamily: 'Poppins_500Medium',
    fontSize: 30,

  },
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
    alignSelf: 'center',
    height: 500,
    width: 350,
  },
  input: {
    top: 15,
    margin: 10,
    alignSelf: 'center',
    height: 40,
    width: 300,
    borderRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: 'white',
    // borderColor:'black',
    borderWidth: 2,
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
    top: 20,
    borderColor: 'white',
    height: 50,
    width: 300,
    marginBottom: 20,
    backgroundColor: '#ab87ff',
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
export default Payment