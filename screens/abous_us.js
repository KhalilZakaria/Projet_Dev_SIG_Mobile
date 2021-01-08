import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';

const abous_us = () => {
    return (
      <View >
         <Image
         style={{width: 400  , height: 250}}
        source={{
          uri:
            'https://www.codematics.co/wp-content/uploads/2018/04/triggerport.jpg',
        }}
      />
        <Text style={styles.listItemText}>à Propos de nous</Text>
        
        
      </View>
    );
};

  // const getData = () => {
  //   // Initialize the module (needs to be done only once)
  //   Geocoder.init("AIzaSyCHhPKty4ak8bf8h7hAEcYX-d0NPh3CPHI"); // use a valid API key
  //   // With more options
  //   // Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

  //   // Search by geo-location (reverse geo-code)
  //   Geocoder.from(41.89, 12.49)
  //   .then(json => {
  //           var addressComponent = json.results[0].address_components[0];
  //     console.log(addressComponent);
  //   })
  //   .catch(error => console.warn(error));
  // };

export default abous_us;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  listItemView :{
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignContent : 'center',
},

listItemText : {
    fontSize : 18,
},
});
