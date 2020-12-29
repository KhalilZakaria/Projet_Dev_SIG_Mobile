import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

// Geolocation.getCurrentPosition(data => {
//   setInfo(data.coords.latitude)
// })

// Geolocation.getCurrentPosition(data => {
//   setInfo1(data.coords.longitude)
// })
// console.warn("Geolocation")

// const {user, logout} = useContext(AuthContext);
// const [description, setDescription] = useState();
// const [lat, setLat] = useState();
// const [long, setLong] = useState();

//   // const getData = () => {
//   //   // Initialize the module (needs to be done only once)
//   //   Geocoder.init("AIzaSyCHhPKty4ak8bf8h7hAEcYX-d0NPh3CPHI"); // use a valid API key
//   //   // With more options
//   //   // Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

//   //   // Search by geo-location (reverse geo-code)
//   //   Geocoder.from(41.89, 12.49)
//   //   .then(json => {
//   //           var addressComponent = json.results[0].address_components[0];
//   //     console.log(addressComponent);
//   //   })
//   //   .catch(error => console.warn(error));
//   // };

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
