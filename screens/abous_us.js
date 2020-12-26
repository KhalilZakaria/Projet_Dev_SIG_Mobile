import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const abous_us = () => {
    return (
      <View style={styles.container}>
        <Text>à Propos de nous</Text>
        
      </View>
    );
};

export default abous_us;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
