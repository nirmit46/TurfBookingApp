import { View, StyleSheet, Image, Dimensions, ScrollView, FlatList,LogBox } from 'react-native'
import React from 'react'
import { Avatar, Chip, Paragraph, Text, Title } from 'react-native-paper'
import { useRef, useState ,useEffect} from 'react'
import { Card } from 'react-native-paper'
import { TextInput } from 'react-native-paper'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import axios from 'axios'

const Home = ({route}) => {

const username=route.params.username;
  const data = ['https://media.hudle.in/venues/79b9d88f-2ac7-4099-8ab2-f7b9e8763b7c/photo/0b78542a6d28226eaf4cdd7addf6de94686de140',
    'https://media.hudle.in/venues/79b9d88f-2ac7-4099-8ab2-f7b9e8763b7c/photo/716856ef5f940bdca3b9e66a74062d59b7b2526e',
    'https://media.hudle.in/venues/79b9d88f-2ac7-4099-8ab2-f7b9e8763b7c/photo/5c60644a58f1080828441d04f3e9ec233aabe300'];


  const [imgActive, setimgActive] = useState(0);
  const [reviews, setreviews] = useState([]);

  const getreviews=()=>{
    axios.get(`http://192.168.0.109:8081/getallreviews`).then(
        (response)=> {
            console.log(response);
            // alert(JSON.stringify(response.data));
            setreviews(response.data);
            // setstatement(JSON.stringify(response.data));
            // alert(statement)
        },
  
    (error)=>{
        console.log(error)
    }
    );
   }
   useEffect(() => {
     getreviews();
   }, [])

   useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
   
  return (
    <View style={{ backgroundColor: 'white', flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={styles.banner}>
        <Text style={styles.heading} variant='displaySmall'>Hi !</Text>
        <Text style={styles.heading} variant='displaySmall'>{username}</Text>
        <Image style={styles.bannerimg} source={require('./assets/Trickshot.png')}></Image>
      </View>
      <ScrollView>
        <View style={styles.wrap}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {data.map((e, index) =>
              <Image key={e} resizeMode='stretch' style={styles.wrap} source={{ uri: e }}></Image>
            )}
          </ScrollView>
        </View>
        <View style={{ top: 10 }}>
          <Card style={styles.info}>
            <Card.Title
              title="Location"
              subtitle="Trickshot,NES International School, Cypress Road Opp Sardar Pratap Singh Garden, Swapna Nagari, Mulund West, W, Maharashtra 400082"
              subtitleNumberOfLines={2}
              titleStyle={{ fontSize: 20, top: 10, fontWeight: 'bold',left:-15 }}
              subtitleStyle={{ top: 10, fontSize: 12,left:-15 }}
              left={(props) => <TextInput.Icon {...props} icon="map-marker" />}
              leftStyle={{ top: 7 }}
            />
          </Card>
          <Card style={styles.info}>
            <Card.Title
              title="Available Sports"
              titleStyle={{ fontSize: 20, top: 10 }}
              // left={(props) => <TextInput.Icon {...props} icon="map-marker" style/>}
              leftStyle={{ top: 5 }}
            />
            <View style={{ flexDirection: 'row', left: 5 }}>
              <Chip style={styles.chip} icon="soccer">Football</Chip>
              <Chip style={styles.chip} icon="cricket">Cricket</Chip>
            </View>
          </Card>
          <Card style={[styles.info1]}>
            <Card.Title
              title="Amenities"
              titleStyle={{ fontSize: 20, top: 10 }}
              // left={(props) => <TextInput.Icon {...props} icon="map-marker" style/>}
              leftStyle={{ top: 5 }}
            />
            <View style={{ flexDirection: 'row',left: 5 }}>
              <Chip style={styles.chip} icon="hanger">Changing Room</Chip>
              <Chip style={styles.chip} icon="baseball-bat">Free Equipment</Chip>
              </View>
              <View style={{ flexDirection: 'row',left: 5 }}>
              <Chip style={styles.chip} icon="toilet">Clean Washrooms</Chip>
              <Chip style={styles.chip} icon="television-ambient-light">Floodlights</Chip>
            </View>
            <View style={{ flexDirection: 'row',left: 5 }}> 
            <Chip style={styles.chip} icon="parking">Free Parking</Chip>
            </View>
          </Card>
          <View style={[styles.wrap1,{marginBottom:120}]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap1}>
            <FlatList data={reviews} horizontal renderItem={(e)=>{
              return(
              <Card style={styles.wrap1}>
              <Card.Title
              title="Reviews"
              titleStyle={{ fontSize: 20, top: 10 }}
              // left={(props) => <TextInput.Icon {...props} icon="map-marker" style/>}
              leftStyle={{ top: 5 }}
            /><View style={{left:20}}>
              <View style={{flexDirection:'row'}}>
              <Image style={{height:30,width:30}} source={require('./assets/icons/homestar.png')}></Image>
              <Text style={{fontSize:15,fontWeight:'bold',alignSelf:'center',left:5}}>{e.item.star}</Text>
              </View>
              <Text>Name: {e.item.name}</Text>
              <Text style={{width:'80%'}}>Comment: {e.item.like}</Text>
              </View>
              </Card>
              )
            }}>

            </FlatList>
          </ScrollView>
        </View>
        </View>
      </ScrollView>
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
      top: -90
    },
    wrap: {
      alignSelf: 'center',
      top: 5,
      width: WIDTH - 20,
      height: HEIGHT * 0.25,
      borderRadius: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    wrap1: {
      alignSelf: 'center',
      top: 5,
      width: WIDTH - 20,
      height: 160,
      borderRadius: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20
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
    }
  });
export default Home