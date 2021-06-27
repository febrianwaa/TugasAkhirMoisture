import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from "react-native";
import { Svg, Path } from "react-native-svg";


export class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.style20}>  Menu  </Text>

        <View style={{alignItems: "center",  width: "40%", marginBottom: 10, marginTop:120}}>
        <TouchableOpacity style={styles.style19} onPress={() => this.props.navigation.navigate("ProfileTanaman")}>
        <Image style={{height: 145, width: 150}} source={require("../Images/MyPlant.png")}/>
        </TouchableOpacity>
        </View>

        <View style={{alignItems: "center",justifyContent: "center",  width: "120%", marginBottom: 10, marginTop:47}}>
      	<TouchableOpacity style={styles.style15} onPress={() => this.props.navigation.navigate("Setting")}>
        <Image style={{height: 155, width: 150}} source={require("../Images/Profile.png")}/>
        </TouchableOpacity>
				</View>	

        <View style={{alignItems: "center",justifyContent: "center",  width: "40%", marginBottom: 10, marginTop:140}}>
      	<TouchableOpacity style={styles.style19} onPress={() => this.props.navigation.navigate("TambahkanTanaman")}>
        <Image style={{height: 150, width: 150}} source={require("../Images/AddPlant.png")}/>
        </TouchableOpacity>
				</View>	

        <View style={{alignItems: "center",justifyContent: "center",  width: "120%", marginBottom: 10, marginTop:-5}}>
      	<TouchableOpacity style={styles.style15} onPress={() => this.props.navigation.navigate("glosarium")}>
        <Image style={{height: 153, width: 150}} source={require("../Images/Glosarium.png")}/>
        </TouchableOpacity>
				</View>	

        <View style={{justifyContent: "center",  width: "87%", marginBottom: 10, marginTop:-235, marginLeft:220}}>
      	<TouchableOpacity style={styles.style15} onPress={() => this.props.navigation.navigate("Login")}>
        <Image  source={require("../Images/Logout.png")}/>
        </TouchableOpacity>
				</View>	

        

        {/* <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("Profile Tanaman")}>
          <Text style={styles.boxLabel}>Profile Tanaman</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("TambahkanTanaman")}>
          <Text style={styles.boxLabel}>Tambahkan Tanaman</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("Setting")}>
          <Text style={styles.boxLabel}>Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxLabel}>Logout</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default MainMenu;

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  text: {
    textAlign: "center",
    borderWidth: 5,
  },
  box: {
    borderWidth: 7,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  boxLabel: {
    textTransform: "uppercase",
    fontSize: 16,
    letterSpacing: 1,
    marginBottom: 5,
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 40,
    alignContent: "center",
  },






  style20: {
    width: 147,
    height: 54,
    position: "absolute",
    
    left: 28,
    top: 80,
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
    style19: {
      width: 95,
      height: 95,
      position: "absolute",
      transform: [
        {translateX: 26},
        {translateY: 25},
      ],
      shadowColor: "rgba(0,0,0,0)",
      },

      container: {
        flex: 1,
    backgroundColor: '#31A05F',
   
      },

      inputContainer: {
        width: "70%",
        backgroundColor: "#F6F6F6",
        borderRadius: 10,
        height: 60,
        marginBottom: 5,
        opacity: 0.45,
      },
      style15: {
        width: 120,
        height: 99,
        position: "absolute",
        transform: [
          {translateX: 26},
          {translateY: 20},
        ],
        shadowColor: "rgba(0,0,0,0)",
        },
        style7: {
          width: 99,
          height: 99,
          position: "absolute",
          transform: [
            {translateX: 24},
            {translateY: 20},
          ],
          shadowColor: "rgba(0,0,0,0)",
          },
          style11: {
            width: 95,
            height: 95,
            position: "absolute",
            transform: [
              {translateX: 24},
              {translateY: 11},
            ],
            shadowColor: "rgba(0,0,0,0)",
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
});
