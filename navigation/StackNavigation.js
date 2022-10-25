import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../screens/Profile';
import BottomTabNavigator from "./DrawerNavigator"

const Stack = createStackNavigator();

const StackNavigator =()=>{
    <Stack.Navigator
    initialRouteName="Home"
    screenoptions={{headerShown:false}}
    >
        <Stack.Screen name="Home" component={BottomTabNavigator}/>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
}
    
export default StackNavigator