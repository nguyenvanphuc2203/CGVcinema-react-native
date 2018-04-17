import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import Modal from "react-native-modal";
import styles from '../stylesheets';
import Drawer from 'react-native-drawer';
import ControlPanel from '../menu/controlpanel';
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
  ScrollView,
  Dimensions,
  RefreshControl,
  FlatList,
  NetInfo,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux'; // New code

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

class Item extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      isModalVisible: false,
      refreshing: false
    };
  }
  static navigationOptions = ({navigation}) => ({
    header: null,
  })
  componentWillMount(){
    NetInfo.isConnected.fetch().done((isConnected) => {
      if ( isConnected )
      {
        fetch('https://api.themoviedb.org/3/movie/'+this.props.navigation.state.params.id+'?api_key=e8631f0c8f0363c450d47ace4043eca5&append_to_response=videos')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({data:responseJson});
        })
        .catch((error) => {
          console.error(error);
        });
      }
      else
      {
        Alert.alert(
          'Bạn đang Offline',
          'Vui lòng kết nối mạng để sử dụng!!', [{
              text: 'OK',
              onPress: () => Actions.pop()
          }, ], {
              cancelable: false
          }
      )
      }
  });
    
  }

  ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color='#333'
        size='large'
        style={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,alignItems: 'center',justifyContent: 'center'}}
      />
    );
  }
  _onRefresh() {
    this.setState({refreshing: true});
    setTimeout(()=>{
      Actions.refresh();
      this.setState({refreshing: false});
    },1000)
  }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    // get params navigate 
    const { params } = this.props.navigation.state;
    // get trailler id youtube
    var str = JSON.stringify(this.state.data.videos);
    var trailer_url = String(str).substr(87, 11);
    console.log(trailer_url)
    return (
      <Drawer
        type="overlay"
        side="right"  
        tapToClose={true}
        openDrawerOffset={0.2}
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel />}
        >
         
        <View style={styles.view_main}>
         <View style={{flex:1/13}}>
            <View style={{flex:1,flexDirection:"row",justifyContent:'center',backgroundColor:'#fff'}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
                <Icon name="ios-arrow-round-back" size={40} color="red" />
              </TouchableOpacity>
              <View style={{flex:7,justifyContent:'center'}}> 
                <Text> Phim </Text>
              </View>
              <TouchableOpacity style={{flex:1,justifyContent:'center'}} onPress={this.openControlPanel}>
                <Icon name="ios-menu" size={40} color="red" />
              </TouchableOpacity>
            </View>
          </View>
          {/* View  */}
        <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          ref='_scrollView'
        >
          <View style={{height:viewportHeight*0.3,marginTop:6,flexDirection:"column",backgroundColor:'#eaebee'}}>
            <View style={{flex:1,marginTop:5,backgroundColor:'#fff'}}>
              <ImageBackground style={{width:'100%',height:'100%'}} source={{uri:'https://image.tmdb.org/t/p/w500'+this.state.data.backdrop_path}}>
                <WebView
                  renderLoading={this.ActivityIndicatorLoadingView}
                  javaScriptEnabled={true}
                  style={{justifyContent: 'center',alignItems: 'center'}}
                  source={{ uri:'https://www.youtube.com/embed/'+trailer_url}} />
              </ImageBackground>
            </View>
          </View>
          <View style={{height:viewportHeight*0.3,paddingTop:10,marginTop:6,backgroundColor:'#fff'}}>
            <View style={{flex:3,flexDirection:"row"}}>
              <View style={{flex:8,paddingLeft:5,justifyContent:'center'}}>
                <Text style={{color:'#333',fontSize:15,fontWeight:'bold'}}>{this.state.data.title}</Text>
              </View>
              <View style={{flex:2,paddingRight:20}}>
                <Button onPress={()=>{ Actions.Showtimes({title:this.state.data.title})}} title="Đặt vé" color="red" ></Button>
              </View>
            </View>
            <View style={{flex:2}}>
              <View style={{flex:1,flexDirection:"row",paddingLeft:10,justifyContent:'center',alignItems:'center'}}>
                <View style={{padding:3}}>
                  <Icon name="md-aperture" size={50} color="#333" />
                </View>
                <View style={{padding:3}}>
                  <Icon name="logo-xbox" size={50} color="#333" />
                </View>
                <View style={{padding:3}}>
                  <Icon name="logo-github" size={50} color="#333" />
                </View>
                <View style={{padding:3}}>
                  <Icon name="logo-codepen" size={50} color="#333" />
                </View>
              </View>
              
            </View>
            <View style={{flex:6,flexDirection:"row",paddingTop:5}}>
              <View style={{flex:1,paddingLeft:10,justifyContent:'center'}}>
                <Text numberOfLines={5} style={{color:'#333',overflow:'hidden'}}>{this.state.data.overview}</Text>
              </View>
              
            </View>
          </View>
          <View style={{height:viewportHeight*0.32,paddingTop:10,marginTop:6,backgroundColor:'#fff'}}>
            <View style={{flexDirection:"row"}}>
                <Image
                style={{width:100,height:200,flex: 1,resizeMode: 'contain'}}
                source={{uri:'https://image.tmdb.org/t/p/w500'+this.state.data.poster_path}}
                />
              <View style={{flex:1,paddingRight:20}}>
                <Text style={{color:'#333'}}>{this.state.data.title}</Text>
                <Text style={{color:'#333'}}>Thẻ : {this.state.data.tagline}</Text>
                <Text style={{color:'#333'}}>Đánh giá : {this.state.data.vote_average} / {this.state.data.vote_count}</Text>
                <Text style={{color:'#333'}}>Trạng thái : {this.state.data.status}</Text>
                <Text style={{color:'#333'}}>Thời lượng : {this.state.data.runtime} Phút</Text>
                <Text style={{color:'#333'}}>Ngày chiếu : {this.state.data.release_date}</Text>

              </View>
            </View>
          </View>
          
          {/* promotion  */}
          <View style={{height:viewportHeight*0.05,marginTop:6}}>
            <View style={{flex:1,flexDirection:'row',padding:5,backgroundColor:'#fff'}}>
              <View style={{flex:4,justifyContent:'center'}}>
                <Text style={{fontWeight:'bold'}}>TIN NÓNG</Text>
              </View>
              <View style={{flex:5}}></View>
              <TouchableOpacity onPress={()=>{  Actions.Promotion() }}>
                <View style={{flex:2,padding:2,justifyContent:'center',borderRadius:9,borderWidth:1,borderColor:'#333'}}>
                  <Text style={{fontWeight:'bold'}}> Tất cả >></Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{height:viewportHeight*0.3,paddingTop:10,backgroundColor:'#fff'}}>
            <FlatList
              horizontal
              data={[{title:'hihi'},{title:'hihi'},{title:'hihi'}]}
              renderItem={({item}) =>
              <View style={{width:viewportWidth*0.7}}>
                <TouchableOpacity style={{flex:1,flexDirection:'column',padding:2,backgroundColor:'#fff'}} onPress={()=> { Actions.PromotionDetail() }}>
                  <View style={{flex:8}}>
                      <Image
                        style={{width:'100%',height:'100%'}}
                        source={require('../images/banner_film1.jpg')}
                      />
                    </View>
                    <View style={{flex:2,padding:3}}>
                      <Text style={{fontWeight:'bold'}}> thưởng thức bộ phim tháng năm rực rỡ chỉ với 45.000đ >></Text>
                    </View>
                </TouchableOpacity> 
                </View>
              }
            />
          </View>

          {/* backtotop */}

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
            {/* modal trailer */}
            <Modal isVisible={this.state.isModalVisible}>
              <View style={{ flex: 0.5,justifyContent:'center' }}>
                <WebView style={{flex:1}} javaScriptEnabled={true} source={{ uri:'https://www.youtube.com/embed/'+trailer_url}}/>
                <Button color="#841584" onPress={()=>{this.setState({isModalVisible: !this.state.isModalVisible})}} title="Hủy"/>
              </View>
            </Modal>
          </ScrollView>
          </View>
    </Drawer>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps)(Item)