import React, {useContext, useState,useEffect }  from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { AuthContext } from '../navigation/AuthProvider';
import {
  Container, UserImg,
} from '../styles/FeedStyles';


const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const [data, setData] = useState({
    Description:'',
    Lat:'',
    Long:'',
    user_id:''
});
   
  useEffect(() => {
      firestore()
      .collection('Users')
      .where('user_id', '==', user.uid)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          setData(doc.data())
          console.log(data)
        
      });
       
      });
  }, [data]);
  return (
  
    <Container>
   
                <Text>User id:{data.user_id}</Text>
                 <Text>Description:{data.Description}</Text>
                 <Text>Lat:{data.Lat}</Text>
                 <Text>Long:{data.Long}</Text>
    </Container>
    
  );
};

export default HomeScreen;
