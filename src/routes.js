import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Demo from './Views/Demo';
import Login from './Views/Login';

function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Demo" component={Demo} options={{ headerShown: false }} />
        <Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
