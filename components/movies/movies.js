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
  FlatList
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import GridView from 'react-native-super-grid';

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
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
      <GridView
        itemDimension={120}
        items={this.state.Showing}
        style={styles.gridView}
        renderItem={item => (
          <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Item',{ name:item.name,description:item.description})}}>
            <View style={{flex:1,flexDirection:"column",
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#292a2b'}}>
              <View>
                <Image
                style={{width:120, height:200,flex: 3/4,resizeMode: 'contain'}}
                source={{uri:item.thumbnail}}
                />
              </View>
              <View style={{alignItems:'center',flex: 1/4,marginTop:-25}}>
                <Text style={{color:'#fff'}}>{item.name}</Text>
                <Text style={{color:'#fff'}}>{item.description}</Text>
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
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
      <GridView
        itemDimension={120}
        items={this.state.Showing}
        style={styles.gridView}
        renderItem={item => (
          <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Item',{ name:item.name,description:item.description})}}>
            <View style={{flex:1,flexDirection:"column",
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#292a2b'}}>
              <View >
                <Image
                style={{width:120, height:200,flex: 3/4,resizeMode: 'contain'}}
                source={{uri:item.thumbnail}}
                />
              </View>
              <View style={{alignItems:'center',flex: 1/4,marginTop:-25}}>
                <Text style={{color:'#fff'}}>{item.name}</Text>
                <Text style={{color:'#fff'}}>{item.description}</Text>
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
