import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Button, TouchableHighlight} from 'react-native'


export default class LoginForm extends Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        <TextInput
        placeholder="Username"
        placeholderTextColor = "black"
        returnKeyType = "next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType='email-address'
        autoCorrect={false}
        
        style ={styles.input}>
        
        </TextInput>
        <TextInput
        placeholder= "Password" 
        placeholderTextColor = "black"
        secureTextEntry
        returnKeyType = "go"
        style ={styles.input}
        ref= {(input) => this.passwordInput = input}>
        </TextInput>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonText}><Text>Login</Text></TouchableOpacity>
        </View>
        <View style={{height: 35,
          width: 240,
          paddingVertical: 50,
          justifyContent: 'center',}}>
        <TouchableOpacity style={{ alignItems: 'center',
          color: 'black',
          fontWeight: '700', 
          backgroundColor: 'white',
          height: 30,
          width: 340,
          borderRadius:6,
          paddingHorizontal: 10, 
          paddingVertical: 5,
          fontFamily: 'Cochin'}}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
        </View>
        
      
      </KeyboardAvoidingView> 
    )
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 380,
        flex: 1,
        borderRadius:6,
       
    },
    input: {
        height: 35,
        backgroundColor: 'white',
        marginBottom: 5,
        color: "black", 
        paddingHorizontal: 10, 
        fontFamily: 'Cochin',
        borderRadius:6,
       

    },
    buttonContainer:{
      height: 35,
      width: 240,
      paddingVertical: 50,
      justifyContent: 'center',
      
      
      
        
        
    },
    buttonText: {
        alignItems: 'center',
        color: '#FFFFFF',
        fontWeight: '700', 
        backgroundColor: '#FF6761',
        height: 30,
        width: 340,
        borderRadius:6,
        paddingHorizontal: 10, 
        paddingVertical: 5,
        fontFamily: 'Cochin',
        
    },

})

