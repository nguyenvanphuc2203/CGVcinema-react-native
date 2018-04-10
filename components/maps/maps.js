import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/Ionicons';
import MapView,{ Marker,Callout, AnimatedRegion, Animated } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 16.036818, longitude: 109.224299};
const destination = {latitude: 16.036818, longitude: 108.224299};
const GOOGLE_MAPS_APIKEY = 'AIzaSyC6LKMM4OOR9TTHJbr81J1k4NnpGrddJig';

export default class Maps extends Component{
    constructor(props){
        super(props);
        this.state = {
            initialPosition: {
            latitude:16.036818, 
            longitude:108.224299,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
            },
            coordinate:{
            latitude: 0,
            longitude: 0,
            },
            gpsPosition:{
                latitude:0, 
                longitude:0,
            },
            direction:false
        }
    }
    getGPS(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                var gpsPosition = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                };
                var coordinate = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
                    this.setState({ gpsPosition:gpsPosition })
                    this.setState({ coordinate:coordinate })
                },
            (error) => {
                alert(error.message)
            },
            {enableHighAccuracy: false, timeout: 15000, maximumAge: 3600000}
        )
        
    }
    getDirection(){
        this.setState({direction:true})
    }
    static navigationOptions = () => ({
        header: null,
    })
    render(){
        let currentposition;
        let direction;
        if ( this.state.gpsPosition.latitude !== 0 ){
            currentposition = (
                <Marker draggable
                coordinate={this.state.gpsPosition}
                title='đây là vị trí của bạn'
                description='clicked'
                onDragEnd={(e) => this.setState({ coordinate: e.nativeEvent.coordinate })}
                >
                </Marker>
            )
        }
        if ( this.state.direction ){
            direction = (
                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                />
            )
        }
        return (
        <View style={styles.view_main}>
            <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'}}>
            <TouchableOpacity onPress={()=>{ Actions.pop() }} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
                <Icon name="ios-arrow-round-back" size={40} color="red" />
            </TouchableOpacity>
            <View style={{flex:7,justifyContent:'center'}}> 
                <Text> Rạp Metiz</Text>
            </View>
            <View style={{flex:2,justifyContent:'center'}}> 
            </View>
            </View>
        
            <View style={{flex:12/13,backgroundColor:'#e9ebee',justifyContent:'center'}}>
                <View style={{flex:1}}>
                <MapView
                    style={stylesmaps.map}
                    region={this.state.initialPosition}
                    >
                    
                    <Marker draggable
                        coordinate={this.state.initialPosition}
                        image={{uri:'https://i.imgur.com/9ehbSrg.png',width:40,height:40}}
                        title='Đây là vị trí Metiz cinema'
                        description='clicked'
                        onDragEnd={(e) => this.setState({ coordinate: e.nativeEvent.coordinate })}
                    >
                    </Marker>

                    { currentposition }
                    { direction }

                </MapView>
                <View  style={{position:'absolute',bottom:20,right:20}}>
                    <TouchableOpacity style={{backgroundColor:'#fff',margin:4,padding:3,borderRadius:25}} onPress={this.getGPS.bind(this)}>
                        <Image source={require('../images/location.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#fff',margin:4,padding:3,borderRadius:25}} onPress={this.getDirection.bind(this)}>
                        <Image source={require('../images/direction.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </View>
        );
    }
}

const stylesmaps = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    position:'relative'
  },
  map: {
    flex:1,
    ...StyleSheet.absoluteFillObject,
  },
});