import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Evaluation from './pages/Evaluation/index';
import Teste from './pages/Test/index';


const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E84A5B" />

      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Evaluation"
          drawerStyle={{
            backgroundColor: '#f9f9f9',
            width: 300,
          }}
        >
          <Drawer.Screen 
            name="Evaluation" 
            component={Evaluation}
          />
          <Drawer.Screen name="Teste" component={Teste} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}