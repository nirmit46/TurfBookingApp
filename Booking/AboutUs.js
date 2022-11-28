import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const{width,height}=Dimensions.get("window");


const ASPECT_RATIO=width/height;
const LATITUDE_DELTA=0.02;
const LONGITUDE_DELTA=LATITUDE_DELTA*ASPECT_RATIO
const INITIAL_POSITION={
  latitude:19.18010,
  longitude:72.94011,
  latitudeDelta:LATITUDE_DELTA,
  longitudeDelta:LONGITUDE_DELTA,
};
const AboutUs = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={INITIAL_POSITION}>
        <Marker coordinate={{latitude:19.180069952974748,longitude:72.94004473968805}}></Marker>
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default AboutUs