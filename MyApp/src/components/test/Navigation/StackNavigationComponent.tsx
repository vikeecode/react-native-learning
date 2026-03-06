import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const StackNavigationComponent = () => {
  return (
    <View style={Style.container}>
      <TextInput style={Style.input} placeholder="Search car name" />
    </View>
  );
};
const Style = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
  },
  container: {
    width: 100,
    height: 50,
    color: 'white',
  },
});

export default StackNavigationComponent;
