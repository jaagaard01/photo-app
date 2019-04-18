import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground} from 'react-native'
import LoginForm from './LoginForm'




export default class Login extends Component {
  render() {
    return (
      <View style ={styles.container}>
      <ImageBackground source = {require('../assets/images/LoginImage.png')} style={{width: '100%', height: '97%'}}>
        <View style={styles.logoContainer}>
            <Image 
            title="Logo"
            style= {styles.logo}
            source={require('../assets/images/SpotlightFinalLogo.png')}/>
            <Text style={styles.title}>Spotlight Media Photo App</Text>
            <View style={styles.formContainer}> 
            <LoginForm></LoginForm>
            </View>
        </View>
        </ImageBackground> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: { 
      flex: 1
        
        
        
    },
    logoContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      top: 40,
      
      
       
    }, 
    logo:{ 
    },
    title: {
      marginTop: 10,
      width: '80%',
      textAlign: 'center',
      opacity: 0.9,
      color: 'white',
      fontWeight: '800',
      fontSize: 30,
    }, 

    formContainer: {
      flex: 1,
      padding: 250,

    }
})
