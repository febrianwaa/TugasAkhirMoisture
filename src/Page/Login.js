import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserAction } from '../Redux/Action'
import axios from 'axios'


class Login extends Component {
    constructor(props){
        super(props)
    }

    handleLogin(){
        axios.get('http://192.168.0.15:8080/user/login/',{
            params:{
                username:this.props.dataUsername,
                password:this.props.dataPassword,
            }
        })
        .then((response) =>{
            let data=response.data;
            if(data !== ""){
                this.props.UserAction("isLogin", true)
                this.props.UserAction(data,"dataUser")
                alert("Login Berhasil")
                this.props.navigation.navigate('MainMenu')
            }else{
                alert("Login Gagal")
                this.props.UserAction("isLogin",false)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={require("../Images/logo.jpeg")} style={styles.logo}/>




                        {/* <Image source={{uri:'https://ak.picdn.net/shutterstock/videos/1027610672/thumb/11.jpg'}} style={styles.logo}/> */}
                        <Text style={styles.logoText}>Moisture Detector</Text>
                    </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Username"
                    onChangeText={(value)=>{this.props.UserAction("username",value)}}
                /> 
                </View> 
                <View style={styles.inputContainer}> 
                <TextInput
                    style={styles.inputText}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value)=>{this.props.UserAction("password",value)}}
                /> 
                </View>             
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.handleLogin()}}><Text style={{color:'white', fontSize:16}}>Log in</Text></TouchableOpacity>
                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Register')}}><Text style={styles.signup}>Register</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataUsername:state.UserReducer.username,
    dataPassword:state.UserReducer.password
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding:20,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    },
    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 17,
        letterSpacing: 1,
        marginBottom: 5,
      },
      box: {
        borderWidth: 3,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
      },




      InputText:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        paddingLeft: 20,
        marginHorizontal: 20
    },
    signup:{
        fontSize:16,
        color:'#003f5c'
    },
    loginBtn:{
      width:'70%',
      backgroundColor:'#465881',
      borderRadius:25,
      height: 50,
      alignItems: 'center',
      marginBottom:10,
      justifyContent:'center',
      marginTop:40
    },
    inputContainer:{
        width:'60%',
        backgroundColor:'#465881',
        borderRadius:20,
        height: 60,
        marginBottom:20,
        justifyContent:'center',
        padding:20
    },
    container:{
        flex:1,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems:'center'
    },
    logoText:{
        fontSize:20,
        fontWeight:'500',
        marginBottom:40,
        marginTop:10,
        color:'white',
        opacity:1.0
    },
    logo:{
        width:200,
        height:200
    },
    logoContainer: {
        alignItems:'center'
    }
  });