import React from 'react';
import { StackNavigator } from 'react-navigation';
import Movies from './movies';
import Item from './item';

export const MoviesRoute = StackNavigator({
  Movies: { screen: Movies},
  Item: { screen: Item }
});
