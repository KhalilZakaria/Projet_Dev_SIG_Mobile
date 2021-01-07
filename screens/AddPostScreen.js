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
import uuid from "uuid";
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
  
  const {user, logout} = useContext(AuthContext);
  const [description, setDescription] = useState();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [id,setId] = useState("");


  Geolocation.getCurrentPosition(data => {
    setLat(data.coords.latitude)
  }, (error) => alert(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 3600000 })

  Geolocation.getCurrentPosition(data => {
    setLong(data.coords.longitude)
  }, (error) => alert(error.message),
  { enableHighAccuracy: true, timeout: 20000, maximumAge: 3600000 })


 const AddPoint = () => {
     
    firestore()
    .collection('Users')
    .add({
     
      Description: description,
      Lat:lat,
      Long:long,
      user_id:user.uid,
      id_Point : uuid()
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
          Longitude : {long}
       </Text>
       <Text>
          Latitude : {lat}
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
