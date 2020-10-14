
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {View, KeyboardAvoidingView, Image, TextInput, Text, TouchableOpacity, StyleSheet, Animated, Keyboard } from 'react-native';

const MainLogin: () => React$Node = () => {

  const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:325, y:90}));
  
  useEffect(() => {
    keybordDidShowListener = Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    keybordDidHideListener = Keyboard.addListener("keyboardDidHide", keyboardDidHide);
    
    //parallel serve para executar 2 ou mais animações ao mesmo tempo
    Animated.parallel([
      //animação que exibi o form de login subindo
      Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 15,
      useNativeDriver: false
      }),
      //animação que mostra o form de login ficando visível
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      })
    ]).start()
    
  }, []);

  //funçao que anima a imagem para diminuir quando o teclado estiver aberto
  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(logo.y,{
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  }
  //funçao que anima a imagem para aumentar quando o teclado estiver fechado
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 325,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(logo.y,{
        toValue: 90,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  }
  return ( 
    <>
        <KeyboardAvoidingView style={styles.background}>

          <View style={styles.image}>
            <Animated.Image 
            style={{
              width: logo.x,
              height: logo.y
            }}
            source={require("./src/assets/image/logo_gov.png")}/>
          </View>
          <View style={styles.hr}></View>
       
        <Animated.View 
          style={[
            styles.fundo,
              {
                opacity: opacity,
                transform: [
                  {translateY: offset.y}
                ]
              }
            ]}>
          <View>
            <Text style={styles.container2_text}>Realize seu Login</Text>
          </View>

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

            <TouchableOpacity style={styles.button}>
              <Text style={styles.button_text}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

          <View style={styles.hr}></View>
          <View style={styles.footer}>
           <Text>© Copyright 2020 Superintendência de Fortaleza </Text>
            <Text>All rights reserved.</Text>
          </View>

        </KeyboardAvoidingView>
    
    </>
  );
};

const styles = StyleSheet.create({
  fundo:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor : "rgba(52,130,0,1)"
  },
  background:{
    flex : 1,
  },
  image:{
    padding: "1%",
    width: "90%"
  },
  hr:{
    backgroundColor : "#ea7b00",
    padding: "1%"
  },
  container:{
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20    
  },
  container2_text:{
    color: "white",
    fontSize: 30,
    fontFamily: "Ubuntu-Bold"
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
    backgroundColor: "#57b846",
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

export default MainLogin;
