import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Demo from './Views/Demo'

function Routes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Demo' component={Demo} options={{  headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;