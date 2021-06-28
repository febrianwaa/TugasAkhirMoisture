import React, { Component } from 'react'
import {  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class Glosarium extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [],
            value:"",
            type:"name",
        };

      }

    componentDidMount(){
     this.getData();
    }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.15:8080/glosarium/`)
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
    
   


    getDataCari =()=>{
      // console.log(this.state)
      //Make a request for a user with a given ID
      axios.get(`http://192.168.0.15:8080/glosarium/searchby/${this.state.type}/${this.state.value}`)
      .then( (response) => {
        // console.log(response.data")
        let data=response.data;   
        this.setState({data:data}); 
      })
      .catch(function (error) {
      // handle error
       console.log(error);
      })
  }
    
    renderItem = ({ item }) => (
      <View>
        <View style = {{flexDirection:'column',  backgroundColor:'rgba(255,255,255,0.8)',borderRadius:12, padding:SPACING, marginBottom:SPACING,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.3,
        shadowRadius:20
        
        }}>
            {/* <Text style={{fontSize:22,fontWeight:'700'}}>{item.plantName}</Text>
            <Text style={{fontSize:18,opacity:.7}}>Humidity : {item.humidity} %</Text> */}

              <Image source={{uri: item.image }} style={styles.imageGlossarium}/>
              <View style = {{backgroundColor : '#FCF4A3', borderRadius: 12, padding : 15}}>
                <Text style={{fontSize:22,fontWeight:'700', alignSelf : 'center'}}>{item.name}</Text>
                <Text style={{fontSize:18,opacity:.7}}>Asal Tanaman : {item.origin}</Text>
                <Text style={{fontSize:18,opacity:.7}}>Kelembaban Ideal : {item.humidity}</Text>
                <Text style={{fontSize:18,opacity:.7}}>Suhu Ideal : {item.temp} °C</Text>
            </View>
           </View>
            
        </View>
    )

    

    render() {
        
        return (
            <View style={{flex:1,backgroundColor: '#31A05F',justifyContent: "center", alignItems: "center",}}>

         <View style={styles.styleBACK}>
        <TouchableOpacity style={styles.styleBack} onPress={() => this.props.navigation.navigate("Main Menu")}>
        <Image style={{height: 30, width: 30}} source={require("../Images/back.png")}/>
        </TouchableOpacity>
        </View>
                {/* <Image 
                source={{uri:'https://i.pinimg.com/736x/0f/cf/3b/0fcf3baa797d70f3b7e1adf46db0bdca.jpg'}}
              style={StyleSheet.absoluteFillObject}
              blurRadius={5}
              /> */}
              <View style={styles.inputContainer}>
              <TextInput style={styles.inputContainerText} placeholder="Enter Plant Name" onChangeText={(data)=>{this.setState({value:data})}}/>
              </View>
              <TouchableOpacity onPress={()=>{this.getDataCari()}} style={styles.loginBtn}><Text style={{ color: "#31A05F", fontSize: 20, fontWeight: "bold" }}>Search</Text></TouchableOpacity>
              
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
  

inputContainerText: {
  color: "#000000",
  padding: 20,
  justifyContent: "center",
},
inputContainer: {
  width: "85%",
  backgroundColor: "#F6F6F6",
  borderRadius: 50,
  height: 55,
  marginBottom: 10,
  opacity: 0.45,
  marginTop:130
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
loginBtn: {
  width: "85%",
  backgroundColor: "#F6F6F6",
  borderRadius: 50,
  height: 50,
  alignItems: "center",
  marginBottom: 10,
  justifyContent: "center",
  marginTop: 5,

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 1,
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
  });