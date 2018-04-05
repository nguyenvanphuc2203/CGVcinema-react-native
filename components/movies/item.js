import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import Modal from "react-native-modal";
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
  TouchableOpacity,
  WebView,
  ScrollView
} from 'react-native';

class Item extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isModalVisible: false,
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: 'Chi tiết phim',
    headerStyle: {
      backgroundColor: '#333',
      zIndex:1000,
      height:50
    },
    headerTintColor: '#fff',
  })
  componentWillMount(){
    fetch('https://api.themoviedb.org/3/movie/'+this.props.navigation.state.params.id+'?api_key=e8631f0c8f0363c450d47ace4043eca5&append_to_response=videos')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data:responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color='#009688'
        size='large'
        style={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,alignItems: 'center',justifyContent: 'center'}}
      />
    );
  }
  render() {
    const { params } = this.props.navigation.state;
    var str = JSON.stringify(this.state.data.videos);
    var trailer_url = String(str).substr(87, 11);
    console.log(trailer_url)
    return (
        <View style={{flex:1,flexDirection:"column",backgroundColor:'black'}}>
          <View style={{flex:1/3,marginTop:5}}>
            <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:'https://image.tmdb.org/t/p/w500'+this.state.data.backdrop_path}}>
              <WebView
                renderLoading={this.ActivityIndicatorLoadingView}
                javaScriptEnabled={true}
                style={{justifyContent: 'center',alignItems: 'center'}}
                source={{ uri:'https://www.youtube.com/embed/'+trailer_url}} />
            </ImageBackground>
          </View>
          <View style={{flex:1.1/3,paddingTop:10,marginTop:5,backgroundColor:'#292a2b'}}>
            <View style={{flexDirection:"row"}}>
                <Image
                style={{width:100,height:200,flex: 1,resizeMode: 'contain'}}
                source={{uri:'https://image.tmdb.org/t/p/w500'+this.state.data.poster_path}}
                />
              <View style={{flex:1,paddingRight:20}}>
                <Text style={{color:'#fff'}}>{this.state.data.title}</Text>
                <Text style={{color:'#fff'}}>Thẻ : {this.state.data.tagline}</Text>
                <Text style={{color:'#fff'}}>Đánh giá : {this.state.data.vote_average} / {this.state.data.vote_count}</Text>
                <Text style={{color:'#fff'}}>Trạng thái : {this.state.data.status}</Text>
                <Text style={{color:'#fff'}}>Thời lượng : {this.state.data.runtime} Phút</Text>
                <Text style={{color:'#fff'}}>Ngày chiếu : {this.state.data.release_date}</Text>

              </View>
            </View>
          </View>
          <View style={{flex:0.9/3,backgroundColor:'#292a2b'}}>
              <Text numberOfLines={5}  style={{color:'#fff',padding:15}}>{this.state.data.overview}</Text>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1,padding:5}}>
                <Button color="#d4466b" onPress={()=>{this.setState({isModalVisible: !this.state.isModalVisible})}} title="Xem trailer"/>
              </View>
              <View style={{flex:1,padding:5}}>
                <Button onPress={()=>{this.props.navigation.navigate('Booking')}} color="#362f66" title="Mua Vé"/>
              </View>
            </View>
          </View>
          {/* modal trailer */}
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 0.5,justifyContent:'center' }}>
              <WebView style={{flex:1}} javaScriptEnabled={true} source={{ uri:'https://www.youtube.com/embed/'+trailer_url}}/>
              <Button color="#841584" onPress={()=>{this.setState({isModalVisible: !this.state.isModalVisible})}} title="Hủy"/>
            </View>
          </Modal>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps)(Item)