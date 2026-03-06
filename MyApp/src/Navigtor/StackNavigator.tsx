//This part is all about of header area for the naviagtion

import React from 'react';
import { Text, Button, TouchableOpacity, Alert } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import PeofileScreen from '../Screens/PeofileScreen';
import StackNavigationComponent from '../components/test/Navigation/StackNavigationComponent';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const btnAction = () => {
    Alert.alert('hii it  working');
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Homepage',
          headerTintColor: 'grey',
          headerStyle: {
            backgroundColor: '#FBF5DF',
          },

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={PeofileScreen}
        options={{
          title: 'Profile',
          headerTitle: () => (
            <TouchableOpacity
              onPress={btnAction}
              style={{
                backgroundColor: 'skyblue',
                width: 100,
                alignItems: 'center',
                borderWidth: 2,
                borderColor: 'white',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                }}
              >
                Left
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => <StackNavigationComponent />,
        }}
      />
    </Stack.Navigator>

    //  <Text>i am stack navigator</Text>
  );
};

export default StackNavigator;
