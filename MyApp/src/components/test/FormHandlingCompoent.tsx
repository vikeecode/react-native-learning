import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const FormHandlingCompoent = () => {
const [name,setNames] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [saved,setSaved] = useState(false)


const reset = () =>{
    setNames(''),
     setSaved(false)   ,
     setPassword(''),
        setEmail('')
     
    
}
  return (
    <View>
        <Text>
            Form Hnadling
        </Text>
        <TextInput  style={Style.InputBox} placeholder='enter Your Name'
        value={name} onChangeText={(Text)=> setNames(Text)} />
         <TextInput  style={Style.InputBox} placeholder='enter Your email'
        value={email} onChangeText={(Text)=> setEmail(Text)} />
         <TextInput secureTextEntry={true}  style={Style.InputBox} placeholder='enter Your passowrd'
        value={password} onChangeText={(Text)=> setPassword(Text)} />

        <TouchableOpacity style={Style.showbtn} onPress={()=>{
setSaved(true)
        }}>
            <Text>
                ShowData
            </Text>
        </TouchableOpacity>
           <TouchableOpacity style={Style. showreset} onPress={reset}>
            <Text>
                Reset
            </Text>
        </TouchableOpacity>
        <View>
            {
                saved? <View>
<Text style={Style.dataShow}>
    username is :{name}
</Text>
<Text style={Style.dataShow}>
    username is :{email}
</Text >
<Text style={Style.dataShow}>
    username is :{password}
</Text>

                    </View>:null
            }
        </View>
    </View>
  )
}


const Style = StyleSheet.create(
    {
        InputBox:{
borderWidth:2,
borderColor:'white',
borderRadius:50,
color:'white'
        },
        showbtn:{
            borderWidth:2,
            backgroundColor:'blue',

        },
         showreset:{
            borderWidth:2,
            backgroundColor:'red',
            
        },
        dataShow:{
color:'white',

        }
    }
)

export default FormHandlingCompoent