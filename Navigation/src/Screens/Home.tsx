import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
('@react-navigator/native-stack');

import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home screen</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 5,
        }}
        // onPress={() =>
        //   navigation.navigate('Deatils', {
        //     productId: '123',
        //   })
        // }

        //another way to navigate
        // onPress={()=> navigation.navigate('Deatils')}

        //another way to navigate
        onPress={() =>
          navigation.push('Deatils', {
            productId: '123',
          })
        }
      >
        <Text style={{ color: 'white' }}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 14,
    color: 'gray',
  },
});
export default Home;
