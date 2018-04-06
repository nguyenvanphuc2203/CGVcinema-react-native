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

export default class BookHistory extends Component{
  constructor(props){
    super(props);
    this.state = {
      bookhistory: [
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'},
        {'thumb':'https://i.imgur.com/ik7IrFf.jpg','title':'Mua vé xem phim','description':'45.000đ'}
      ]
    }
  }
  static navigationOptions = () => ({
    header: null,
  })

  render(){
    return (
      <View style={styles.view_main}>
        <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'}}>
          <TouchableOpacity onPress={()=>{ Actions.pop()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={{flex:7,justifyContent:'center'}}> 
            <Text> Transaction history</Text>
          </View>
          <View style={{flex:2,justifyContent:'center'}}> 
          </View>
        </View>
      
        <View style={{flex:12/13,backgroundColor:'#e9ebee',justifyContent:'center'}}>
        <FlatList
          data={this.state.bookhistory}
          renderItem={({item}) =>
            <View style={{flexDirection:"row",flex:1/10,margin:3,height:100,backgroundColor:'#fff'}}>
              <View style={{flex:3/10,justifyContent:'center'}}>
                <Image source={{uri:item.thumb}} style={{width:90,height:90}} />
              </View>
              <View style={{flex:6/10,justifyContent:'center'}}>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
              <View style={{flex:1/10,justifyContent:'center'}}>
                <Text style={{fontSize:20,color:'#ee803b'}}>+50</Text>
              </View>
            </View>
          }
          />
        </View>
      </View>
    );
  }
}
