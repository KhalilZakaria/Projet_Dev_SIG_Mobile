import React,{PureComponent} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Marker } from 'react-native-maps';

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

  const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const SPACE = 0.01;
const markerIDs = ['Marker1', 'Marker2', 'Marker3'];

        

  class map extends PureComponent {
    

    constructor(props) {
      super(props);

      this.state = {
        markers: [
          {
            id:1,
            latitude: 37.78825,
            longitude: -122.4324,
            title : "aaaaaa",
            description : "aaaaaaaaaaaa"
          },

          {
            id:2,
            latitude: 38.78825,
            longitude: -122.4324,
            title : "bbbbbbbbb",
            description : "bbbbbbbbbbb"
          },
         
        ],
      };;
  }


    render()
    {
      return (
     <View style={styles.container}>
       <Text>Map</Text>
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
         {this.state.markers && this.state.markers.map(marker => (
                            <Marker
                                key={marker.id}
                                coordinate={{latitude : marker.latitude, longitude : marker.longitude }}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))}
       </MapView>
     </View>)
    }
  };
  
  
export default map;

