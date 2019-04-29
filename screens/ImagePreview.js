import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  navigation,
  Image,
  TextInput,
  TouchableHighlight
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import styled from "styled-components/native";

const TotalView = styled.View`
border: 1px solid blue
height: 100%
`;
const TopView = styled.View``;
const PicView = styled.View`
alignItems: center;
paddingTop: 30;
border: 1px solid red 
height: 40%
`;
const StyledText = styled.Text`
  fontSize: 10
  width: 85
  alignItems: center
  justifyContent: center
`;
const ButtonView = styled.View`
border: 1px solid orange
height: 8%
width: 100%
marginTop: 35

`;

const NameView = styled.View`
border: 1px solid green
height: 8%
width: 100%
`;
const NotesView = styled.View`
height: 25%
width: 100%
border: 2px solid red 

`;

export default class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Change Name" };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Name of shoot"
    };
  };

  render() {
    return (
      <TotalView>
        <TopView
          style={{
            borderColor: "black",
            borderWidth: 0.5,
            height: "12%",
            alignContent: "center",
            flexDirection: "column"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingTop: 8
            }}
          >
            <Text style={styles.MainText}>object</Text>
            <Text style={styles.MainText}>object </Text>
            <Text style={styles.MainText}>object</Text>
            <Text style={styles.MainText}>object</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <StyledText style={{ paddingLeft: 30 }}>Flash</StyledText>
            <StyledText style={{ paddingLeft: 7 }}>Shutter Speed</StyledText>
            <StyledText style={{ paddingLeft: 18 }}>Aperture</StyledText>
            <StyledText style={{ paddingLeft: 30 }}>ISO</StyledText>
          </View>
        </TopView>

        <PicView>
          <Image
            style={{
              borderColor: "black",
              borderWidth: 0.5,
              height: "100%",
              width: "90%"
            }}
          />
        </PicView>

        <NameView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View
            style={{
              borderColor: "red",
              borderWidth: 1,
              flexDirection: "column",
              height: "100%",
              width: "38%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20
            }}
          >
            <Text
              style={{
                fontSize: 20,
                alignItems: "center",
                color: "#4C5264",
                fontWeight: "bold"
              }}
            >
              Name.Picture
            </Text>
          </View>
          <View
            style={{
              borderColor: "red",
              borderWidth: 1,
              height: "100%",
              width: "38%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 20
            }}
          >
            <TextInput
              style={{
                fontSize: 20,
                alignItems: "center",
                color: "#4C5264",
                fontWeight: "bold"
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              maxLength={18}
            />
          </View>
        </NameView>

        <ButtonView
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <TouchableHighlight
            style={styles.LeftButton}
            onPress={() => {}}
            underlayColor="#DCE0DC"
          >
            <View
              style={{
                flexDirection: "row",
                height: "50%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.Text}>Mark As Extra</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.RightButton}
            onPress={() => {}}
            underlayColor="#DCE0DC"
          >
            <View
              style={{
                flexDirection: "row",
                height: "50%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.Text}>Mark As HDR</Text>
            </View>
          </TouchableHighlight>
        </ButtonView>
        <NotesView style={{flex: 1, flexDirection: "row", justifyContent:"center"}}
        >
        <View
            style={{
              borderColor: "red",
              borderWidth: 1,
              height: "100%",
              width: "95%",
            }}
          >

              </View>

        </NotesView>
      </TotalView>
    );
  }
}

const styles = StyleSheet.create({
  MainText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
    width: 80,
    alignContent: "center",
    justifyContent: "center"
  },

  LeftButton: {
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    height: "100%",
    width: "38%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20
  },
  RightButton: {
    borderColor: "red",
    borderWidth: 1,
    flexDirection: "row",
    height: "100%",
    width: "38%",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  },

  Text: {
    fontSize: 20,
    height: "100%",
    width: "100%",
    fontWeight: "bold",
    color: "#5887F9",
    paddingHorizontal: 10
  }
});
