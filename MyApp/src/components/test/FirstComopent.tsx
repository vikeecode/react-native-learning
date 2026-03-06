import React from 'react'
import {Text,View,Button,StyleSheet, TouchableOpacity,Alert} from 'react-native';

const FirstComopent = () => {
  return (
    <View style={Style.container}>
        <Text style={ Style.textColor}>
            hii i am first component
        </Text>
        {/* <Button title='If you like then Press me '  color={'green'} onPress={() => alert('congrates! you are lucy to see me ')}/>
         */}

         <TouchableOpacity style = {Style.button} onPress= { () => Alert.alert('congrates! you are lucky to see me')}>
          <Text style={Style.buttonText}>
            If you like then Press me 
          </Text>
         </TouchableOpacity>
    </View>
  )
}

const Style = StyleSheet.create( {
     container:{
      color:'black',
      fontSize:10,
      marginTop:10,
    backgroundColor: 'transparent',
     borderWidth:10,
      borderBlockColor:'red'
     },
     textColor:{
        color:'black',
        fontSize:30,
      padding:20
     },
     button:{
     
      justifyContent:'center',
      alignItems: 'center',
      borderWidth:1,
       borderColor:'white',
       backgroundColor: 'blue',
      marginTop:10,
      width:200,
      borderRadius:50,
      padding:10
     },
     buttonText:{
      color:'white',
      fontSize:10,

      

     }
} )

export default FirstComopent