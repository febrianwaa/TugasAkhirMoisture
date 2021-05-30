import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
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
            <View>
                <Text> Username </Text> 
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Username"
                    onChangeText={(value)=>{this.props.UserAction("username",value)}}
                />  
                <Text> Password </Text> 
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Password"
                    onChangeText={(value)=>{this.props.UserAction("password",value)}}
                />              
                <TouchableOpacity style={styles.box} onPress={()=>{this.handleLogin()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            
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
      }
  });