import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './login/login';
import Tabbar from './tabbar/tabbar';
import Wellcome from './wellcome/wellcome';
import BookHistory from './menuItem/history';

export const HomeStack = StackNavigator({
  Wellcome:{ screen: Wellcome },
  Tabbar : { screen: Tabbar },
  Login: { screen: Login },
  BookHistory: { screen: BookHistory }
});
