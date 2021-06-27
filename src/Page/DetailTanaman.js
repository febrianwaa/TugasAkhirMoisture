import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image, Platform, Linking } from 'react-native';
import axios from 'axios'





export default class DetailTanaman extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
           
            //  id: this.props.route.params.id,
            name: 60,
            image: "",
            plantsDetail: ""
        };

      }

//     componentDidMount(){
//      this.getData();
//     }

//     getData =()=>{  
//         //Make a request for a user with a given ID
//         axios.get(`http://192.168.0.11:8080/plants/`)
//         .then( (response) => {
//        //   console.log(response.data)
//           let data=response.data;   
//           this.setState({data:data}); 
//         })
//         .catch(function (error) {
//         // handle error
//          console.log(error);
//         })
      

//     }

//     renderItem = ({ item }) => (
//    <View>
//       <View style = {{flexDirection:'column',  backgroundColor:'rgba(255,255,255,0.8)',borderRadius:12, padding:20, marginBottom:20,
//       shadowColor:"#000",
//       shadowOffset:{
//           width:0,
//           height:10
//       },
//       shadowOpacity:.3,
//       shadowRadius:20
      
//       }}>


//           <Image style={styles.imageGlossarium}
//                 source={{uri:`http://192.168.0.11:8080/plants/image/${item.image}`}}
//               />
//                <View style = {{backgroundColor : '#FCF4A3', borderRadius: 12, padding : 15}}>
//             <Text style={{fontSize:18,opacity:.7}}>Name : {item.name}</Text>
//             <Text style={{fontSize:18,opacity:.7}}>Status :{JSON.stringify(item.plantsDetail)}</Text>
//             </View>
        
//             </View>
//           //  </View> 
//     )

//     render() {
//         return (
//           <View style={{flex:1,backgroundColor: '#31A05F',justifyContent: "center", alignItems: "center",}}>
//                 <FlatList
//                 data={this.state.data}
//                 renderItem={this.renderItem}
//                 keyExtractor={item => item.id}
//               />
//             </View>
//           );
//     }
// }


render() {
        return (
            <View style={{flex:1,backgroundColor:  '#31A05F'}}>
                
      {/* <View style = {{flexDirection:'column',  backgroundColor:'rgba(255,255,255,0.8)',borderRadius:12, padding:20, marginBottom:20,
      shadowColor:"#000",
      shadowOffset:{
          width:0,
          height:10
      },
      shadowOpacity:.3,
      shadowRadius:20
      
      }}> */}

        <View style={styles.styleBACK}>
        <TouchableOpacity style={styles.styleBack} onPress={() => this.props.navigation.navigate("Main Menu")}>
        <Image style={{height: 30, width: 30}} source={require("../Images/back.png")}/>
        </TouchableOpacity>
        </View>

         <View style={styles.logoContainer}>      
        <Text style={styles.logoText}>Lidah Buaya</Text>
        </View>

        <View style={{alignItems: "center",  width: "40%", marginBottom: 10, marginTop:0, marginLeft:133}}>
          <Image style={{height: 300, width: 200}} source={require("../Images/TESTING.jpg")}/>
        </View>

        <View style = {{flexDirection:'column',  backgroundColor:'rgba(255,255,255,1)',borderRadius:13, padding:200, marginBottom:SPACING,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.3,
        shadowRadius:20
        
        }}>
                         {/* <TouchableOpacity style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}} onPress={()=>{this.props.navigation.navigate("DetailCalonTinder")}}> */}
                            {/* <Image style={{width:100,height:100}}
                                source={{uri:`${this.state.image}`}}
                            /> */}
                            {/* <View style = {{backgroundColor : '#FCF4A3', borderRadius: 12, padding : 15}}> */}
                             
                            <View style={styles.cek2}  >
                            <Image style={{width:60,height:70,borderRadius: 20, marginRight:SPACING /2,alignSelf:"center"}}
                              source={require("../Images/termometer.png")}/>
                              <View style ={{flexDirection:"column",alignSelf:"center"}}>
                                <Text>Temp : {this.state.name}%</Text>
                                </View>
                            </View>
                             
                             
                             <View style={styles.cek}  >
                                <Image style={{width:60,height:70,borderRadius: 20, marginRight:SPACING /2,alignSelf:"center"}}
                              source={require("../Images/water.png")}/>
                              <View style ={{flexDirection:"column",alignSelf:"center"}}>
                                <Text>Humidity : {this.state.name}%</Text>
                                {/* <Text>Status : {JSON.stringify(item.plantsDetail)}</Text> */}
                          </View>
                            </View>

                            <View style={styles.cek1}  >
                            <Image style={{width:60,height:70,borderRadius: 20, marginRight:SPACING /2,alignSelf:"center"}}
                              source={require("../Images/sun.png")}/>
                              <View style ={{flexDirection:"column",alignSelf:"center"}}>
                                <Text>Light : {this.state.name}%</Text>
                                </View>
                            </View>





                            <View style={{marginTop:-150}}>
                            <Image style={{width:470,height:470,borderRadius: 20, marginLeft:-140,marginTop:-330}}
                              source={require("../Images/LOGOTANEMAN.png")}/>
                         {/* </TouchableOpacity> */}
                            </View>


                        </View>
                   </View>
                
           
        )
    }
  }

