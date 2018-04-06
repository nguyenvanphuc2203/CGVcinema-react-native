import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import { connect }  from 'react-redux';
import { Actions } from 'react-native-router-flux'; // New code
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  RefreshControl
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Movies from './tab-film';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
/* get width, height */
class Homeview extends Component{
  constructor(props){
    super(props);
    this.state = {
      refreshing: false
    }
  }
  static navigationOptions = () => ({
      header:null
  })
  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(()=>{
      this.setState({refreshing: false});
    },1000)
  }
  render(){
    let { dispatch } = this.props;
    return (
          <View style={styles.content_view}>
            {/* <!-- image slider --> */}
            <ScrollView 
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                />
              }
              ref='_scrollView' 
              style={{backgroundColor:'#eaebee'}}
            >
              <View style={{height:viewportHeight*0.25}}>
                <Swiper
                  loadMinimal={true}
                  loadMinimalSize={2}
                  loadMinimalLoader={<ActivityIndicator size="large" color="#00ff00" />}
                  style={styles.wrapper}
                  autoplay={true}
                  showsButtons={true}>
                  <View style={styles.slide1}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film1.jpg')}
                    />
                  </View>
                  <View style={styles.slide2}>
                    <Image
                      style={styles.image_swiper}
                      source={require('../images/banner_film2.jpg')}
                    />
                  </View>
                  <View style={styles.slide3}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film3.jpg')}
                    />
                  </View>
                </Swiper>
              </View>
              {/* <!-- Tab Movies --> */}
              <View style={{height:viewportHeight*0.68}}>
                <Movies />
              </View>

              {/* <!-- Rạp Metiz - Chỉ đường --> */}
              <View style={{height:viewportHeight*0.07}}>
                <TouchableOpacity onPress={()=>{  Actions.Maps() }} style={{flex:1,flexDirection:'row',padding:6,backgroundColor:'#fff'}}>
                  <View style={{flex:4,justifyContent:'center'}}>
                    <Text>Rạp Metiz - Chỉ đường</Text>
                  </View>
                  <View style={{flex:5}}></View>
                  <View style={{flex:1,justifyContent:'center'}}>
                    <Icon name="ios-navigate-outline" size={22} color="red" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Tin NónG */}

              <View style={{height:viewportHeight*0.05,marginTop:6}}>
                <View style={{flex:1,flexDirection:'row',padding:5,backgroundColor:'#fff'}}>
                  <View style={{flex:4}}>
                    <Text style={{fontWeight:'bold'}}>TIN NÓNG</Text>
                  </View>
                  <View style={{flex:5}}></View>
                  <TouchableOpacity onPress={()=>{  Actions.Promotion() }}>
                    <View style={{flex:2,padding:2,borderRadius:9,borderWidth:1,borderColor:'#333'}}>
                      <Text style={{fontWeight:'bold'}}> Tất cả >></Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/*Tin nóng khuyễn mãi */}

              <View style={{height:viewportHeight*0.4}}>
                <TouchableOpacity style={{flex:1,flexDirection:'row',padding:2,backgroundColor:'#fff'}} onPress={()=> { Actions.NotificationDetail({title:'tin nóng',description:'hihi'}) }}>
                  <View style={{flex:6}}>
                      <Image
                        style={{width:'100%',height:'100%'}}
                        source={require('../images/banner_film1.jpg')}
                      />
                    </View>
                    <View style={{flex:4,padding:3}}>
                      <Text style={{fontWeight:'bold'}}> thưởng thức bộ phim tháng năm rực rỡ chỉ với 45.000đ >></Text>
                    </View>
                </TouchableOpacity>
                <View style={{flex:1,flexDirection:'row',padding:2,backgroundColor:'#fff'}}>
                  <View style={{flex:6}}>
                    <Image
                      style={{width:'100%',height:'100%'}}
                      source={require('../images/banner_film2.jpg')}
                    />
                  </View>
                  <View style={{flex:4,padding:3}}>
                    <Text style={{fontWeight:'bold'}}> Thứ 2 may mắn tháng năm rực rỡ chỉ với 45.000đ</Text>
                  </View>
                </View>
                <View style={{flex:1,flexDirection:'row',padding:2,backgroundColor:'#fff'}}>
                  <View style={{flex:6}}>
                    <Image
                      style={{width:'100%',height:'100%'}}
                      source={require('../images/banner_film3.jpg')}
                    />
                  </View>
                  <View style={{flex:4,padding:3}}>
                    <Text style={{fontWeight:'bold'}}> Chào Mừng 30-4 tháng năm rực rỡ chỉ với 45.000đ >></Text>
                  </View>
                </View>
              </View>
              
              {/* scroll to top  */}

              <View style={{height:viewportHeight*0.2,marginTop:6}}>
                <View style={{flex:1,flexDirection:'column',padding:5,justifyContent:'center',alignItems:'center'}}>
                  <Image
                    style={{width:110,height:45}}
                    source={{uri:'https://i.imgur.com/bO9lG5j.png'}}
                  />
                  <TouchableOpacity style={{marginTop:5}} onPress={() => { this.refs._scrollView.scrollTo(0); }}>
                    <Icon name="ios-arrow-dropup-circle" size={50} color="#333" />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
        </View>
    );
  }
}


export default connect(state => state)(Homeview)