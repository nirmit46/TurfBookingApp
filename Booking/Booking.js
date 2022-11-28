import { View, Text, StyleSheet, Image, screenLeft, TouchableOpacity, TouchableHighlight, FlatList, ScrollView, LogBox ,ToastAndroid} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Booking = ({ route ,navigation}) => {

  const { selecteddate,username } = route.params;
  const [selectedslot, setselectedslot] = useState("");
  const [disabledslot, setdisabledslot] = useState(false)
  const [slot11, setslot11] = useState([{ empty: false, time: '06:00-07:00' }])
  const [slot10, setslot10] = useState([{ empty: false, time: '07:00-08:00' }])
  const [slot9, setslot9] = useState([{ empty: false, time: '08:00-09:00' }])
  const [slot8, setslot8] = useState([{ empty: false, time: '09:00-10:00' }])
  const [slots, setslots] = useState([{ empty: false, time: '10:00-11:00' }])
  const [slot1, setslot1] = useState([{ empty: false, time: '11:00-12:00' }])
  const [slot2, setslot2] = useState([{ empty: false, time: '12:00-13:00' }])
  const [slot3, setslot3] = useState([{ empty: false, time: '13:00-14:00' }])
  const [slot4, setslot4] = useState([{ empty: false, time: '14:00-15:00' }])
  const [slot5, setslot5] = useState([{ empty: false, time: '15:00-16:00' }])
  const [slot6, setslot6] = useState([{ empty: false, time: '16:00-17:00' }])
  const [slot7, setslot7] = useState([{ empty: false, time: '17:00-18:00' }])
  const [slot12, setslot12] = useState([{ empty: false, time: '18:00-19:00' }])
  const [slot13, setslot13] = useState([{ empty: false, time: '19:00-20:00' }])
  const [slot14, setslot14] = useState([{ empty: false, time: '20:00-21:00' }])
  const [slot15, setslot15] = useState([{ empty: false, time: '21:00-22:00' }])
  const [slot16, setslot16] = useState([{ empty: false, time: '22:00-23:00' }])
  const [slot17, setslot17] = useState([{ empty: false, time: '23:00-00:00' }])

  const [dataslot, setdataslot] = useState([{ time: '10:00-11:00' }, { time: '11:00-12:00' }, { time: '12:00-1:00' }])
  const [date, setdate] = useState()
  const [time, settime] = useState()
  const [condition, setcondition] = useState(false)
  let x = false

  const navbook=()=>{
    if(selectedslot==undefined){
      ToastAndroid.show("Select a slot first",ToastAndroid.SHORT);
    }
    else{
      navigation.navigate("Payment",{selecteddate,selectedslot,username})
    }
  }



  const toggleDone0 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot11.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "06:00-07:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot11.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot11(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot11(updatedList); // set state to new object with updated list
  }

  const toggleDone1 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot10.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "07:00-08:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot10.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot10(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot10(updatedList); // set state to new object with updated list
  }




  const toggleDone2 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot9.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "08:00-09:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot9.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot9(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot9(updatedList); // set state to new object with updated list
  }


  const toggleDone3 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot8.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "09:00-10:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot8.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot8(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot8(updatedList); // set state to new object with updated list
  }



  const toggleDone4 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slots.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "10:00-11:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slots.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslots(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslots(updatedList); // set state to new object with updated list
  }


  const toggleDone5 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot1.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "11:00-12:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot1.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot1(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot1(updatedList); // set state to new object with updated list
  }



  const toggleDone6 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot2.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "12:00-13:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot2.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot2(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot2(updatedList); // set state to new object with updated list
  }



  const toggleDone7 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot3.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "13:00-14:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot3.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot3(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot3(updatedList); // set state to new object with updated list
  }


  const toggleDone8 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot4.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "14:00-15:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot4.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot4(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot4(updatedList); // set state to new object with updated list
  }


  const toggleDone9 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot5.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "15:00-16:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot5.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot5(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot5(updatedList); // set state to new object with updated list
  }



  const toggleDone10 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot6.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "16:00-17:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot6.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot6(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot6(updatedList); // set state to new object with updated list
  }



  const toggleDone11 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot7.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "17:00-18:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot7.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot7(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot7(updatedList); // set state to new object with updated list
  }


  const toggleDone12 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot12.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "18:00-19:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot12.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot12(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot12(updatedList); // set state to new object with updated list
  }




  const toggleDone13 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot13.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "19:00-20:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot13.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot13(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot13(updatedList); // set state to new object with updated list
  }


  const toggleDone14 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot14.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "20:00-21:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot14.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot14(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot14(updatedList); // set state to new object with updated list
  }



  const toggleDone15 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot15.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "21:00-22:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot15.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot15(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot15(updatedList); // set state to new object with updated list
  }



  const toggleDone16 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot16.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "22:00-23:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot16.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot16(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot16(updatedList); // set state to new object with updated list
  }


  const toggleDone17 = (time) => {
    console.log(time);

    // loop over the todos list and find the provided id.
    let updatedList = slot17.map(item => {
      axios({
        method: 'GET',
        url: 'http://192.168.0.109:8081/booking/' + selecteddate + "/" + "23:00-00:00",
      }).then(function (response) {
        console.log("response ", JSON.stringify(response.data))
        settime(response.data.time);
        setdate(response.data.date)
        let updatedList = slot17.map(item => {
          if (item.time == response.data.time && selecteddate == response.data.date) {
            return { ...item, empty: !item.empty }; //gets everything that was already in item, and updates "done"
          }
          else {
            return item;
          }
        })
        setslot17(updatedList);
      })
        .catch(function (error) {
          console.log("error", error)
        })

      console.log(date)
      return item; // else return unmodified item 
    });

    setslot17(updatedList); // set state to new object with updated list
  }


  useEffect(() => {
    toggleDone0();
  }, [])
  
  useEffect(() => {
    toggleDone1();
  }, [])

  
  useEffect(() => {
    toggleDone2();
  }, [])

  
  useEffect(() => {
    toggleDone3();
  }, [])


  useEffect(() => {
    toggleDone4();
  }, [])


  useEffect(() => {
    toggleDone5();
  }, [])

  
  useEffect(() => {
    toggleDone6();
  }, [])

  
  useEffect(() => {
    toggleDone7();
  }, [])


  
  useEffect(() => {
    toggleDone8();
  }, [])

  
  useEffect(() => {
    toggleDone9();
  }, [])

  
  useEffect(() => {
    toggleDone10();
  }, [])

  
  useEffect(() => {
    toggleDone11();
  }, [])

  
  useEffect(() => {
    toggleDone12();
  }, [])

  
  useEffect(() => {
    toggleDone13();
  }, [])

  
  useEffect(() => {
    toggleDone14();
  }, [])

  
  useEffect(() => {
    toggleDone15();
  }, [])


  
  useEffect(() => {
    toggleDone16();
  }, [])

  
  useEffect(() => {
    toggleDone17();
  }, [])



useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  // useEffect(() => {
  //   toggleDone2();
  // }, [])
  return (
    <View style={styles.container}>
      {/* <Image style={{height:100,width:200,resizeMode:'contain',justifyContent:'flex-start'}} source={require('./assets/logo.png')}></Image> */}
      <Text style={styles.header}>Select Slot</Text>
      <View style={styles.container1}>
        <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
          <Text style={{ fontSize: 25, color: '#00a46c', padding: 10, fontWeight: 'bold' }}>Morning</Text>
          <View style={styles.container2}>

<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot11} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot10} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot9} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
</View>

          <View style={styles.container2}>

            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot8} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slots} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot1} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
          </View>

            {/* Morning Section Ends */}





          
          <Text style={{ fontSize: 25, color: '#00a46c', padding: 10, fontWeight: 'bold' }}>Afternoon</Text>
          <View style={styles.container2}>

<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot2} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot3} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot4} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
</View>

          <View style={styles.container2}>

            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot5} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot6} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot7} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
          </View>


            {/* Afternoon Section Ends */}




            <Text style={{ fontSize: 25, color: '#00a46c', padding: 10, fontWeight: 'bold' }}>Evening</Text>

            <View style={styles.container2}>

<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot12} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot13} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
<FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot14} renderItem={({ item, index }) => {

  return (
    <View>
      {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
      ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
      ) : null
      }
    </View>
  );
}}></FlatList>
</View>

          <View style={styles.container2}>

            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot15} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot16} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
            <FlatList style={{ alignSelf: 'center' }} numColumns={1} data={slot17} renderItem={({ item, index }) => {

              return (
                <View>
                  {item.empty == false ? (<TouchableOpacity disabled={false} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'green' : 'white' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'black' }}>{item.time}</Text></TouchableOpacity>
                  ) : item.empty == true ? (<TouchableOpacity disabled={true} onPress={() => { setselectedslot(item.time) }} onLongPress={() => { setselectedslot() }} style={[styles.btn, { backgroundColor: selectedslot == item.time ? 'blue' : 'grey' }]}><Text style={{ color: selectedslot == item.time ? 'white' : 'white' }}>{item.time}</Text></TouchableOpacity>
                  ) : null
                  }
                </View>
              );
            }}></FlatList>
          </View>
          <TouchableOpacity style={styles.btn1} onPress={navbook}>
            <Text style={styles.btntext}>Book</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    fontFamily: 'notoserif',
    color: 'white',
    padding: 10,
    fontWeight:'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
    backgroundColor: '#00a46c',
  },
  input: {
    margin: 7,
    borderRadius: 7,
    padding: 10,
    height: 40,
    width: 200,
    borderWidth: 2,
    // justifyContent: "space-between",

  },
  container1: {
    flex: 0.90,
    width: 400,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 17,
    backgroundColor: '#f0f0f0',
    position: 'relative'
  },
  container2: {
    justifyContent:'center',
    left:10,
    width: 400,
    // flex:1,
    padding:5,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around',
    borderRadius: 17,
    backgroundColor: '#f0f0f0',
    position: 'relative'
  },
  btn: {
    height: 50,
    width: 100,
    padding: 5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#A3C7D6',
    margin: 1
  },
  btnActive: {
    height: 70,
    width: 150,
    padding: 5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#A3C7D6',
  },
  btn1: {
    // opacity:0.8,
    justifyContent: 'center',
    // left:20,
    alignSelf: 'center',
    top: 30,
    borderColor: 'white',
    height: 50,
    width: 300,
    marginBottom: 100,
    backgroundColor: '#5adbb5',
    borderRadius: 17,
    // marginBottom:20
  },
  btntext: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight:'bold',
    color:'white'
  },
});
export default Booking