import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabNavigationComponent from '../components/test/Navigation/TabLoginNavigationComponent';
import TabHomeNavigationCompoent from '../components/test/Navigation/TabAboutNavigationCompoent';
//this import for top tab bar
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//this for top tab
const Tab = createMaterialTopTabNavigator();

//this is for bottom
// const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {/* <TabNavigationComponent />

      <TabHomeNavigationCompoent /> */}
      <Tab.Screen name="About" component={TabHomeNavigationCompoent} />
      <Tab.Screen name="Login" component={TabNavigationComponent} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
