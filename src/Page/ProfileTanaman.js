import React, { Component } from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, Alert, Image } from 'react-native';
import axios from 'axios'


export default class ProfileTanaman extends Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            data: [{}]
        };

      }

    componentDidMount(){
     this.getData();
    }

    getData =()=>{  
        //Make a request for a user with a given ID
        axios.get(`http://192.168.0.11:8080/plants/`)
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


//     render() {
//       return (
//           <View>
//               <FlatList
//                   data={this.state.data}
//                   keyExtractor={item=>parseInt(item.id)}
//                   renderItem={({item})=>(
//                     <View>
//                        {/* <TouchableOpacity style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}} onPress={()=>{this.props.navigation.navigate("DetailCalonTinder")}}> */}
//                           <Image style={{width:100,height:100}}
//                               source={{uri:`http://192.168.0.11:8080/plants/image/${item.image}`}}
//                           />
//                           <View style={{flexDirection:"column",alignSelf:"center"}}>
                              
//                               <Text>Name : {item.name}</Text>
//                               <Text>Status : {JSON.stringify(item.plantsDetail)}</Text>
                              
//                           </View>
//                       {/*  </TouchableOpacity> */}
//                       </View>
//                   )}
//               />
//           </View>
//       )
//   }
// }






    renderItem = ({ item }) => (
            <View style={{borderWidth:5,borderColor:"black",flexDirection:"row",margin:5}}>
              <Image style={{width:100,height:100}}
                                source={{uri:`http://192.168.0.11:8080/plants/image/${item.image}`}}
                            />
            <View style ={{flexDirection:"column",alignSelf:"center"}}>
            <Text style={styles.title}>Name : {item.name}</Text>
            <Text style={styles.title}>Status :{JSON.stringify(item.plantsDetail)}</Text>
            </View>
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
    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: 5,
      },
  });