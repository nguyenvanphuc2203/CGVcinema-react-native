import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';
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
  StyleSheet,
  RefreshControl
} from 'react-native';
import styles from '../stylesheets';
import Movies from './tab-film';

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
  /**
   *  handle refesh screen 
   */
  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(()=>{
      this.setState({refreshing: false});
    },1000)
  }
  render(){
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
              <View style={style.movies}>
                <Movies />
              </View>

              {/* <!-- Rạp Metiz - Chỉ đường --> */}
              <View style={style.maps}>
                <TouchableOpacity 
                onPress={()=>{  Actions.Maps() }} 
                style={style.maprow}
                >
                  <View style={style.maptext}>
                    <Text>Rạp Metiz - Chỉ đường</Text>
                  </View>
                  <View style={style.mapicon}>
                    <Icon name="ios-navigate-outline" size={22} color="red" />
                  </View>
                </TouchableOpacity>
              </View>

              {/* Tin NónG */}

              <View style={style.hot}>
                <View style={style.hotrow}>
                  <View style={style.hottext}>
                    <Text style={{fontWeight:'bold'}}>TIN NÓNG</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{  Actions.Promotion() }}>
                    <View style={style.hotall}>
                      <Text style={{fontWeight:'bold'}}> Tất cả >></Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/*Tin nóng khuyễn mãi */}

              <View style={style.promotion}>
                <TouchableOpacity style={style.promotionrow} onPress={()=> { Actions.NotificationDetail({title:'tin nóng',description:'hihi'}) }}>
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
                <View style={style.promotionrow}>
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
                <View style={style.promotionrow}>
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

              <View style={style.scroll}>
                <View style={style.scrollsection}>
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

const style = StyleSheet.create({
  movies:{
    height:viewportHeight*0.65
  },
  maps:{
    height:viewportHeight*0.07
  },
  maprow:{
    flex:1,
    flexDirection:'row',
    padding:10,
    backgroundColor:'#fff'
  },
  maptext:{
    flex:9,
    justifyContent:'center'
  },
  mapicon:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  hot:{
    height:viewportHeight*0.05,
    marginTop:6
  },
  hotrow:{
    flex:1,flexDirection:'row',
    padding:10,
    backgroundColor:'#fff'
  },
  hottext:{
    flex:7,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  hotall:{
    flex:3,
    padding:2,
    justifyContent:'center',
    alignItems:'flex-end',
    borderRadius:9,
    borderWidth:1,
    borderColor:'#333'
  },
  promotion:{ height:viewportHeight*0.4 },
  promotionrow:{flex:1,flexDirection:'row',padding:2,backgroundColor:'#fff'},
  scroll:{height:viewportHeight*0.2,marginTop:6},
  scrollsection:{flex:1,flexDirection:'column',padding:5,justifyContent:'center',alignItems:'center'}
})

export default connect(state => state)(Homeview)