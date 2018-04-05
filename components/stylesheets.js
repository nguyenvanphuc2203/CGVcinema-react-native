import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  login:{
    flex:1,
    backgroundColor:'black',
    justifyContent:'center',
  },
  /******************** input */
  container:{
    flex:1,
  },
  inputbox:{
    flex:2/8
  },
  row:{
    flex:1,
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center'
  },
  input_text:{
    flex:4
  },
  input_send:{
    flex:1
  },
  /************************************************* message */
  messagebox:{
    flex:5/8,
    backgroundColor:'#e5e5e5'
  },
  row_message:{
    flexDirection:"row",
    flex:1,
    marginTop:5,
    padding:10,
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:3,
    backgroundColor:'#fff'
  },
  avatar:{
    flex:1,
  },
  message:{
    flex:4,
    justifyContent:'center',
    padding:5
  },
  /***********************************************friends */
  friendbox:{
    flex:1,
    backgroundColor:'#e5e5e5'
  },
  row_friend:{
    flexDirection:"row",
    flex:1,
    marginTop:5,
    padding:10,
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:3,
    backgroundColor:'#fff'
  },
  avatar_friend:{
    flex:2/10,
  },
  message_friend:{
    flex:7/10
  },
  online_friend:{
    flex:1/10,
    alignItems:'center'
  },
  /************************************************** newfeed */
  newfeedbox:{
    flex:1,
    backgroundColor:'#e5e5e5'
  },
  news_newfeed:{
    flexDirection:"column",
    flex:1,
    marginTop:5,
    padding:10,
    borderWidth:1,
    borderColor:'#fff',
    borderRadius:3,
    backgroundColor:'#fff'
  },
  avatar_newfeed:{
    flex:2/10,
  },
  message_newfeed:{
    flex:7/10
  },
  image_newfeed:{
    flex:4,
    marginTop:10,
    alignItems:'center'
  },
  /********************************** profile */
  head:{
    flexDirection:"row",
    padding:20,
    backgroundColor:'black'
  },
  /******************************** about */
  row_about:{
    flex:1,
    flexDirection:"row",
    borderBottomColor:'grey',
    borderBottomWidth:2,
  },
  number_about:{
    flex:1,
    borderRightColor:'grey',
    borderRightWidth:2,
    justifyContent:'center',
    alignItems:'center',
  },
  /*
    ********************************* DrawerMenu
  */
  view_main:{
    flex:1,
    flexDirection:"column"
  },
  head_view:{
    position:'absolute',
    flex:1/10,
    flexDirection:"row",
    justifyContent:'center',
    top:10,
    left:5,
    zIndex: 10
  },
  content_view:{
    flex:10/10,
    backgroundColor:'#f5f5f5'
  },
  control_main:{
    flex:1,
    flexDirection:"column",
    backgroundColor:'#292a2b'
  },
  control_profile:{
    flex:3/10,
    justifyContent:'center',
    alignItems:'center'
  },
  control_menu_item:{
    flex:0.7/10,
    justifyContent:'center',
    marginTop:2,
    paddingLeft:10,
    backgroundColor:'black'
  },
  /*slide wiper*/
  slider_swiper:{
    flex:1/4,
    position:'relative'
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image_swiper:{
    flex: 1,
    resizeMode: 'contain'
  },
  popular_item:{
    flex:1/3,
    flexDirection:"row",
    justifyContent:'center',
    marginTop:2,
    height:70,
    paddingLeft:10,
    backgroundColor:'#292a2b'
  }
});
