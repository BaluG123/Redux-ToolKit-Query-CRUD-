import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Users from '../screens/Users';
import Adduser from '../screens/AddUser';
import UpdateUser from '../screens/UpdateUser';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="users" component={Users} />
        <Stack.Screen name="addusers" component={Adduser} />
        <Stack.Screen name="updateusers" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
