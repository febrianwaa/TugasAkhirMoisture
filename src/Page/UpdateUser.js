import React, { Component } from 'react'
import { View,StyleSheet, Text,  TouchableOpacity, TextInput, Image } from 'react-native';
import axios from 'axios'


export class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.route.params.id,
            username: this.props.route.params.username,
            email: this.props.route.params.email,
            password: this.props.route.params.password,
        }
    }

    handleUpdate(){
        console.log(this.state)
        axios.put(`http://192.168.0.15:8080/user/updateUser/${this.state.id}`,this.state)
        .then( (response) => {
        //  console.log(response)
          alert(response.data)
          this.props.navigation.replace("Setting")
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    render() {
        return (
            <View style={styles.container}>

        <View style={styles.styleBACK}>
        <TouchableOpacity style={styles.styleBack} onPress={() => this.props.navigation.navigate("Setting")}>
        <Image style={{height: 30, width: 30}} source={require("../Images/back.png")}/>
        </TouchableOpacity>
        </View>

                <Text style={styles.text1}>Username </Text>
               <View style={styles.inputContainer}>
                <TextInput style={styles.inputContainerText} value={this.state.username} placeholder="Enter Username" onChangeText={(data)=>{this.setState({username:data})}}/>
                </View>

                
                <Text style={styles.text2}>Email </Text>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputContainerText} value={this.state.email} placeholder="Enter Email" onChangeText={(data)=>{this.setState({email:data})}}/>
                </View>

                
                <Text style={styles.text3}>Password </Text>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputContainerText} value={this.state.password} placeholder="Enter Password" onChangeonChangeText={(data)=>{this.setState({password:data})}}/>
                </View>


                <TouchableOpacity style={styles.loginBtn} onPress={this.handleUpdate.bind(this)}><Text style={{ color: "#31A05F", fontSize: 20, fontWeight: "bold" }}>Update</Text></TouchableOpacity>
             {/*   <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("App")}}><Text style={styles.title}>Cancel</Text></TouchableOpacity>*/}
            </View>
        )
    }
}

export default UpdateUser

const styles = StyleSheet.create({
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
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },


    text1: {
      color: "white",
      padding: 2,
      marginRight: "auto",
      marginRight: "50%",
    },
    text2: {
      color: "white",
      padding: 2,
      marginRight: "auto",
      marginRight: "56%",
    },
    text3: {
      color: "white",
      padding: 2,
      marginRight: "auto",
      marginRight: "50%",
    },
    inputContainer: {
      width: "70%",
      backgroundColor: "#F6F6F6",
      borderRadius: 10,
      height: 60,
      marginBottom: 5,
      opacity: 0.45,
    },
    inputContainerText: {
      color: "#000000",
      padding: 20,
      justifyContent: "center",
    },
    container: {
      flex: 1,
      backgroundColor: "#31A05F",
      justifyContent: "center",
      alignItems: "center",
    },
    loginBtn: {
      width: "70%",
      backgroundColor: "#F6F6F6",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      marginBottom: 10,
      justifyContent: "center",
      marginTop: 250,
  
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


 
