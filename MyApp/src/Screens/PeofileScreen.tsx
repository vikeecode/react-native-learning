import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import StateCompoent from '../components/test/StateCompoent';
import PropsComponent from '../components/test/PropsComponent';
import FormHandlingCompoent from '../components/test/FormHandlingCompoent';

const PeofileScreen = (props: any) => {
  //   const [name, setName] = useState('');
  console.warn(props.route.params);
  //you can use like destrctring
  const { name, age } = props.route.params;
  return (
    <View style={Style.container}>
      {/* <Text style={Style.heading}>hii i am profile</Text>  */}

      {/* <StateCompoent /> */}

      {/* <Text style={Style.heading}>
        Props in react-native
    </Text>
    <TouchableOpacity  style = {Style.Button} onPress={()=> setName('Mustang GT')}>
        <Text style={Style.BtnText}>
            update a props
        </Text>
    </TouchableOpacity>  */}
      <FormHandlingCompoent />

      {/* <Text style={{ color: 'white' }}>Name is :{props.route.params.name}</Text>
      <Text style={{ color: 'white' }}>Name is :{props.route.params.age}</Text> */}

      {/* ase likhe skte  */}
      <Text style={{ color: 'white' }}>Name is :{name}</Text>
      <Text style={{ color: 'white' }}>Name is :{age}</Text>

      {/* if you wan to add a 2 class in single the how to add */}
      {/* <Text  style={[Style.text,Style.text1,{fontSize:10} ]}>hii</Text>

 <PropsComponent name={name}  age={23} /> */}
    </View>
  );
};
const Style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    // justifyContent:'center',
    alignItems: 'center',
    marginTop: -10,
  },
  heading: {
    fontSize: 15,
    color: 'white',
  },
  Button: {
    backgroundColor: 'Tranparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
    color: '#FFDD45',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'light',
    padding: 10,
  },
  text: {
    color: 'beige',
    fontSize: 50,
    borderWidth: 2,
    marginTop: 5,
  },
  text1: {
    backgroundColor: 'red',
    fontSize: 30,
    borderColor: 'white',
    padding: 10,
  },
  //  Res:{
  //     marginTop:10,
  //     color:'green',
  //     borderWidth:1,
  //     borderColor:'red',
  //     borderRadius:50,
  //     width:300,
  //    padding:10
  // }
});

export default PeofileScreen;
