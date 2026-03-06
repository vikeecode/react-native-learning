// these are bottom tab naviagtion

import React from 'react';
import { Text, View } from 'react-native';

const TabNavigationComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffb',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, color: 'black', fontStyle: 'italic' }}>
        I am login
      </Text>
    </View>
  );
};

export default TabNavigationComponent;
