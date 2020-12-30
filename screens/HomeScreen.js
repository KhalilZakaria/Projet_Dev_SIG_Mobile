import React, {useContext, useState,useEffect }  from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { AuthContext } from '../navigation/AuthProvider';
import {
  Container, UserImg,
} from '../styles/FeedStyles';


const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const [data, setData] = useState([
    {Description : "", Lat : 0, Long : 0, user_id :""}
  ]);
   
  useEffect(() => {
      firestore()
      .collection('Users')
      .where('user_id', '==', user.uid)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          setData(dat =>{return [doc.data(), ...dat];})
          console.log(data)
        
      });
       
      });
  }, []);
  return (
  
    <Container>
      <FlatList data={data}
      keyExtractor={() => Math.random().toString()}
      renderItem={({item}) =>(
       <Text>{item.Description}</Text>
       )}
      />
    </Container>
    
  );
};

export default HomeScreen;
