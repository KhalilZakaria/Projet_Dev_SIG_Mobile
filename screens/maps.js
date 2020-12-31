import React, {useContext, useState,useEffect } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';

const map = () => {
  const {user, logout} = useContext(AuthContext);
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    firestore()
    .collection('Users')
    .where('user_id', '==', user.uid)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        setMarkers(data =>{return [doc.data(), ...data];})
      
    });
     
    });
}, [markers]);
    

      return (
     <View style={styles.container}>
       <Text>Map</Text>
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         region={{
           latitude: 33.5307243,
           longitude: -7.6868693,
           latitudeDelta: 10,
           longitudeDelta: 20,
         }}
       >
         {markers && markers.map(marker => (
           
                            <Marker
                                key={Math.random().toString()}
                                coordinate={{latitude : marker.Lat, longitude : marker.Long }}
                                title="Point"
                                description={marker.Description}
                            />
                        ))}
       </MapView>
     </View>)
    
  };
  
  
export default map;


const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
