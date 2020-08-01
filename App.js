import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Home'
import {createStackNavigator} from '@react-navigation/stack'



export default function App(){
  const Stack= createStackNavigator();
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Séries Ltd" component={HomeScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}