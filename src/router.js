import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LineChart, Grid } from 'react-native-svg-charts';

import Evaluation from './pages/Evaluation/index';
import Teste from './pages/Test/index';


function HomeScreen() {

  const data = [ 50,  -50];
  const data2 = [ -50 -50 ];

  return (
    <View style={{ flex: 1}}>

      <LineChart
        style={{ height: 150 }}
        data={ data}
        svg={{ stroke: 'rgb(134, 65, 244)' }}
        contentInset={{  top: 20, bottom: 20 }}
      >
        <Grid />

      </LineChart>
      
    </View>
  );
}

function NotificationsScreen() {

  return (
    <View>
        
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Evaluation">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Evaluation" component={Evaluation} />
        <Drawer.Screen name="Teste" component={Teste} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}