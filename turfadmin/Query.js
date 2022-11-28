
import { View, StyleSheet, Image, Dimensions, ScrollView, FlatList ,TouchableOpacity,RefreshControl} from 'react-native'
import React from 'react'
import { Avatar, Chip, Paragraph, Text, Title } from 'react-native-paper'
import { useRef, useState,useEffect,useCallback } from 'react'
import { Card } from 'react-native-paper'
import { TextInput } from 'react-native-paper'
import axios from 'axios'
import * as MailComposer from 'expo-mail-composer';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
const Query = () => {
    const [isAvailable, setisAvailable] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [query, setquery] = useState([]);
    const getqueries=()=>{
        axios.get(`http://192.168.0.109:8081/getallquery`).then(
            (response)=> {
                setquery(response.data);
            },
      
        (error)=>{
            console.log(error)
        }
        );
       }
       
       useEffect(() => {
        getqueries();
       }, [])
    
       useEffect(() => {
         async function checkAvailability(){
            const isMailAvailable=await MailComposer.isAvailableAsync();
            setisAvailable(isMailAvailable);
         }
       
         checkAvailability();
       }, [])
       
       const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getqueries();
        wait(2000).then(() => setRefreshing(false));
      }, []);
    
  return (
    <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: '#f0f0f0' }}>
    <View style={styles.banner}>
        <Text style={styles.heading} variant='headlineLarge'>User Queries</Text>
        <Image style={styles.bannerimg} source={require('./assets/Trickshot.png')}></Image>
      </View>
      <FlatList  refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}/>} data={query} renderItem={(e)=>{
                const sendmail=()=>{
                    MailComposer.composeAsync({
                        subject:"Regarding Your Query",
                        body:"Hi!  "+e.item.name,
                        recipients:[e.item.email],
                    })
                }

          return(
            <View style={[styles.bookings]}>
            <View style={{top:10}}>
            <Text style={styles.texts}>Name:{e.item.name}</Text>
            <Text style={styles.texts}>Email:{e.item.email}</Text>
            <Text style={styles.texts}>Phone Number:{e.item.phoneno}</Text>
            <Text style={[styles.texts,{width:"80%"}]}>Query:{e.item.query}</Text>
            {isAvailable ? <TouchableOpacity onPress={sendmail} style={{left:300,bottom:50}}>
                
                <Text style={[styles.texts,{color:'blue'}]}>Reply</Text>
              </TouchableOpacity>:null}
            
          </View>
            </View>)
       
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
      top: -45
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

export default Query