/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/Navigtor/StackNavigator';
import TabNavigator from './src/Navigtor/TabNavigator';

function App() {
  return (
    <NavigationContainer>
      <View style={style.container}>
        <View style={{ flex: 1, justifyContent: 'center', top: 10 }}>
          {/* <StackNavigator /> */}
          <TabNavigator />
        </View>

        {/* <Button title="press me" color={'black'} onPress={ () => alert('hii sucessfully submit')}/> */}
      </View>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    top: 10,
    flex: 1,
    alignItems: 'center',
    gap: 10,

    flexDirection: 'row',
    backgroundColor: 'transparent',
  },

  img: {
    flex: 1,
    // width:'100%',
    //  height:'100%',
    //  resizeMode:'cover'
  },
});

export default App;
