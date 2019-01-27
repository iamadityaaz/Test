/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Image, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInputLayout } from 'rn-textinputlayout';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      display: 'none'
    }
  }

  
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.boxContainer}>

      <View style={styles.boxOne}>
      <Image style = {{ width: 50,height: 50, alignSelf: 'center'}}
          source={require('/home/aditya/react-native/Test/ppp.png')}
        />
        <Text style = {{fontSize:24, color:'black', alignSelf: 'center'}}>
        Feel it
      </Text>
      </View>

      <View style = {styles.boxTwo}>
      
      <Text style = {{fontSize:28, fontWeight:'700', marginHorizontal: 18 , color:'black'}}>
        Welcome Back!
      </Text>

      <Text style = {{fontSize:14, marginHorizontal: 18, color:'#2c2c2c'}}>
        There is a lot to learn
      </Text>

      </View>


      <View style={styles.boxThree}>

      <TextInputLayout style = {styles.inputLayout}>
      <TextInput style = {{fontSize: 16, height: 40 }}
      placeholder={'Email'}>
      </TextInput>
      </TextInputLayout>

      <TextInputLayout style = {styles.inputLayout}>
      <TextInput style = {styles.textInput}
      placeholder={'Password'}
      secureTextEntry={true}
      onChangeText= {(text)=> this.setState({textLength : text.length}, showAlert = () =>{
        if(text.length > 7){
          // Works on both iOS and Android
          this.setState({display : 'flex'})
        }else{
          this.setState({display: 'none'})
        }
      })}>
      </TextInput>
      </TextInputLayout>

      <Text style = {{display: this.state.display, fontSize: 14, color: 'green', marginHorizontal: 18}}>
      Thats looks good!
      </Text>

      <Text style = {{fontSize:14, marginHorizontal: 18, marginVertical: 11 , color:'black', fontWeight: '300'}}>
        Forgot password ?
      </Text>

      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ffcc99' , '#6600ff']} style={styles.linearGradient}>
      <Text style = {styles.textStyle}>
      Log In
      </Text>
      </LinearGradient>

      </View>

      </View>

      </View>
    );
  }
}


const text1 = {
  enterusername:'User Name',
  enterpassword:'Enter Password'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  boxContainer:{
    flex: 1,
    flexDirection: 'column'
  },
  boxOne:{
    flex: 1,
    marginTop: 20,
    flexDirection: 'row'
  },
  boxTwo:{
    flex: 1
  },
  boxThree:{
    flex: 4
  },
  textInput: {
    fontSize: 16,
    height: 40
  },
  inputLayout: {
    marginTop: 16,
    marginHorizontal: 18,
    
  },
  linearGradient: {
    marginHorizontal: 18
  },
  textStyle:{
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 8,
    marginBottom: 8
  }
});
