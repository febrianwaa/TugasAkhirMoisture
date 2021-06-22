import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image, Platform, Linking } from 'react-native';
import axios from 'axios'





export default class DetailTanaman extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
           
            id: this.props.id,
            name: this.props.route.name,
            image: this.props.route.image,
            // plantsDetail: this.props.route.params.plantsDetail,
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
            <View>
                
                    
                      <View>
                         {/* <TouchableOpacity style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}} onPress={()=>{this.props.navigation.navigate("DetailCalonTinder")}}> */}
                            <Image style={{width:100,height:100}}
                                source={{uri:`${this.tate.image}`}}
                            />
                            <View style={{flexDirection:"column",alignSelf:"center"}}>
                                
                                <Text>Name : {this.state.name}</Text>
                                {/* <Text>Status : {JSON.stringify(item.plantsDetail)}</Text> */}
                                
                            </View>
                        {/*  </TouchableOpacity> */}
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
  });