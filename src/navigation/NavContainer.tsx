import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '../constants';
import Splash from '../screens/auth/Splash';
import Onboard from '../screens/auth/Onboard';

import AuthNavigator from './AuthNavigator';
import Tabnavigator from './Tabnavigator';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={routes.HOME}>
        <Stack.Screen options={{ headerShown: false }} name={routes.SPLASH} component={Splash}/>
        <Stack.Screen options={{ headerShown: false }} name={routes.ONBOARD} component={Onboard}/>
        <Stack.Screen options={{ headerShown: false }} name={routes.LOGIN} component={AuthNavigator}/>
        <Stack.Screen options={{ headerShown: false }} name={routes.HOME} component={Tabnavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;