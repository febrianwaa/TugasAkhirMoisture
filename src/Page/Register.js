import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserAction } from '../Redux/Action'
import axios from 'axios'

class Register extends Component {

    constructor(props){
        super(props)
    }

    handleInputData(){
        axios.post("http://192.168.0.15:8080/user/addUser/",this.props.dataRegis)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.replace("Home")
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.InputText}
                    placeholder="Username"
                    onChangeText={(value)=>{this.props.UserAction("username",value)}}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.InputText}
                    placeholder="Email"
                    onChangeText={(value)=>{this.props.UserAction("email",value)}}
                />
                </View>
                <View style={styles.inputContainer}>
                <TextInput
                    style={styles.InputText}
                    placeholder="Password"
                    onChangeText={(value)=>{this.props.UserAction("password",value)}}
                />
               </View>
                <TouchableOpacity style={styles.submitBtn} onPress={()=>{this.handleInputData()}}><Text style={{color:'white', fontSize:16}}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRegis:state.UserReducer
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

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
        fontSize: 16,
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
        marginHorizontal: 20,
        
      },
      container:{
        flex:1,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems:'center'
    },
    submitBtn:{
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
    }
  });