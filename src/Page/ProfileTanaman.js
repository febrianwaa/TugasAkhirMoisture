import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export class ProfileTanaman extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
          dataFlatList:{}
        };

      }

    componentDidMount(){
     this.getData();
    }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.15:8080/plants/`)
        .then( (response) => {
       //   console.log(response.data)
          let data=response.data;
          console.log(data)   
          this.setState({dataFlatList:data}); 
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
        // .then(function () {
        // // always executed
        // });
    }


    render() {
      return (
          <View>
              <FlatList
                  data={this.state.dataFlatList}
                  keyExtractor={item=>parseInt(item.id)}
                  renderItem={({item})=>(
                    <TouchableOpacity style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}} onPress={()=>{this.props.navigation.navigate("DetailTanaman")}}>
                          <Image style={{width:100,height:100}}
                              source={{uri:`http://192.168.0.15:8080/plants/image/${item.image}`}}
                          />
                          <View style={{flexDirection:"column",alignSelf:"center"}}>
                              
                              <Text>Name : {item.name}</Text>
                          </View>
                     </TouchableOpacity>
                  )}
              />
          </View>
      )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTanaman)

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
    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 5,
      },
  });