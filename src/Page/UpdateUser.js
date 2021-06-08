import React, { Component } from 'react'
import { View,StyleSheet, Text,  TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios'
import { parse } from '@babel/core'; 

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
        axios.put(`http://192.168.0.14:8080/user/updateUser/${this.state.id}`,this.state)
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
            <View>
                <Text style={styles.title}> Input Username </Text>
                <TextInput value={this.state.nama} placeholder="Username" onChangeText={(data)=>{this.setState({username:data})}}/>
                <Text style={styles.title}> Input Email </Text>
                <TextInput value={this.state.email} placeholder="Email" onChangeText={(data)=>{this.setState({email:data})}}/>
                <Text style={styles.title}> Input Password </Text>
                <TextInput value={this.state.phone} placeholder="Password" onChangeonChangeText={(data)=>{this.setState({password:data})}}/>
               
                <TouchableOpacity style={styles.button} onPress={this.handleUpdate.bind(this)}><Text style={styles.title}>Update</Text></TouchableOpacity>
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
  });


 
