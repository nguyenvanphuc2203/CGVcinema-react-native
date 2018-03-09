import React, { Component } from 'react';
import styles from '../stylesheets';
import { connect } from 'react-redux';
import { postStatus } from '../store/actions'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import GridView from 'react-native-super-grid';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

class Showing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Showing : [
        { 'name' :'ĐẢO ĐỊA NGỤC', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/qd368xE.jpg'},
        { 'name' :'ANABELLA', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/pPx3aWx.jpg'},
        { 'name' :'JUMANJI', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/tezoQl5.jpg'},
        { 'name' :'HOANG ĐẢO', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/tezoQl5.jpg'},
        { 'name' :'TỬ TÙ', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/qd368xE.jpg'},
        { 'name' :'TỬ TÙ', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/tezoQl5.jpg'},
        { 'name' :'HOANG ĐẢO', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/tezoQl5.jpg'},
        { 'name' :'TỬ TÙ', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/pPx3aWx.jpg'},
        { 'name' :'TỬ TÙ', 'description':'bộ phim được khởi chiếu trên toàn quốc','thumbnail':'https://i.imgur.com/tezoQl5.jpg'}
      ],
    }
  }
  static navigationOptions = ({navigation}) => ({
    header:null
  })
  componentWillMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=e8631f0c8f0363c450d47ace4043eca5')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({Showing: responseJson.results});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
      <GridView
        itemDimension={viewportWidth/4}
        items={this.state.Showing}
        style={styles.gridView}
        renderItem={item => (
          <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Item',{ id:item.id })}}>
            <View style={{flex:1,flexDirection:"column",
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#292a2b'}}>
              <View>
                <Image
                style={{width:viewportWidth/3, height:(viewportWidth/3)*1.5,flex: 1,resizeMode: 'contain'}}
                source={{uri:'https://image.tmdb.org/t/p/w500'+item.poster_path}}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
    );
  }
}

class Comming extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Showing : [],
    }
  }
  static navigationOptions = ({navigation}) => ({
    header:null
  })
  componentWillMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=e8631f0c8f0363c450d47ace4043eca5')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({Showing: responseJson.results});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
      <GridView
        itemDimension={viewportWidth/4}
        items={this.state.Showing}
        style={styles.gridView}
        renderItem={item => (
          <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Item',{ id:item.id })}}>
            <View style={{flex:1,flexDirection:"column",
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#292a2b'}}>
              <View>
                <Image
                style={{width:viewportWidth/3, height:(viewportWidth/3)*1.5,flex: 1,resizeMode: 'contain'}}
                source={{uri:'https://image.tmdb.org/t/p/w500'+item.poster_path}}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      </View>
    );
  }
}




export default TabNavigator({
  'Đang Chiếu': { screen: Showing },
  'Sắp Chiếu': { screen: Comming },
},
{
  tabBarOptions: {
    activeTintColor: '#fff',
    activeTabStyle: {
      color:"#fff",
      backgroundColor: '#333',
    },
    style: {
      backgroundColor: 'black',
    },
  }
});
