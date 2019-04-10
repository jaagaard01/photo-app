import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const TotalView= Styled.View `
`

const FormView = Styled.form `

`

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
  return ( 
      <TotalView>
          <FormView>
             <label name={"Username"}>User Name</label>
             <input type="text" placeholder="User Name:"></input>
             <label name={'password'}>Password</label>
             <input type="password" placeholder="enter password" required></input>
             <button></button>
          </FormView>
      </TotalView>
  ) 
}
}