import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {
   


    handlerLogin(){
        if(this.props.isLogin){
            this.props.navigation.navigate('Main Menu')
        }else{
            this.props.navigation.navigate('Login')
        }
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={require("../Images/LogoAPB.png")} style={styles.logo} />
              <Text style={styles.logoText}>Moisture Detector</Text>
            </View>
            <Text style={styles.text}>Protect our plants means protect nature, world, and future human race. So, let's make the world in wonderful.</Text>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={{ color: "#31A05F", fontSize: 20, fontWeight: "bold" }}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signup}
              onPress={() => {
                this.props.navigation.navigate("Register");
              }}
            >
              <Text Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
    

const mapStateToProps = (state) => ({
    isLogin:state.UserReducer.isLogin
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  
    button: {
      padding: 20,
    },
  
    text: {
      color: "white",
      padding: 5,
      marginRight: 60,
      marginLeft: 60,
      marginBottom: 10,
    },
  
    boxLabel: {
      textTransform: "uppercase",
      fontSize: 17,
      letterSpacing: 1,
      marginBottom: 5,
    },
  
    box: {
      borderWidth: 3,
      borderColor: "#ddd",
      padding: 15,
      marginBottom: 10,
      alignItems: "center",
    },
  
    signup: {
      width: "70%",
      fontSize: 16,
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 2,
      backgroundColor: "#17A351",
      marginBottom: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
  
    loginBtn: {
      width: "70%",
      backgroundColor: "#F6F6F6",
      borderRadius: 10,
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
  
    logoText: {
      fontSize: 25,
      fontWeight: "500",
      color: "white",
      opacity: 1.0,
    },
    logo: {
      width: 250,
      height: 250,
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: 100,
      marginTop: -120,
    },
  });