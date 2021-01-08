import React, {useContext, useState,useEffect }  from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../navigation/AuthProvider';
import {
  Container, UserImg,
} from '../styles/FeedStyles';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';




const HomeScreen = () => {
  const {user, logout} = useContext(AuthContext);
  const navigation = useNavigation();
 
  const [data, setData] = useState([
  ]);
 
  const windowWidth = Dimensions.get('window').width;
  useEffect(() => {
      firestore()
      .collection('Users')
      .where('user_id', '==', user.uid)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          setData(data =>{return [doc.data(), ...data];})
    
        
      });
       
      });
  }, []);


  return (
  
    <Container >
      <Text style = {styles.title}>List Of Points:  </Text>

      <FlatList data={data}
      style={windowWidth}
      keyExtractor={() => Math.random().toString()}
      renderItem={({item}) =>(
             <TouchableOpacity  onPress={ async () => {
                try {
                  await AsyncStorage.setItem(
                    'UID123',
                    item.Lat.toString()
                  );
                  await AsyncStorage.setItem(
                    'UID124',
                    item.Long.toString()
                  );
                } catch (error) {
                  // Error saving data
                  console.error(error)
                }
               navigation.navigate('Single Point')
         
               
               
               }}>
               <View style = {{flex:1}}>
                <Text style = {{  fontFamily: 'Lato-Regular'}}> {"\n"} Point  </Text>
                    <View style={styles.list}>
                       <Text style={styles.description} > Description: {item.Description}</Text>  
                        <Image
                            source={require("../assets/icons/point.png")}
                            style ={{width:20,height:20 ,padding:12}}
                        />
                   </View>
                   <View
                  style={{borderBottomColor: 'black',borderBottomWidth: 1}}
                    />
                  
                </View>
             </TouchableOpacity>
              
       )}
      />
    </Container>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title:{
    fontFamily: 'Lato-Regular',
    fontSize: 28,
    marginTop: 20,
    alignItems:'center',
    color: '#051d5f',
  },
  list:{
    flexDirection:'row',
    flex:1,
    justifyContent:"space-around",
    alignContent:'center',
    
  },
  description:{
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    marginRight:20
  }
});
