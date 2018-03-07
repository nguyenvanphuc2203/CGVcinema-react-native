import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { TabNavigator } from 'react-navigation';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */

class Showing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [],
    }
  }
  componentWillMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=e8631f0c8f0363c450d47ace4043eca5')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({entries: responseJson.results});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _renderItem ({item, index }) {
        return (
            <TouchableOpacity onPress={()=>{ this.props.screenProps.navigation.navigate('Item',{id:item.id}) }}>
            <View style={{backgroundColor:'#333',marginTop:13,marginBottom:13}}>
                <Image source={{uri:'https://image.tmdb.org/t/p/w500'+item.poster_path}} style={{width:viewportWidth*0.575,height:viewportHeight*0.5}} />
                <Text style={{color:'#fff',padding:2}}>{ item.title }</Text>
                <Text style={{color:'#fff',padding:2}}>2h30p - Ngay {item.release_date}</Text>
            </View>
          </TouchableOpacity>
        );
    }
  render() {
    return (
      <View style={{backgroundColor:'#333'}}>
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth*0.575}
            firstItem={1}
            loop={true}
            autoplay={true}
            autoplayDelay={1000}
          />
      </View>
    );
  }

}

class Comming extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entries: [
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
  _renderItem ({item, index}) {
        return (
            <TouchableOpacity onPress={()=>{this.props.screenProps.navigation.navigate('Item',{ name:item.name,description:item.description})}}>
            <View style={{backgroundColor:'#333',marginTop:13,marginBottom:13}}>
                <Image source={{uri:item.thumbnail}} style={{width:viewportWidth*0.575,height:viewportHeight*0.5}} />
                <Text style={{color:'#fff',padding:2}}>{ item.name }</Text>
                <Text style={{color:'#fff'}}>2h30p - Ngay 01/02/2018</Text>
            </View>
          </TouchableOpacity>
        );
    }
  render() {
    return (
      <View style={{backgroundColor:'#333'}}>
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem.bind(this)}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth*0.575}
            firstItem={1}
            loop={true}
            autoplay={true}
            autoplayDelay={1000}
          />
      </View>
    );
  }
}


export default TabNavigator({
  'Đang Chiếu': { screen: props => {
    return <Showing screenProps={{navigation:props.screenProps.navigation }}/>}
   },
  'Sắp Chiếu': { screen: props => {
    return <Comming screenProps={{navigation:props.screenProps.navigation }}/>}
   },
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
