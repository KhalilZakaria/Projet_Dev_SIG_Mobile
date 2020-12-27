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

const AddPostScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const [description, setDescription] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
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
       <FormInput
        labelValue={lat}
        onChangeText={(lat) => setLat(lat)}
        placeholderText="latitude"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
        <FormInput
        labelValue={long}
        onChangeText={(long) => setLong(long)}
        placeholderText="longitude"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
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
