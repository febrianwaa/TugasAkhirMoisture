import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class Setting extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [],
            value:""
        };

      }

    componentDidMount(){
     this.getData();
    }

    // componentDidUpdate(){
    //   this.getData();
    // }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.16:8080/user/`)
        .then( (response) => {
       //   console.log(response.data)
          let data=response.data;   
          this.setState({data:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
        // .then(function () {
        // // always executed
        // });
    }
    
   

    deleteData(id){
      axios.delete(`http://192.168.0.16:8080/user/deleteUser/${id}`)
      .then( (response) => {
        alert(response.data)
      })
    .catch(function (error) {
      // handle error
       console.log(error);
      })
    }

    renderItem = ({ item }) => (
        <View style = {{borderWidth:5, borderColor:"black"}}>
            <Text style={styles.title}>Username : {item.username}</Text>
            <Text style={styles.title}>Email :{item.email}</Text>
            <Text style={styles.title}>Password :{item.password}</Text>
           
            <TouchableOpacity onPress={()=>{this.props.navigation.replace("UpdateUser",item)}} style={styles.button}><Text style={styles.title}>Update</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{Alert.alert('Anda yakin?','Tindakan ini akan menghilangkan data',
            [{text: 'TIDAK', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
            {text: 'YA', onPress: () => this.deleteData(item.id)},])}} style={styles.button}>
              <Text style={styles.title}>Delete</Text>
            </TouchableOpacity>
        </View>
    )

    

    render() {
        return (
            <SafeAreaView style={styles.container}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
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
      margin:10,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });
  
