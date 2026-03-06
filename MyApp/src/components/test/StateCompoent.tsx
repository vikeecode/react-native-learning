import React , {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const StateCompoent = () => {
//hook useing in react - native
    const  [name, setName] = useState('this is car Profile')
const changeName = () => {
     setName('Mustang')
}

  return (
    <View style={Style.Container}>
   <Text style={Style.Heading}>Hii This is a secound Compoents for use state </Text>
   <TouchableOpacity  style = {Style.Button} onPress={()=> changeName()}>
    <Text style={Style.BtnText}>
         This is Name Change 
    </Text>
   </TouchableOpacity>
   <Text style={Style.Res}>This is {name} car Profile</Text>
    </View>

  )
}

const Style =StyleSheet.create(
    {
        Container:{
        backgroundColor: '#FBF5DF',
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        borderWidth:2,
        borderColor:'#f4ffb5',
        borderRadius:3,
        height:100,
        marginBottom:300
        },
        Heading:{
            color:'#C8E71A',
            fontSize:20,
            fontWeight:'bold'
        },
        Button:{
            backgroundColor:'Tranparent',
            borderWidth:2,
            borderColor:'white',
            borderRadius:50,
            justifyContent:'center',
            alignItems:'center'
        },
        BtnText:{
            color:'#FFDD45',
            fontSize:30,
           fontStyle: 'italic',
           fontWeight:'light',
           padding:10

        },
        Res:{
            marginTop:10,
            color:'green',
            borderWidth:1,
            borderColor:'red',
            borderRadius:50,
            width:300,
           padding:10
        }
    }
)

export default StateCompoent