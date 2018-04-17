import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  CheckBox
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/Ionicons';
import stylesheets from '../stylesheets';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class Confirm extends Component{
  constructor(props){
    super(props);
    this.state = {
        totalpayment:0,
        isAccept:true
    }
  }
  static navigationOptions = () => ({
    header: null,
  })

  render(){
    return (
      <View style={styles.view_main}>
        <View style={style.navigation}>
          <TouchableOpacity onPress={()=>{ Actions.pop()}} style={style.backIcon} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={style.navigationTitle}> 
            <Text> Thanh toán </Text>
            <Text style={{color:'#333',fontSize:10}}> Xác nhận thông tin</Text>
          </View>
          <View style={style.menuIcon}> 
          </View>
        </View>
        <View style={style.film}>
            <View style={style.filmthumb}>
                <Image
                    style={{width:'100%',height:'100%',flex: 1,resizeMode: 'contain'}}
                    source={{uri:'https://image.tmdb.org/t/p/w500/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'}}
                />
            </View>
            <View style={style.filminfo}>
                <Text style={{fontWeight:'bold'}}>{this.props.navigation.state.params.title}</Text>
                <Text style={{color:'red'}}>Tổng: {this.props.navigation.state.params.totalpayment} đ</Text>
                <Text>Thứ ba 10-04-2018</Text>
                <Text>Phòng Chiếu 03</Text>
                <Text>20:00 ~ 21:45</Text>
                <Text>Khách hàng trên 16 tuổi</Text>
                <Text>Ghế : {this.props.navigation.state.params.seatSelected.map(item => (<Text key={item.name} >{item.name} ,</Text>))}</Text>
            </View>
        </View>
        <View style={style.confirm}>
            <View style={{flex:9,backgroundColor:'#eaebee'}}>
                <ScrollView>
                    <View style={style.title}>
                        <Text>THÔNG TIN VÉ</Text>
                    </View>
                    <View style={{height:viewportHeight*0.15,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Số lượng vé </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text >{this.props.navigation.state.params.seatSelected.length} </Text>
                                </View>
                            </View>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Tổng </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text > {this.props.navigation.state.params.totalpayment} đ</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={style.title}>
                        <Text>PHƯƠNG THỨC GIẢM GIÁ</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Voucher Metiz </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Thẻ Quà Tặng </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>                                

                            </View>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Thẻ Thành Viên </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={style.title}>
                        <Text>TỔNG KẾT</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Tổng Cộng </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text >90.000 đ </Text>
                                </View>
                                
                            </View>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Giảm Giá </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text > 0 đ</Text>
                                </View>
                                
                            </View>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Còn lại </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text > 90.000 đ</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={style.title}>
                        <Text>CÁC HÌNH THỨC THANH TOÁN</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Ví MOMO </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text >Hoạt động </Text>
                                </View>
                            </View>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >Visa - MasterCard </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text > Hoạt Động</Text>
                                </View>
                            </View>
                            <View style={style.rowitem}>
                                <View style={style.itemleft}>
                                    <Text >ATM Nội địa </Text>
                                </View>
                                <View style={style.itemright}>
                                    <Text > Hoạt Động</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height:viewportHeight*0.15,padding:10 }}>
                        <View style={{flexDirection:'row',marginBottom:7}}>
                            <CheckBox onChange={()=>{this.setState({isAccept:false})}} />
                            <Text style={{paddingRight:20}}>
                            Tôi đồng ý với điều khoản sử dụng và đang mua vé người 
                            co tuổi phù hợp.
                            </Text>
                        </View>
                        <Button onPress={()=>{ 
                                Actions.Payment({
                                    amount:this.props.navigation.state.params.totalpayment,
                                    seatSelected:this.props.navigation.state.params.seatSelected,
                                    nameFilm:this.props.navigation.state.params.title
                                })  
                            }} 
                            disabled={this.state.isAccept}
                            title="Tôi đồng ý và tiếp tục" color="red" />
                    </View>
                </ScrollView>
            </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    title:{
        height:viewportHeight*0.05,
        marginTop:25,
        paddingLeft:10
    },
    itemleft:{
        flex:6,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    itemright:{
        flex:4,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    rowitem:{
        flex:1,
        flexDirection:'row',
        padding:10,
        borderTopWidth:1,
        borderTopColor:'#e9ebee'
    },
    navigation:{
        flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'
    },
    backIcon:{
        flex:1,paddingLeft:10,justifyContent:'center'
    },
    menuIcon:{
        flex:2,justifyContent:'center'
    },
    navigationTitle:{
        flex:7,justifyContent:'center'
    },
    film:{flex:4/13,flexDirection:'row',marginTop:5,backgroundColor:'#fff'},
    filmthumb:{flex:4,padding:10},
    filminfo:{flex:6,padding:10},
    confirm:{flex:8/13,flexDirection:'column',backgroundColor:'#e9ebee',justifyContent:'center'}
})