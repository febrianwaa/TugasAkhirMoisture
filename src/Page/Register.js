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
        axios.post("http://192.168.0.15:8080/User/addUser/",this.props.dataRegis)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.replace("Home")
        }).catch((err)=>{
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

                <Text> Email </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Email"
                    onChangeText={(value)=>{this.props.UserAction("email",value)}}
                />

                <Text> Password </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Password"
                    onChangeText={(value)=>{this.props.UserAction("password",value)}}
                />
               
                <TouchableOpacity style={styles.box} onPress={()=>{this.handleInputData()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
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
      }
  });