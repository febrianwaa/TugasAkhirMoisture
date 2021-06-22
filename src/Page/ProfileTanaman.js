import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class ProfileTanaman extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [{}],
            name:"",
            image:""
        };

      }

    componentDidMount(){
     this.getData();
    }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.11:8080/plants/`)
        .then( (response) => {
       //   console.log(response.data)
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
        // .then(function () {
        // // always executed
        // });
    }


//     render() {
//       return (
//           <View>
//               <FlatList
//                   data={this.state.data}
//                   keyExtractor={item=>parseInt(item.id)}
//                   renderItem={({item})=>(
//                     <View>
//                        {/* <TouchableOpacity style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}} onPress={()=>{this.props.navigation.navigate("DetailCalonTinder")}}> */}
//                           <Image style={{width:100,height:100}}
//                               source={{uri:`http://192.168.0.11:8080/plants/image/${item.image}`}}
//                           />
//                           <View style={{flexDirection:"column",alignSelf:"center"}}>
                              
//                               <Text>Name : {item.name}</Text>
//                               <Text>Status : {JSON.stringify(item.plantsDetail)}</Text>
                              
//                           </View>
//                       {/*  </TouchableOpacity> */}
//                       </View>
//                   )}
//               />
//           </View>
//       )
//   }
// }



deleteData(id){
  axios.delete(`http://192.168.0.11:8080/plants/deletePlants/${id}`)
  .then( (response) => {
    alert(response.data)
  })
.catch(function (error) {
  // handle error
   console.log(error);
  })
}



    renderItem = ({ item }) => (
            <View style={{marginTop:5,justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity style={styles.cek} onPress={() => this.props.navigation.navigate("DetailTanaman")}>

              <Image style={{width:AVATAR_SIZE,height:AVATAR_SIZE,borderRadius: 20, marginRight:SPACING /2}}
                source={{uri:`http://192.168.0.11:8080/plants/image/${item.image}`}}
              />


            <View style ={{flexDirection:"column",alignSelf:"center"}}>
            <Text style={styles.title}>{item.name}</Text>
            {/* <Text style={styles.title}>Status :{JSON.stringify(item.plantsDetail)}</Text> */}
            </View>

            
            <TouchableOpacity style={{justifyContent:"center",marginLeft:150, position:'relative'}} onPress={() => this.deleteData(item.id)}>
            <Image style={{height: 30, width: 30}} source={require("../Images/delete.png")}/>
            </TouchableOpacity>
            


            </TouchableOpacity>
            </View>
    )

    render() {
        return (
          <View style={{flex:1,backgroundColor: '#31A05F'}}>
               
               <View style={styles.styleBACK}>
        <TouchableOpacity style={styles.styleBack} onPress={() => this.props.navigation.navigate("Main Menu")}>
        <Image style={{height: 30, width: 30}} source={require("../Images/back.png")}/>
        </TouchableOpacity>
        </View>

         <View style={styles.logoContainer}>      
        <Text style={styles.logoText}>My Plant</Text>
        </View>
                <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          );
    }
}
const AVATAR_SIZE = 70;
const SPACING = 20;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor:'#31A05F',
      justifyContent: "center",
    
      
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
      cek:{
        flexDirection:"row",
        backgroundColor:'rgba(255,255,255,0.8)',
        borderRadius:20, 
        padding:10, 
        marginBottom:20,
        shadowColor:"#000",
        shadowRadius:20,
        width:350
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
              fontWeight: "700",
              fontFamily: "Roboto",
              },
            logoContainer: {
              alignItems: "center",
              marginBottom: 20,
              marginTop: 120,
             marginRight:140
            },
            
  });




  // ,justifyContent: "center", alignItems: "center",