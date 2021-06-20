import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";

class TambahkanTanaman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "../Images/LogoAPB.png",
      dataAlat: [ 
     { "id": 1,
      "id_arduino": 123,
      "soil_moisture": 1234,
     }  
      ],
      plantsDetail: {
        "id": 1,
        "id_arduino": 123,
        "soil_moisture": 1234,
      },
      idUser:this.props.dataUser,
    };
  }

  componentDidMount() {
    this.getPermission();

    axios
      .get(`http://192.168.0.11:8080/detail/`)
      .then((response) => {
        this.setState({ dataAlat: response.data });
      })
      .then(function (error) {
        console.log(error);
      });
  }

  async getPermission() {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  async pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result.uri);
      this.setState({ image: result.uri });
    }
  }

  handleInputData() {
    let formData = new FormData();
    let filename = this.state.image;
    console.log("nama gambar " + filename.split("/").pop());
    formData.append("data", JSON.stringify(this.state));
    formData.append("file", {
      uri: this.state.image, //Your Image File Path
      type: "image/jpeg",
      name: filename.split("/").pop(),
    });

    axios
      .post("http://192.168.0.11:8080/plants/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        alert(response.data);
        this.props.navigation.replace("Main Menu");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  pickerChange(index){
    this.state.dataAlat.map( (v,i)=>{
     if( index === i ){
       this.setState({
       plantsDetail: this.state.dataAlat[index]
      })
     }
    })
}





  render() {
    console.log(this.state.plantsDetail);
    return (
      <View style={styles.container}>

        <View style={styles.styleBACK}>
        <TouchableOpacity style={styles.styleBack} onPress={() => this.props.navigation.navigate("Main Menu")}>
        <Image style={{height: 30, width: 30}} source={require("../Images/back.png")}/>
        </TouchableOpacity>
        </View>


        <Text style={styles.text}> Plant Name </Text>
        <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputContainerText}
          placeholder="Enter Plant Name"
          onChangeText={(value) => {
            this.setState({ name: value });
          }}
        />
      </View>

        <Text style={styles.text}> Sensor Code </Text>
        {/* <FlatList
          data={this.state.dataAlat}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>Id Arduino : {item.id_arduino}</Text>
              <TouchableOpacity onPress={() => this.setState({ plantsDetail: item.id_arduino })}>
                <Text>Pilih</Text>
              </TouchableOpacity>
            </View>
          )}
        /> */}


{/* <Picker
    selectedValue={this.state.plantsDetail.id_arduino}
    mode="dropdown"
    style={{ height: 50, width: 300 }}
    onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>
        
        {
        this.state.dataAlat.map( (v)=>{
         return <Picker.Item label={v.id_arduino.toString()} value={v.id_arduino} key={v.id}/>
        })
        }

</Picker> */}
<View style={styles.inputContainer}>
<Picker
                    style={styles.inputContainerText}
                    selectedValue={this.state.plantsDetail.id_arduino}
                    mode="dropdown"
                   // style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>
                        
                        {
                        this.state.dataAlat.map( (v)=>{
                         return <Picker.Item label={v.id_arduino.toString()} value={v.id_arduino} />
                        })
                        }

                </Picker>
                </View>

        {/* <Button style={styles.imageBtn}
          title="Image"
          onPress={() => {
            this.pickImage()
          }}
        />
        <Image source={{ uri: this.state.image }} style={{ width: 150, height: 150, alignSelf: "center" }} /> */}
        <View style={{width: "70%", marginTop:5}}>
        <TouchableOpacity style={styles.imageBtn}
         // title="Image"
          onPress={() => {
            this.pickImage()
          }}
        >
         <Text style={{ color: "#31A05F", fontSize: 20, fontWeight: "bold" }}>Image</Text>
         </TouchableOpacity>
         </View>
         <Image source={{ uri: this.state.image }} style={{ width: 150, height: 150, alignSelf: "center" }} />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            this.handleInputData()
          }}
        >
          <Text style={{ color: "#31A05F", fontSize: 20, fontWeight: "bold" }}>Add Plant</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataUsername: state.UserReducer.username,
  dataId: state.UserReducer.id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TambahkanTanaman);

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
    textAlign: "center",
    borderWidth: 5,
  },
  boxLabel: {
    textTransform: "uppercase",
    fontSize: 16,
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


  container: {
    flex: 1,
    backgroundColor: "#31A05F",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "70%",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    height: 60,
    marginBottom: 10,
    opacity: 0.45,
  },
  inputContainerText: {
    color: "#000000",
    padding: 20,
    justifyContent: "center",
  },
  text: {
    color: "white",
    padding: 2,
    marginRight: "auto",
    marginRight: "55%",
  },
  loginBtn: {
    width: "70%",
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
    marginTop: 70,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  style16: {
    width: 293,
    height: 72,
    position: "absolute",
    left: 41,
    top: 188,
    transform: [
      {translateX: 0},
      {translateY: 0},
    ],
    shadowColor: "rgba(0,0,0,0)",
    },
  style17: {
    width: 85,
    height: 14,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [
      {translateX: -99.5},
      {translateY: 12},
    ],
    shadowColor: "rgba(0,0,0,0)",
    color: "rgb(255, 255, 255)",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 14.0625,
    fontFamily: "Roboto",
    textAlign: "left",
    },

    styleBACK: {
      width: 140,
      height: 54,
      position: "absolute",
      
      left: 28,
      top: 50,
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
      styleBack: {
        width: 95,
        height: 95,
        position: "absolute",
        transform: [
          {translateX: 26},
          {translateY: 25},
        ],
        shadowColor: "rgba(0,0,0,0)",
        },
          imageBtn: {
            width: "30%",
            backgroundColor: "#F6F6F6",
            borderRadius: 10,
            height: 30,
            alignItems: "center",
            marginBottom: 10,
            justifyContent: "center",
            marginTop: 15,
        
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
          },
});
