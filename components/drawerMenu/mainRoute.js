import React from 'react';
import { StackNavigator } from 'react-navigation';
import Homeview from './home';
import Item from '../movies/item';
import Booking from '../booking/booking';
import BannerDetail from '../notification/detail';

export const MainRoute = StackNavigator({
  Home: { screen: Homeview },
  Item: { screen: Item },
  Booking : { screen: Booking },
  BannerDetail :{ screen : BannerDetail }

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
