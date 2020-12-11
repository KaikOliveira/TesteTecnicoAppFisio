import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Evaluation from './pages/Evaluation/index';
import Teste from './pages/Test/index';


const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Evaluation">
        <Drawer.Screen name="Evaluation" component={Evaluation} />
        <Drawer.Screen name="Teste" component={Teste} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}