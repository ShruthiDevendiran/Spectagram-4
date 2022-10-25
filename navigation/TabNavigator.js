import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue, RFvalue} from 'react-native-responsive-fontsize';

import CreatePost from '../screens/CreatePost';
import Feed from '../screens/Feed';

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
        return(
          <Tab.Navigator 
          labeled = {false}
          barStyle={styles.bar}
          screenOptions ={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
   
               if(route.name === "Feed"){
                iconName = focused ? 'book':'book-outline'
              }
              else if(route.name === "CreatePost"){
                iconName = focused ? 'create': 'create-outline'
             }

              return <Ionicons 
              name={iconName} 
              size={RFValue(20)}
              color={color}
              style={styles.icon}
              />
            }
          })}
          tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'white',
          }}
          >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Create Post" component={CreatePost} />
            
          </Tab.Navigator>
        )
    }

    const styles = StyleSheet.create({
      bar:{
        color:'black',
        width:'100%',
        height:'10%',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        position:"absolute",
        overflow:"hidden",
      },
      icon:{
        width:RFValue(50),
        height:RFValue(50),
      }
 
    })

export default BottomTabNavigator;