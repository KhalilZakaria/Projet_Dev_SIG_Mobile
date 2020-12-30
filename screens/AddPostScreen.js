import React, {useContext,useState,useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
  TextInput 
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/AddPost';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';

import Geocoder from 'react-native-geocoding';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';


const AddPostScreen = () => {

  const [info,setInfo] = useState(0);
  const [info1,setInfo1] = useState(0);

  Geolocation.getCurrentPosition(data => {
    setInfo(data.coords.latitude)
  })

  Geolocation.getCurrentPosition(data => {
    setInfo1(data.coords.longitude)
  })
  console.warn("Geolocation")

  const {user, logout} = useContext(AuthContext);
  const [description, setDescription] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

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

 const AddPoint = () => {
   
    firestore()
    .collection('Users')
    .add({
     
      Description: description,
      Lat:lat,
      Long:long,
      user_id:user.uid,
    })
    .then(() => {
      console.log('Point added!'); 
      alert("Point Added")
    });
  }
  return (
    <View >
        <FormInput
        labelValue={description}
        onChangeText={(description) => setDescription(description)}
        placeholderText="Desciption"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
       <Text>
          Longitude : {info1}
       </Text>
       <Text>
          Latitude : {info}
       </Text>
        {/* <FormInput
        labelValue={info1}
        iconType="user"
        autoCapitalize="none"
        autoCorrect={false}
      /> */}
      {/* <SocialButton
            buttonTitle="Get"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => getData()}
          /> */}
          <Text>
            {info} / {info1}
          </Text>
     <SocialButton
            buttonTitle="Add Point"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => AddPoint()}
          />
   </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
