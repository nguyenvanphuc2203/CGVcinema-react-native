import React, { Component } from 'react';
import { HomeStack } from './components/Router';
import { Provider,connect } from 'react-redux';
import store from './components/store/store';
import { addNavigationHelpers } from 'react-navigation';
import NavigationRoute from './components/Router';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

const AppNav = ({ dispatch,nav }) => (
  <NavigationRoute
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
)
const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}
const AppWithNavigation = connect(mapStateToProps)(AppNav)
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
          <AppWithNavigation/>
      </Provider>
    );
  }
}
