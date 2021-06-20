import React, { Component } from 'react'
import {  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class Glosarium extends Component {

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
        axios.get(`http://192.168.0.11:8080/glosarium/`)
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
    
   

    // deleteData(id){
    //   axios.delete(`http://192.168.0.11:8080/user/deleteUser/${id}`)
    //   .then( (response) => {
    //     alert(response.data)
    //   })
    // .catch(function (error) {
    //   // handle error
    //    console.log(error);
    //   })
    // }


    
    renderItem = ({ item }) => (
        <View style = {{flexDirection:'column',  backgroundColor:'rgba(255,255,255,0.8)',borderRadius:12, padding:SPACING, marginBottom:SPACING,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.3,
        shadowRadius:20
        
        }}>
            <Text style={{fontSize:22,fontWeight:'700'}}>{item.plantName}</Text>
            <Text style={{fontSize:18,opacity:.7}}>Humidity : {item.humidity} %</Text>
            
           
            
        </View>
    )

    

    render() {
        
        return (
            <View style={{flex:1,backgroundColor: '#31A05F'}}>
                <Image 
                source={{uri:'https://i.pinimg.com/736x/0f/cf/3b/0fcf3baa797d70f3b7e1adf46db0bdca.jpg'}}
              style={StyleSheet.absoluteFillObject}
              blurRadius={5}
              />
              
                <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding:60,
                    paddingTop: StatusBar.currentHeight ||  42
                }}
             
              />
            </View>

          );
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
    footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
},
  });