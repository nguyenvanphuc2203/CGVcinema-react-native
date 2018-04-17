import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'; // New code
import Carousel from 'react-native-snap-carousel';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  Dimensions,
  StyleSheet
} from 'react-native';

/* get width, height screen */
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Comming extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        entries: [
          {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
          {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'},
          {title:'loading...',release_date:'loading...',poster_path:'/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'}
        ],
      }
    }
    componentWillMount(){
      fetch('http://api.themoviedb.org/3/movie/upcoming?api_key=e8631f0c8f0363c450d47ace4043eca5')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({entries: responseJson.results});
        })
        .catch((error) => {
          console.error(error);
        });
    }

    /**
     * render item main slide 
     */
    _renderItem ({item, index }) {
          var poster = 'https://image.tmdb.org/t/p/w500'+item.poster_path;
          return (
            <TouchableOpacity onPress={()=>{ Actions.DetailFilm({id:item.id}) }}>
              <View style={style.item}>
                  <Image source={{uri:poster}} style={style.poster} />
                  <Text  style={style.title}>{ item.title }</Text>
                  <Text style={style.description}>2h30p - Ngay {item.release_date}</Text>
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
              firstItem={0}
              loop={true}
              autoplay={true}
              autoplayDelay={1000}
            />
        </View>
      );
    }
  }
const style = StyleSheet.create({
  item:{
    width:viewportWidth*0.575,
    backgroundColor:'#333',
    marginTop:13,
    marginBottom:13
  },
  poster:{
    width:viewportWidth*0.575,
    height:viewportHeight*0.5
  },
  title:{
    color:'#fff',
    padding:2
  },
  description:{
    color:'#fff',
    padding:2
  }
})

const mapStateToProps = (state) => {
  return {
    nav :state.nav
  }
}

export default connect(mapStateToProps)(Comming)