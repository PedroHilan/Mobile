import React, {Component, useState, useEffect } from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, Text, TouchableOpacity, StyleSheet, Animated, Keyboard} from 'react-native'
import api from '../services/api';

  export default class Login extends Component {
    static navigationOptions = {  
        title: "",
        headerStyle: { backgroundColor: '#dc3545' },
        headerTintColor: '#fff'
    }

    state = {
      errorMessage: null
    }

    signIn = () => {
      api.post('/tecnicos?token=6109AE5E94E0D1574C8DCEE83201DBF3F5C1B31D80F8148A31DF3586247FE6E9',{
        nome: 'carlos yago eufrasio de mesquita',
        cpf: '048.567.193-00'
      }).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
    
    render(){
      return(
            <KeyboardAvoidingView style={styles.background}>

            <View style={styles.image}>
              <Image 
               style={{
                width: 290,
                height: 180
              }}
              source={require("../assets/image/logo_mob.jpeg")}/>
            </View>
         
            {this.state.errorMessage && <Text>{ this.state.errorMessage }</Text>}
          <View style={styles.fundo}>
  
            <View style={styles.container}>
              <TextInput style={styles.input}
                placeholder = "  Município"
                autoCorrect = {false}
                onChangeText={() => {}}
              />
  
              <TextInput style={styles.input}
                placeholder = "  *******"
                autoCorrect = {false}
                onChangeText={() => {}}
              />
  
              <TouchableOpacity style={styles.button}
              onPress={this.signIn}>
                <Text style={styles.button_text}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>

            <View style={styles.hr}></View>
            <View style={styles.footer}>
             <Text>© 2020 - Alpha </Text>
            </View>
  
          </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    fundo:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor : "white"
    },
    background:{
      flex : 1,
      backgroundColor : "white"
    },
    hr:{
        backgroundColor : "#6c757d",
        padding: "0.1%"
      },
    image:{
      padding: "1%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    container:{
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      borderRadius: 10,
      paddingTop: 20,
      paddingBottom: 20    
    },
    input:{
      color: "black",
      backgroundColor: "#C0C0C0",
      width: "90%",
      marginBottom: 15,
      borderRadius: 20,
      fontFamily: "Ubuntu-Bold"
    },
    button:{
      backgroundColor: "#dc3545",
      borderRadius: 20,
      width: "90%",
      alignItems: "center",
      justifyContent: "center",
      padding: 10
    },
    button_text:{
      color: "white",
      fontSize: 18,
      fontFamily: "Ubuntu-Bold"
    },
    footer:{
      alignItems: "center",
      justifyContent: "center"
    }
  })