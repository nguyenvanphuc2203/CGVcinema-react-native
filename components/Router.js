import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './login/login';
import Tabbar from './tabbar/tabbar';

export const HomeStack = StackNavigator({
  Login: { screen: Login },
  Tabbar : { screen: Tabbar }
});
