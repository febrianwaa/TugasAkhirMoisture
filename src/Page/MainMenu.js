import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { UserAction } from '../Redux/Action'
import PropTypes from 'prop-types'


class MainMenu extends Component {

    constructor (props){
        super(props)
        
    }

    handleLogout(){
        alert("Anda telah logout")
        this.props.UserAction("isLogin",false)
        this.props.navigation.navigate("Login")
    }

    componentDidMount(){
     //   console.log(JSON.stringify(this.props))
     if(!this.props.dataUser.isLogin){
        this.props.navigation.navigate('Login')
    }
    }
    // getData = ()=>{
    //     axios.get("")
    // }
    render() {
        return (
            <View>
            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("ProfileTanaman")}}><Text style={styles.boxLabel}>Profil Tanaman</Text></TouchableOpacity>   

            <TouchableOpacity style={styles.box} onPress={()=>{this.props.navigation.navigate("TambahkanTanaman")}}><Text style={styles.boxLabel}>Tambahkan Tanaman</Text></TouchableOpacity>   
            
            <TouchableOpacity style={styles.box} onPress={()=>{this.handleLogout()}}><Text style={styles.boxLabel}>Logout</Text></TouchableOpacity>
            
                
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataUser:state.UserReducer
})

const mapDispatchToProps = {
    UserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)

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
      boxText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      image: {
        width: 50,
        height: 40,
        alignContent: 'center',
      },
  });
