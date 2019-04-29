//// This will be renamed to home page upon completion.
import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, View, Dimensions, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer, Navigation } from 'react-navigation';
import { Button } from 'react-native-elements';
import { WebBrowser } from 'expo';
import styled from 'styled-components/native'; /// import styled view managment

import { MonoText } from '../components/StyledText';

import SettingsScreen from './SettingsScreen';
import ShootOptions from './ShootOptions';
// const screenWidth = Dimensions.get('window').width;

const MainNavigator = createStackNavigator({
  Settings: SettingsScreen,
  ShootNow: ShootOptions,

});

export const App = createAppContainer(MainNavigator);

const TotalView = styled.View`
height: 95%

`;



const MenuView = styled.View`

justifyContent: space-between;
alignItems: center
`;
const ButtonView = styled.View`
alignItems: center
`;


const TopHalfView = styled.View`
height: 55%;
`;

const BottomHalfView = styled.View`
height: 45%;
width: 95%;
color: #FAFAFA;
justifyContent: space-evenly;
marginLeft: 10

`;
export default class HomeScreen extends React.Component {


  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <TotalView>
        <ImageBackground title="Homepage Logo"
          source={require('../constants/HomePageLogo.png')}
          style={{}} /// Insert Terniary to upload employee image Here
        ><TopHalfView>
            <Image title="Profile Picture"
              source={require('../assets/images/Temporary.png')}
              style={{ height: 100, width: 100, borderRadius: 50, alignSelf: "center", marginVertical: 100, }} /// Insert Terniary to upload employee image Here
            />


          </TopHalfView>
        </ImageBackground>
        <BottomHalfView style={{ justifyContent: 'space-between', }}>

          <MenuView style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <ButtonView>
              <TouchableHighlight
                onPress={() =>
                  navigate("CalendarScreen")
                }
                className="home-screen buttons" buttonStyle={{ height: 70, width: 70, borderRadius: 35 }} >
                <Image title="Schedule" source={require('../assets/images/Schedule.png')} />
              </TouchableHighlight>
              <Text style={{ alignSelf: 'center' }}>Schedule</Text>
            </ButtonView>
            <ButtonView>
              <TouchableHighlight
                onPress={() =>
                  navigate("ShootNow")
                } className="home-screen buttons" buttonStyle={{ height: 70, width: 70, borderRadius: 35 }}>
                <Image title="ShootNow" source={require('../assets/images/ShootNow.png')} /></TouchableHighlight>
              <Text style={{ alignSelf: 'center' }}>Shoot Now</Text>
            </ButtonView>
            <ButtonView>

              <TouchableHighlight
                onPress={() =>
                  navigate("EditScreen")
                }
                className="home-screen buttons" buttonStyle={{ height: 50, width: 50, borderRadius: 25 }}
              >
                <Image title="Edit/Submit" source={require('../assets/images/EditSubmit.png')} /></TouchableHighlight>
              <Text style={{ alignSelf: 'center' }}>Edit / Submit</Text>
            </ButtonView>
          </MenuView>
          <MenuView style={{ flexDirection: "row", justifyContent: "space-evenly" }} textStyle={{ textAlign: "center", flex: "wrap" }}>
            <ButtonView>
              <TouchableHighlight
                onPress={() =>
                  navigate("ConnectCameraScreen")
                }
                className="home-screen buttons" buttonStyle={{ height: 70, width: 70, borderRadius: 35 }} >
                <Image title="Connect Camera" source={require('../assets/images/ConnectCamera.png')} /></TouchableHighlight>
              <Text style={{ alignSelf: 'center' }}>Connect Camera</Text>
            </ButtonView>
            <ButtonView>
              <TouchableHighlight
                onPress={() =>
                  navigate("MyShootsScreen")
                }
                className="home-screen buttons" buttonStyle={{ height: 70, width: 70, borderRadius: 35 }}>
                <Image title="My Photo Shoots" source={require('../assets/images/PhotoShoots.png')} /></TouchableHighlight>
              <Text style={{ alignSelf: 'center' }}>My Photo Shoots</Text>
            </ButtonView>
            <ButtonView>
              <TouchableHighlight
                onPress={() =>
                  navigate("Settings")
                } className="home-screen buttons" buttonStyle={{ height: 70, width: 70, borderRadius: 35 }}>
                <Image title="Settings" source={require('../assets/images/Settings.png')} /></TouchableHighlight>
              <Text style={{ alignSelf: 'center' }}>Settings</Text>
            </ButtonView>
          </MenuView>

        </BottomHalfView>
      </TotalView>
    );
  }



}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 35,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 70,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
