import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './main.navigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
