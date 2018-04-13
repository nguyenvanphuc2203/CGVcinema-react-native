import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  WebView,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/Ionicons';


function sortObject(o) {
  var sorted = {},
      key, a = [];
  for (key in o) {
      if (o.hasOwnProperty(key)) {
          a.push(key);
      }
  }
  a.sort();
  for (key = 0; key < a.length; key++) {
      sorted[a[key]] = o[a[key]];
  }
  return sorted;
}
function toYyyymmdd(d) {
  var yyyy = d.getFullYear().toString();
  var mm = (d.getMonth() + 101).toString().slice(-2);
  var dd = (d.getDate() + 100).toString().slice(-2);
  var hh = d.getHours();
  var pp = d.getMinutes();
  var ss = d.getSeconds();
  return yyyy + mm + dd + (hh <= 9 ? "0"+hh : hh) + (pp <= 9 ? "0"+pp : pp) + (ss <= 9 ? "0"+ss : ss);
}
function toHhmmss(d) {
  var hh = d.getHours().toString();
  var pp = d.getMinutes().toString();
  var ss = d.getSeconds().toString();
  return (hh <= 9 ? "0"+hh : hh) + (pp <= 9 ? "0"+pp : pp) + (ss <= 9 ? "0"+ss : ss);
}

export default class Payment extends Component{
  constructor(props){
    super(props);
    this.state = {
      vnpUrl:''
    }
  }
  static navigationOptions = () => ({
    header: null,
  })
  ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color='#333'
        size='large'
        style={style_payment.ActivityStyle}
      />
    );
  }
  componentWillMount(){
    // config VNPAY 
    var tmnCode = '4NSOH6JU';
    var secretKey = 'WMUKTVUVFXJNBAWWWDBZHPCBJJDDRKFH';
    var vnpUrl = 'http://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
    var returnUrl = 'http://metiz.vn';
    var ipAddr = '192.168.0.1';
    var date = new Date();
    var createDate = toYyyymmdd(date);
    var orderId = toHhmmss(date);
    var amount = this.props.navigation.state.params.amount;
    var bankCode = 'NCB';
    var orderInfo = 'Thanh Toan ve Metiz ';
    var orderType = 190000;
    var locale = 'vn';
    var currCode = 'VND';
    var vnp_Params = {};
    vnp_Params['vnp_Version'] = '2';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    //vnp_Params['vnp_BankCode'] = bankCode;

    vnp_Params = sortObject(vnp_Params);

    var querystring = require('query-string');
    var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });

    var md5 = require('md5');

    var secureHash = md5(signData);

    vnp_Params['vnp_SecureHashType'] =  'MD5';
    vnp_Params['vnp_SecureHash'] = secureHash;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });
    // config end 
    this.setState({vnpUrl:vnpUrl})
    console.log(vnp_Params)
  }
  onSuccessPayment(webview){
    if (webview.url.indexOf('http://metiz.vn') !== -1 )
      Actions.SuccessPayment();
  }
  render(){
    return (
      <View style={styles.view_main}>
        <View style={style_payment.nav}>
          <TouchableOpacity onPress={()=>{ Actions.pop() }} style={style_payment.back} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={style_payment.title}> 
            <Text> Payment </Text>
          </View>
          <View style={style_payment.loading}>
            <ActivityIndicator size="small" color="red" />
          </View>
        </View>
      
        <View style={style_payment.webview}>
          <WebView
            renderLoading={this.ActivityIndicatorLoadingView}
            javaScriptEnabled={true}
            source={{ uri:this.state.vnpUrl}}
            onNavigationStateChange={ this.onSuccessPayment.bind(this) }
          />
        </View>
      </View>
    );
  }
}

const style_payment = StyleSheet.create({
  ActivityStyle :{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nav:{
    flex:1/13,
    flexDirection:"row",
    justifyContent:'center',
    backgroundColor:'#f1f8fe'
  },
  back:{
    flex:1,
    paddingLeft:10,
    justifyContent:'center'
  },
  title:{
    flex:7,
    justifyContent:'center'
  },
  loading:{
    flex:2,
    justifyContent:'center'
  },
  webview:{
    flex:12/13,
    backgroundColor:'#e9ebee',
    justifyContent:'center',
    position:'relative'
  }
})