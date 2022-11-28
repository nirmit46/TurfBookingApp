import { View, StyleSheet, Image, Dimensions, ScrollView, FlatList ,TouchableOpacity,RefreshControl} from 'react-native'
import React from 'react'
import { Avatar, Chip, Paragraph, Text, Title } from 'react-native-paper'
import { useRef, useState,useEffect,useCallback } from 'react'
import { Card } from 'react-native-paper'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const ViewBookings = ({route,navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const todaydate=new Date().getDate().toString();
  const todaymonth=new Date().getMonth()+1;
  const tmonth=todaymonth.toLocaleString()
  const todayyear=new Date().getFullYear().toString();
  const today=todaydate+"-"+tmonth+"-"+todayyear
  const username=route.params.username;
  const [bookings, setbookings] = useState([]);
  const getstatement=()=>{
    axios.get(`http://192.168.0.109:8081/viewbookings/`+username).then(
        (response)=> {
            // console.log(response);
            // alert(JSON.stringify(response.data));
            setbookings(response.data);
            console.log(bookings);
            console.log(today)
            // setstatement(JSON.stringify(response.data));
            // alert(statement)
        },
  
    (error)=>{
        console.log(error)
    }
    );
   }
   useEffect(() => {
    getstatement();
   }, [])
   const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getstatement();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: '#f0f0f0' }}>
    <View style={styles.banner}>
        <Text style={styles.heading} variant='headlineLarge'>View Bookings</Text>
        <Image style={styles.bannerimg} source={require('./assets/Trickshot.png')}></Image>
      </View>
      <FlatList  refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}/>} style={{marginBottom:100}} data={bookings} renderItem={(e)=>{
        const book=(e.item.date).toString();
        const day=book.split("-")
        console.log(day[0])
        if(day[0]>todaydate||day[1]>todaymonth){
          return(
            <View style={styles.bookings}>
            <Text style={styles.texts}>Name:{e.item.name}</Text>
            <Text style={styles.texts}>Date:{e.item.date}</Text>
            <Text style={styles.texts}>Time:{e.item.time}</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.texts}>Status:</Text>
            <Text style={[styles.texts,{color:'orange'}]}>Pending</Text>
            </View>
            
            </View>)
        }
        else{ 
          return(
          <View style={[styles.bookings]}>
          <View style={{top:10}}>
          <Text style={styles.texts}>Name:{e.item.name}</Text>
          <Text style={styles.texts}>Date:{e.item.date}</Text>
          <Text style={styles.texts}>Time:{e.item.time}</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={styles.texts}>Status:</Text>
          <Text style={[styles.texts,{color:'green'}]}>Completed</Text>
          </View>
          <TouchableOpacity style={{left:275,bottom:50}} onPress={()=>navigation.navigate("Rating",{username})}>
            <Text style={[styles.texts,{color:'blue'}]}>Rate Now</Text>
          </TouchableOpacity>
          </View>
          </View>)}
       
      }}></FlatList>
      
    </View>
  )
}

const styles=StyleSheet.create({
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
  bookings:{
    paddingLeft:20,
    margin:10,
    height:150,
    width:380,
    alignSelf:'center',
    backgroundColor:'white',
    borderRadius:20,
    justifyContent:'center',
 
  },
  texts:{
    fontSize:16
  }
});

export default ViewBookings