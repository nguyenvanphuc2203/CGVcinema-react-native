import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MapView,{ Marker,Callout, AnimatedRegion, Animated } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1
  },
  map: {
    flex:1,
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Gps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialPosition: {
        latitude: 16.0472484,
        longitude: 108.1716005,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      coordinate:{
        latitude: 0,
        longitude: 0,
      }
    }
  }
  getGPS(){
      navigator.geolocation.getCurrentPosition(
         (position) => {
            var initialPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            };
            var coordinate = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }
            this.setState({ initialPosition:initialPosition })
            this.setState({ coordinate:coordinate })
         },
         (error) => {
          alert(error.message)
         },
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 3600000 }

      )
   }
  render() {
    return (
      <View style ={styles.container}>
        <View style={{flex:3/4,position:'relative'}}>
          <MapView
            style={styles.map}
            region={this.state.initialPosition}
          >
            <Marker draggable
              coordinate={this.state.coordinate}
              image={require('../images/p.png')}
              title='đây là vị trí của bạn'
              description='clicked'
              onDragEnd={(e) => this.setState({ coordinate: e.nativeEvent.coordinate })}
            >
            </Marker>
          </MapView>
        </View>
        <View style={{flex:1/4,justifyContent:'center',alignItems:'center'}}>
          <Button onPress={this.getGPS.bind(this)} title="vị trí của tôi" />
          <Text> latitude: {this.state.initialPosition.latitude}</Text>
          <Text> longitude: {this.state.initialPosition.longitude}</Text>
        </View>
      </View>
    );
  }
}
