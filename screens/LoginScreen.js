import React, {Component} from 'react';
import styled from "styled-components/native";
import {Button} from 'react-native-elements';
import Login from '../LogInComponents/Login'



import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';



const ScreenView = styled.View `
`

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
 

  render() {
  return ( 
    <ScreenView style={{flex: 1}}>
      <Login></Login>

    </ScreenView>
  ) 
}
}