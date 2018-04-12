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

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class BookHistory extends Component{
  constructor(props){
    super(props);
    this.state = {
        totalpayment:0,
        seat: [
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
        <View style={{flex:1/13,flexDirection:"row",justifyContent:'center',backgroundColor:'#f1f8fe'}}>
          <TouchableOpacity onPress={()=>{ Actions.pop()}} style={{flex:1,paddingLeft:10,justifyContent:'center'}} >
            <Icon name="ios-arrow-round-back" size={40} color="red" />
          </TouchableOpacity>
          <View style={{flex:7,justifyContent:'center'}}> 
            <Text> Chọn Nghế </Text>
            <Text style={{color:'#333',fontSize:10}}> {this.props.navigation.state.params.time} - Phòng Chiếu {this.props.navigation.state.params.room}</Text>
          </View>
          <View style={{flex:2,justifyContent:'center'}}> 
          </View>
        </View>
      
        <View style={{flex:12/13,flexDirection:'column',backgroundColor:'#e9ebee',justifyContent:'center'}}>
            <View style={{flex:9,padding:20,backgroundColor:'#333'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width:'70%',height:'50%',justifyContent:'center',alignItems:'center',margin:3,backgroundColor:'#fff'}}>
                            <Text> MÀN HÌNH CHÍNH </Text>
                        </View>
                </View>
                <View style={{flex:7,flexDirection:'column'}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        {this.state.seat.map(seat => (
                            <TouchableOpacity
                            key={seat.name} 
                            onPress={()=>{
                                if ( seat.toggle ){
                                    seat.toggle = false;
                                    this.setState({totalpayment:this.state.totalpayment-=45000 ,seat:this.state.seat})
                                } 
                                else{
                                    seat.toggle = true;
                                    if (this.state.seatSelected.indexOf(seat.name) === -1 ) this.state.seatSelected.push(seat.name);
                                    this.setState({totalpayment:this.state.totalpayment+=45000 ,seat:this.state.seat})
                                }
                            }} 
                            style={[styleBooking.seat, seat.toggle && styleBooking.seatSelected]}
                            >
                                <Text style={{fontSize:10}}> {seat.name} </Text>
                            </TouchableOpacity>      
                        )
                        )}
                    </View>
                </View>
                <View style={{flex:2,flexDirection:'column'}}>
                    <View>

                    </View>
                </View>
            </View>
            <View style={{flex:1,padding:10,flexDirection:'row',backgroundColor:'#fff'}}>
                <View style={{flex:7,justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold'}}>{this.props.navigation.state.params.title}</Text>
                    <Text >2D Phụ đề việt</Text>
                    <Text style={{fontWeight:'bold',color:'red'}}>{this.state.totalpayment} đ</Text>
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

const styleBooking = StyleSheet.create({
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
    }
})