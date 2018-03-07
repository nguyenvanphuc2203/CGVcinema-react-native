import React, { Component } from 'react';
import styles from '../stylesheets';
import { connect } from 'react-redux';
import { postStatus } from '../store/actions'
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
  Alert,
  ScrollView,
  Switch
} from 'react-native';

var ImagePicker = require('react-native-image-picker');

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


class Profile extends Component<{}>{
  constructor(props){
    super(props);
    this.state = {
      avatarSource: {uri:'https://i.imgur.com/XlYLI23.jpg'}
    }
  }
  chooseImage(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }
  saveInfomation(){
    alert('saved')
  }
  render(){
    let avatar = this.state.avatarSource;
    return  (
        <View style={{flex:1,backgroundColor:'black'}}>
            <View style={styles.head}>
              <View style={{flex:1}}>
                <TouchableHighlight onPress={this.chooseImage.bind(this)}>
                  <Image
                    style={{width:70,height:70,borderRadius:35}}
                    source={avatar}
                   />
                </TouchableHighlight>
              </View>
              <View style={{flex:2,justifyContent:'center'}}>
                <Text style={{color:'#fff'}}>Nguyễn Phúc</Text>
                <Text style={{color:'yellow'}}>202.000 coin</Text>
              </View>
            </View>
            <TextInput
                ref = "statusInput"
                style ={{backgroundColor:'#333'}}
                multiline = {true}
                numberOfLines = {4}
                placeholder = "Họ và tên "
            />
            <TextInput
                ref = "statusInput"
                style ={{backgroundColor:'#333'}}
                multiline = {true}
                numberOfLines = {1}
                placeholder = "Email "
            />
            <TextInput
                ref = "statusInput"
                style ={{backgroundColor:'#333'}}
                multiline = {true}
                numberOfLines = {1}
                placeholder = "số điện thoại "
            />
            <Switch
                style={{marginBottom:10,width:90,marginRight:6,marginLeft:6}}
                thumbTintColor="#0000ff"
                tintColor="#ff0000"
                />
            <View style={{flex:1}}>
            </View>

            <Button onPress={this.saveInfomation.bind(this)} title="SAVE" />

        </View>
    )
  }
}

export default connect((state)=>state)(Profile);
