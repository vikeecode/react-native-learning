import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
('@react-navigator/native-stack');

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Deatils'>;

const Deatils = ({ route }: DetailProps) => {
  const { productId } = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={Style.container}>
      <Text style={Style.smallText}>Details for Product: {productId}</Text>
      <Button
        title="Go Back"
        // style={Style.button}
        //onPress={() => navigation.goBack()} />

        //other way to go back
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go Back to first screen in stack"
        //onPress={() => navigation.goBack()} />

        //other way to go back
        //onPress={() => navigation.pop(2)}
        // this is used to pop to specific screen in stack

        // but in poptoTop it will pop to first screen in stack
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    marginBottom: 20,
  },
});
export default Deatils;
