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


export default class Payment extends Component{
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
        <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'}}>
          <TouchableOpacity onPress={()=>{ Actions.pop()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={{flex:7,justifyContent:'center'}}> 
            <Text> Thanh toán </Text>
            <Text style={{color:'#333',fontSize:10}}> Xác nhận thông tin</Text>
          </View>
          <View style={{flex:2,justifyContent:'center'}}> 
          </View>
        </View>
        <View style={{flex:4/13,flexDirection:'row',marginTop:5,backgroundColor:'#fff'}}>
            <View style={{flex:4,padding:10}}>
                <Image
                    style={{width:'100%',height:'100%',flex: 1,resizeMode: 'contain'}}
                    source={{uri:'https://image.tmdb.org/t/p/w500/jV8wnk3Jgz6f7degmT3lHNGI2tK.jpg'}}
                />
            </View>
            <View style={{flex:6,padding:10}}>
                <Text style={{fontWeight:'bold'}}>{this.props.navigation.state.params.title}</Text>
                <Text style={{color:'red'}}>Tổng: {this.props.navigation.state.params.totalpayment} đ</Text>
                <Text>Thứ ba 10-04-2018</Text>
                <Text>Phòng Chiếu 03</Text>
                <Text>20:00 ~ 21:45</Text>
                <Text>Khách hàng trên 16 tuổi</Text>
                <Text>Ghế : {this.props.navigation.state.params.seatSelected.map(item => (<Text>{item} ,</Text>))}</Text>
            </View>
        </View>
        <View style={{flex:8/13,flexDirection:'column',backgroundColor:'#e9ebee',justifyContent:'center'}}>
            <View style={{flex:9,backgroundColor:'#eaebee'}}>
                <ScrollView>
                    <View style={stylePayment.title}>
                        <Text>THÔNG TIN VÉ</Text>
                    </View>
                    <View style={{height:viewportHeight*0.15,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Số lượng vé </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text >2 </Text>
                                </View>
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Tổng </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 90.000 đ</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={stylePayment.title}>
                        <Text>PHƯƠNG THỨC GIẢM GIÁ</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Voucher Metiz </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Thẻ Quà Tặng </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Thẻ Thành Viên </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Icon name="ios-arrow-forward" size={30} color="#333" />
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={stylePayment.title}>
                        <Text>TỔNG KẾT</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                        <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Tổng Cộng </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text >90.000 đ </Text>
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Giảm Giá </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 0 đ</Text>
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Còn lại </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 90.000 đ</Text>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                    <View style={stylePayment.title}>
                        <Text>THANH TOÁN</Text>
                    </View>
                    <View style={{height:viewportHeight*0.2,marginTop:5,backgroundColor:'#fff'}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Ví MOMO </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text >90.000 đ </Text>
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >Visa - MasterCard </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 0 đ</Text>
                                </View>
                                
                            </View>
                            <View style={stylePayment.rowitem}>
                                <View style={stylePayment.itemleft}>
                                    <Text >ATM Nội địa </Text>
                                </View>
                                <View style={stylePayment.itemright}>
                                    <Text > 90.000 đ</Text>
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
                        <Button onPress={()=>{}} disabled={this.state.isAccept} title="Tôi đồng ý và tiếp tục" color="red" />
                    </View>
                </ScrollView>
            </View>
        </View>
      </View>
    );
  }
}

const stylePayment = StyleSheet.create({
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
    }
    
})