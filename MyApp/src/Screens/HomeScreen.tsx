import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import FirstComopent from '../components/test/FirstComopent';
import InputText from '../components/test/InputText';
//ya check krte hai kitne screen hai tumahr page ma
type RootStackParamList = {
  Home: undefined;
  Profile: {
    name: string;
    age: number;
  };
};
//yaha bata rahe hai ya screen home ki hai iska and RootStackParamList hisab hoge
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};
const HomeScreen = ({ navigation }: Props) => {
  const [name, setName] = useState('');
  // const name = 'mustang';
  const age = 28;
  return (
    <ImageBackground
      source={require('../../Assests/Images/car.jpg')}
      style={Style.img}
      resizeMode="cover"
    >
      <View style={Style.container}>
        <Text style={{ fontSize: 20, color: '#cef715' }}>hello Duniya</Text>
        <FirstComopent />
        <InputText name={name} setName={setName} />
        <Text style={Style.heading}>hii i am a home screen</Text>

        <TouchableOpacity
          style={Style.btn}
          onPress={() =>
            // navigation.navigate('Profile', { name: 'vikas', age: 24 })
            navigation.navigate('Profile', { name, age })
          }
        >
          <Text style={Style.btnName}>Visit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.mainButton}
          onPress={() => Alert.alert('hii sucessfully submit')}
        >
          <Text style={Style.ButtonText}>Press me</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const Style = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 30,
  },
  btn: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 10,
  },
  btnName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  img: {
    flex: 1,
  },
  mainButton: {
    // marginTop:200,
    marginBottom: 100,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default HomeScreen;