const SPACING = 20;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 20,
    },
    button: {
      margin:10,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 5,
      },
      imageGlossarium: {
        width: 180,
        height: 180,
        alignSelf: 'center',
        marginBottom : 15,
        borderRadius : 12,
        borderColor :'#FCF4A3',
        borderWidth : 5
      },
      style21: {
        width: 98.7013,
        height: 85,
        backgroundColor: "rgb(211, 250, 250)",
        position: "absolute",
        left: 0,
        top: 0,
        transform: [
          {translateX: 0},
          {translateY: 0},
        ],
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "rgba(0,0,0,0)",
        marginLeft:20, 
        flexDirection:'column'
    
        },
      
        styleBACK: {
          width: 140,
          height: 54,
          position: "absolute",
          
          left: 28,
          top: 50,
          transform: [
            {translateX: 0},
            {translateY: 0},
          ],
          shadowColor: "rgba(0,0,0,0)",
          color: "white",
         // color: "rgb(255, 255, 255)",
          fontSize: 30,
          fontWeight: "700",
          lineHeight: 35.1562,
          fontFamily: "Roboto",
          textAlign: "center",
          },
          styleBack: {
            width: 95,
            height: 95,
            position: "absolute",
            transform: [
              {translateX: 26},
              {translateY: 25},
            ],
            shadowColor: "rgba(0,0,0,0)",
            },
            logoText: {
              marginRight:50,
              shadowColor: "rgba(0,0,0,0)",
              color: "white",
             // color: "rgb(255, 255, 255)",
              fontSize: 35,
              //fontWeight: "700",
              fontFamily: "Roboto",
              },
            logoContainer: {
              alignItems: "center",
              marginBottom: 20,
              marginTop: 120,
             marginLeft:60
            },
            cek:{
              flexDirection:"column",
              backgroundColor:"rgb(211, 250, 250)",
              borderRadius:20, 
              padding:10, 
              marginBottom:20,
              width:130,
              marginTop:-10,
              marginLeft:-180
              },
              cek1:{
                flexDirection:"column",
                backgroundColor: "rgb(255, 153, 1)",
                borderRadius:20, 
                padding:10, 
                marginBottom:20,
                width:130,
                marginTop:-10,
                marginLeft:-180
                },
                cek2:{
                  flexDirection:"column",
                  backgroundColor: "red",
                  borderRadius:20, 
                  padding:10, 
                  marginBottom:20,
                  width:130,
                  marginTop:-190,
                  marginLeft:-180
                  },
              
  });