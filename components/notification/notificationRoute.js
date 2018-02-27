import React from 'react';
import { StackNavigator } from 'react-navigation';
import Notification from './notification';
import Detail from './detail';

export const NotificationRoute = StackNavigator({
  Notification : { screen: Notification},
  Detail : { screen: Detail }
});
