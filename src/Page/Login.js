import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { UserAction } from "../Redux/Action";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin() {
    axios
      .get(`http://192.168.0.11:8080/user/login/`, {
        params: {
          username: this.state.username,
          password: this.state.password,
        },
      })
      .then((response) => {
        console.log(response.data);
        let data = response.data;
        if (data !== "") {
          this.props.UserAction("isLogin", true);
          this.props.UserAction("username", response.data.username);
          this.props.UserAction("id", response.data.id);
          alert("Login Berhasil");
          this.props.navigation.replace("Main Menu");
        } else {
          alert("Login Gagal");
          this.props.UserAction("isLogin", false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Username</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputContainerText}
            placeholder="Username"
            onChangeText={(value) => {
              this.setState({ username: value });
            }}
          />
        </View>
        <Text style={styles.text}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputContainerText}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(value) => {
              this.setState({ password: value });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.handleLogin();
          }}
        >
          <Text style={{ color: "#31A05F", fontSize: 20, fontWeight: "bold" }}>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUsername: state.UserReducer.username,
  dataPassword: state.UserReducer.password,
});

const mapDispatchToProps = {
  UserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
    padding: 2,
    marginRight: "auto",
    marginRight: "55%",
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
    marginTop: 250,

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
    marginBottom: 40,
    color: "white",
    opacity: 1.0,
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoContainer: {
    alignItems: "center",
  },
});
