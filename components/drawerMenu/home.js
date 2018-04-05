import React, { Component } from 'react';
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import Swiper from 'react-native-swiper';
import { connect }  from 'react-redux';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  ScrollView
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
  }
  static navigationOptions = () => ({
      header:null
  })
  render(){
    let { dispatch } = this.props;
    return (
          <View style={styles.content_view}>
            {/* <!-- image slider --> */}
            <ScrollView style={{backgroundColor:'#eaebee'}}>
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
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('BannerDetail',{title:'Ưu đãi 8-3',description:'giảm giá vé trong ngày 8-3'})}}>
                    <Image
                    style={styles.image_swiper}
                    source={require('../images/banner_film2.jpg')}
                    />
                    </TouchableOpacity>
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
                <Movies screenProps={{ navigation: this.props.navigation }}/>
              </View>
              <View style={{height:viewportHeight*0.06}}>
                <View style={{flex:1,flexDirection:'row',padding:7,backgroundColor:'#fff'}}>
                  <View style={{flex:4}}>
                    <Text>Rạp Metiz - Chỉ đường</Text>
                  </View>
                  <View style={{flex:5}}></View>
                  <View style={{flex:1}}>
                    <Icon name="ios-navigate-outline" size={22} color="red" />
                  </View>
                </View>
              </View>

              {/* Chỉ đường Rap Metiz */}

              <View style={{height:viewportHeight*0.05,marginTop:6}}>
                <View style={{flex:1,flexDirection:'row',padding:5,backgroundColor:'#fff'}}>
                  <View style={{flex:4}}>
                    <Text style={{fontWeight:'bold'}}>TIN NÓNG</Text>
                  </View>
                  <View style={{flex:5}}></View>
                  <TouchableOpacity onPress={()=>{ dispatch({type:'NOTIFICATION'}) }}>
                    <View style={{flex:2,padding:2,borderRadius:9,borderWidth:1,borderColor:'#333'}}>
                      <Text style={{fontWeight:'bold'}}> Tất cả >></Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/*Tin nóng khuyễn mãi */}

              <View style={{height:viewportHeight*0.4}}>
                <TouchableOpacity style={{flex:1,flexDirection:'row',padding:2,backgroundColor:'#fff'}} onPress={()=> { dispatch({type:'NOTIFICATION_DETAIL',title:'tin nóng',description:'hihi'}) }}>
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
                    source={{uri:'https://i.imgur.com/6Yiyxhi.png'}}
                  />
                  <Icon name="ios-arrow-dropup-circle" size={50} color="#333" />
                </View>
              </View>
            </ScrollView>
        </View>
    );
  }
}


export default connect(state => state)(Homeview)