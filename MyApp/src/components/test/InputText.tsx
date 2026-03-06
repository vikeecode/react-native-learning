import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  name: string;
  setName: (name: string) => void;
};

const InputText = ({ name, setName }: Props) => {
  //   const [name, setName] = useState('');
  return (
    <View style={Style.body}>
      <Text style={Style.Heading}>Handle Input Text</Text>
      {/* <Text style={Style.Heading}>Name is:{name}</Text> */}
      <TextInput
        style={Style.input}
        value={name}
        placeholder="enter your name"
        onChangeText={text => setName(text)}
      />

      {/* <TouchableOpacity style={Style.Restbtn} onPress={() => setName('')}>
        <Text style={Style.Resttxt}>Reset Input</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const Style = StyleSheet.create({
  body: {
    borderWidth: 2,
    borderColor: 'white',
    width: 300,
    height: 200,
    margin: 30,
    //  justifyContent:'center',
    alignItems: 'center',
  },
  Heading: {
    color: 'Black',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  input: {
    color: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 50,
    margin: 10,
  },
  Restbtn: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  Resttxt: {
    color: 'grey',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default InputText;
