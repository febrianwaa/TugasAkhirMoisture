import React, { Component } from 'react'
import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { PlantsAction } from '../Redux/Action'
import axios from 'axios'

class TambahkanTanaman extends Component {

    constructor(props){
        super(props)
    }

    handleInputData(){
        axios.post("http://192.168.0.15:8080/plants/addPlants/",this.props.dataPlants)
        .then((response)=>{
            alert(JSON.stringify(response.data));
            this.props.navigation.replace("MainMenu")
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View>
                <Text> Name Tanaman </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Name Tanaman"
                    onChangeText={(value)=>{this.props.PlantsAction("name",value)}}
                />

                <Text> Humidity </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Masukan Humidity"
                    onChangeText={(value)=>{this.props.PlantsAction("humidity",value)}}
                />

               
               
                <TouchableOpacity style={styles.box} onPress={()=>{this.handleInputData()}}><Text style={styles.boxLabel}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataPlants:state.PlantsReducer
})

const mapDispatchToProps = {
    PlantsAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TambahkanTanaman)

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    button:{
        padding:20,
    },
    text:{
        textAlign:'center',
        borderWidth:5,
    },
    boxLabel: {
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
        marginBottom: 5,
      },
    
      box: {
        borderWidth: 3,
        borderColor: '#ddd',
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
      }
  });