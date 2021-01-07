import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = () => {
    const {user, logout} = useContext(AuthContext);

  return (
    <View >
      <View >
          <Image source = {{uri:user.photoURL}} style = {styles.imageProfile} resizeMode = 'contain' />
      </View>
      
      <Text style={styles.text}>Welcome {user.displayName}</Text>
    
     
      <FormButton buttonTitle="Logout" onPress={() => logout()}  />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imageContainer: {
  
    
  },
  text: {
    fontSize: 20,
    color: '#333333',
    alignSelf:'center'
  },
  imageProfile:{
    alignSelf:'center',
    width:200,
    height:200,
    margin:20,
    borderRadius:100,
   
   
  }

});
