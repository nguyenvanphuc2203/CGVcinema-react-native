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
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class BookHistory extends Component{
  constructor(props){
    super(props);
    this.state = {
        totalpayment:0,
        seat: [
            {name:'A1',toggle:false,booked:false},
            {name:'A2',toggle:false,booked:true},
            {name:'A3',toggle:false,booked:true},
            {name:'A4',toggle:false,booked:false},
            {name:'A5',toggle:false,booked:false},
            {name:'A6',toggle:false,booked:false},
            {name:'A7',toggle:false,booked:false},
            {name:'A8',toggle:false,booked:false},
            {name:'A9',toggle:false,booked:false},
            {name:'A10',toggle:false,booked:false},
            {name:'A11',toggle:false,booked:false},
            {name:'A12',toggle:false,booked:false}
        ],
        seatB: [
            {name:'A1',toggle:false},
            {name:'A2',toggle:false},
            {name:'A3',toggle:false},
            {name:'A4',toggle:false},
            {name:'A5',toggle:false},
            {name:'A6',toggle:false},
            {name:'A7',toggle:false},
            {name:'A8',toggle:false},
            {name:'A9',toggle:false},
            {name:'A10',toggle:false},
            {name:'A11',toggle:false},
            {name:'A12',toggle:false}
        ],
        seatC: [
            {name:'A1',toggle:false},
            {name:'A2',toggle:false},
            {name:'A3',toggle:false},
            {name:'A4',toggle:false},
            {name:'A5',toggle:false},
            {name:'A6',toggle:false},
            {name:'A7',toggle:false},
            {name:'A8',toggle:false},
            {name:'A9',toggle:false},
            {name:'A10',toggle:false},
            {name:'A11',toggle:false},
            {name:'A12',toggle:false}
        ],
        toggle:false,
        seatSelected:[],
        seatPayment:[]
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
            <Text> Chọn Nghế </Text>
            <Text style={{color:'#333',fontSize:10}}> 
                {this.props.navigation.state.params.time} - 
                Phòng Chiếu {this.props.navigation.state.params.room}
            </Text>
          </View>
          <View style={style.menuIcon}> 
          </View>
        </View>
      
        <View style={style.container}>
            <View style={style.seatContainer}>
                <View style={style.screen}>
                        <View style={style.screenText}>
                            <Text> MÀN HÌNH CHÍNH </Text>
                        </View>
                </View>
                <View style={style.seatSection}>
                    <View style={style.seatRow}>
                        {this.state.seat.map(seat => (
                            <TouchableOpacity
                            key={seat.name} 
                            onPress={()=>{
                                /** 
                                 * handle select seat 
                                 * count amount payment
                                 */
                                if (!seat.booked){
                                    if ( seat.toggle ){
                                        seat.toggle = false;
                                        this.setState({totalpayment:this.state.totalpayment-=45000 ,seat:this.state.seat})
                                    } 
                                    else{
                                        seat.toggle = true;
                                        this.setState({totalpayment:this.state.totalpayment+=45000 ,seat:this.state.seat})
                                    }
                                }
                            }} 
                            style={[style.seat, seat.toggle && style.seatSelected, seat.booked && style.seatBooked]}
                            >
                                <Text style={{fontSize:10}}> {seat.name} </Text>
                            </TouchableOpacity>      
                        )
                        )}
                    </View>
                </View>
                <View style={style.seatType}>
                    <View style={style.seatTypeItem}>
                        <View style={style.seat}>
                        </View>
                        <Text style={{color:'#fff'}}> Ghế Chưa chọn</Text> 
                    </View>
                    <View style={style.seatTypeItem}>
                        <View style={[style.seat,style.seatBooked]}>
                        </View>
                        <Text style={{color:'#fff'}}> Ghế Đã đặt</Text>
                    </View>
                    <View style={style.seatTypeItem}>
                        <View style={[style.seat,style.seatSelected]}>
                        </View>
                        <Text style={{color:'#fff'}}> Ghế Đang chọn</Text>
                    </View>
                </View>
            </View>
            <View style={style.result}>
                <View style={style.film}>
                    <Text style={{fontWeight:'bold'}}>{this.props.navigation.state.params.title}</Text>
                    <Text>2D Phụ đề việt</Text>
                    <Animatable.Text animation="pulse" easing="ease-in" direction="alternate" iterationCount="infinite" style={{fontWeight:'bold',color:'red',fontSize:15}}>{this.state.totalpayment} đ</Animatable.Text>
                </View>
                <View style={{flex:3,justifyContent:'center'}}>
                    <Button onPress={()=>{ 
                        (this.state.totalpayment === 0 ) ? 
                        alert('Vui lòng chọn ghế ','khoan đã..') : 
                        Actions.Confirm({
                            title:this.props.navigation.state.params.title,
                            totalpayment:this.state.totalpayment,
                            seatSelected:this.state.seat.filter(seat => seat.toggle )
                        }) 
                    }} title="thanh toán" color="red" />
                </View>
            </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
    seat:{
        width:(viewportWidth-92)/12,
        height:25,
        margin:2,
        backgroundColor:'#fff',
        borderColor:'red',
        borderWidth:1,
        borderRadius:3
    },
    seatSelected:{
        backgroundColor:'red'
    },
    seatBooked:{
        backgroundColor:'gray'
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
    container:{
        flex:12/13,flexDirection:'column',backgroundColor:'#e9ebee',justifyContent:'center'
    },
    seatContainer:{
        flex:9,padding:20,backgroundColor:'#333'
    },
    screen:{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    screenText:{
        width:'70%',height:'50%',justifyContent:'center',alignItems:'center',margin:3,backgroundColor:'#fff'
    },
    seatSection:{
        flex:7,flexDirection:'column'
    },
    seatRow:{
        flex:1,flexDirection:'row'
    },
    seatType:{
        flex:2,flexDirection:'column'
    },
    seatTypeItem:{
        flex:1,flexDirection:'row'
    },
    result:{
        flex:1,padding:10,flexDirection:'row',backgroundColor:'#fff'
    },
    film:{
        flex:7,justifyContent:'center'
    },
})