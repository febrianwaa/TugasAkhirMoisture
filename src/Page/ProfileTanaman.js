import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class ProfileTanaman extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [{}]
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
//   axios.delete(`http://192.168.0.11:8080/plants/deletePlants/${id}`)
//   .then( (response) => {
//     alert(response.data)
//   })
// .catch(function (error) {
//   // handle error
//    console.log(error);
//   })
}



    renderItem = ({ item }) => (
            <TouchableOpacity style={styles.cek} onPress={() => this.props.navigation.navigate("glosarium")}>

              <Image style={{width:AVATAR_SIZE,height:AVATAR_SIZE,borderRadius: AVATAR_SIZE, marginRight:SPACING /2}}
                source={{uri:`http://192.168.0.11:8080/plants/image/${item.image}`}}
              />


            <View style ={{flexDirection:"column",alignSelf:"center"}}>
            <Text style={styles.title}>{item.name}</Text>
            {/* <Text style={styles.title}>Status :{JSON.stringify(item.plantsDetail)}</Text> */}
            </View>
            <TouchableOpacity style={{marginLeft:220,marginTop:20}} onPress={() => this.deleteData(item.id)}>
            <Image style={{height: 30, width: 30}} source={require("../Images/delete.png")}/>
            </TouchableOpacity>

            </TouchableOpacity>
    )

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
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
        padding:15, 
        marginBottom:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
            },
        shadowOpacity:.3,
        shadowRadius:20,
      
        
        
        
        
      }
  });