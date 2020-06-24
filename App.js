import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
         <Marker
      coordinate={{
        latitude:25.3176,
        longitude:82.9739
      }}
      title={"Varansi"}
      description={"vipus home"}
    />
       </MapView>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
