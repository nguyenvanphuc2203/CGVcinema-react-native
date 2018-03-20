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
},
{
  transitionConfig: () => ({
      screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;

          const translateX = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [layout.initWidth, 0, 0]
          });

          const opacity = position.interpolate({
              inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
              outputRange: [0, 1, 1, 0.3, 0]
          });

          return { opacity, transform: [{ translateX }] }
      }
  })
});
