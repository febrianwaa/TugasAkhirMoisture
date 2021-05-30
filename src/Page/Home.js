import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {

    handlerLogin(){
        if(this.props.isLogin){
            this.props.navigation.navigate('MainMenu')
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    render() {
        return (
            <View>
               
                        <TouchableOpacity style={styles.box} onPress={()=>{this.handlerLogin()}}><Text style={styles.boxLabel}>Login</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("registrasi")}}><Text style={styles.boxLabel}>Registrasi</Text></TouchableOpacity>
                   
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin:state.UserReducer.isLogin
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    button:{
        padding:10,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    },
    box: {
        borderWidth: 7,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
      },
      boxLabel: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
        marginBottom: 5,
      },
  });