import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export class MainMenu extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("ProfileTanaman")}>
          <Text style={styles.boxLabel}>Profil Tanaman</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("TambahkanTanaman")}>
          <Text style={styles.boxLabel}>Tambahkan Tanaman</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate("Setting")}>
          <Text style={styles.boxLabel}>Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text style={styles.boxLabel}>Logout</Text>
        </TouchableOpacity>
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
});
