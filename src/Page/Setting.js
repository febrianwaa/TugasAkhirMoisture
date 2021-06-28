import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class Setting extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [],
            value:""
        };

      }

    componentDidMount(){
     this.getData();
    }

    // componentDidUpdate(){
    //   this.getData();
    // }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.15:8080/user/`)
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
    
   

    deleteData(id){
      axios.delete(`http://192.168.0.15:8080/user/deleteUser/${id}`)
      .then( (response) => {
        alert(response.data)
      })
    .catch(function (error) {
      // handle error
       console.log(error);
      })
    }

    renderItem = ({ item }) => (
      <View style={{justifyContent: "center",alignItems: "center",}}>
      
      
      
        <View style = {{backgroundColor:'rgba(255,255,255,0.8)', borderRadius: 20, padding : 15,width:350}}>
            <Text style={styles.title}>Username : {item.username}</Text>
            <Text style={styles.title}>Email :{item.email}</Text>
            <Text style={styles.title}>Password :{item.password}</Text>
               
            <TouchableOpacity onPress={()=>{this.props.navigation.replace("UpdateUser",item)}} style={styles.update}><Text style={{color: "white", fontSize: 20, fontWeight: "bold" }}>Update</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert('Are you sure?','Tindakan ini akan menghilangkan data',
            [{text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
            {text: 'YES', onPress: () => this.deleteData(item.id)},])}} style={styles.delete}>
              <Text style={{color: "white", fontSize: 20, fontWeight: "bold"}}>Delete</Text>
            </TouchableOpacity>
            </View>
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
        <Text style={styles.logoText}>Welcome</Text>
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
       marginRight:125
      },
      update: {
        width: "100%",
        fontSize: 16,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#17A351",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      },
      delete: {
        width: "100%",
        fontSize: 16,
        borderRadius: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 3,
        backgroundColor: "red",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      }
  });
  
