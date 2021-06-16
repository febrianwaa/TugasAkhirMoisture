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
      <View>
        <Text> Name </Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Nama"
          onChangeText={(value) => {
            this.setState({ name: value });
          }}
        />

        <Text> Alat yang terdeteksi </Text>
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

<Picker
                    selectedValue={this.state.plantsDetail.id_arduino}
                    mode="dropdown"
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue, itemIndex) => this.pickerChange(itemIndex)}>
                        
                        {
                        this.state.dataAlat.map( (v)=>{
                         return <Picker.Item label={v.id_arduino.toString()} value={v.id_arduino} />
                        })
                        }

                </Picker>


        <Button
          title="Pick an image from camera roll"
          onPress={() => {
            this.pickImage()
          }}
        />
        <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200, alignSelf: "center" }} />

        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            this.handleInputData()
          }}
        >
          <Text style={styles.boxLabel}>Submit</Text>
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
});
