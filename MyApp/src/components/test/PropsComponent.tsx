import React from 'react'
import { Text,  View } from 'react-native'

type Props= {
name:string,
age:number
};

const PropsComponent = (props:Props) => {
  return (
<View style={{marginBottom:100}}>
    {/* */}
    <Text style={{color:'red'}}>
        Name:{props.name}
    </Text>
    <Text style={{color:'white'}}>Age:{props.age}</Text>
</View>
  )
}

export default PropsComponent