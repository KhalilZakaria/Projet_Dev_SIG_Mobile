import React, {useContext, useState,useEffect } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import {View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';
import { AsyncStorage } from 'react-native';



const mapSingle = () => {
  const {user, logout} = useContext(AuthContext);
  const [markers, setMarkers] = useState([]);
  const [lat,setLat] = useState(33.5307243);
  const [long,setLong] = useState( -7.6868693);
  const [latitudeDelta,setLatitudeDelta] = useState(0)
  const [longitudeDelta,setLongitudeeDelta] = useState(0)
 
 
  useEffect(() => {
    
      AsyncStorage.getItem('UID123', (err, result) => {
        setLat(parseFloat(result))
      
        
      });
      AsyncStorage.getItem('UID124', (err, result) => {
        setLong(parseFloat(result))
      });
    
    firestore()
    .collection('Users')
    .where('user_id', '==', user.uid)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        setMarkers(data =>{return [doc.data(), ...data];})

      
    });
   
    });
}, [ ]);



      return (
     <View style={styles.container}>
       <Text>Map</Text>
       <MapView
         provider={PROVIDER_GOOGLE} // remove if not using Google Maps
         style={styles.map}
         region={{
           latitude: lat,
           longitude:long,
           latitudeDelta: latitudeDelta,
           longitudeDelta: longitudeDelta,
         }}
       >
         {markers && markers.map(marker => (
           
                            <Marker
                                key={Math.random().toString()}
                                coordinate={{latitude : marker.Lat, longitude : marker.Long }}
                                title={`Point$`}
                                description={marker.Description}
                            />
                          
                        ))}
       </MapView>
     </View>)
    
  };
  
  
export default mapSingle;


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
