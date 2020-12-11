import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Evaluation from './pages/Evaluation/index';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#424242' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}