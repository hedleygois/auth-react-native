import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";
import firebase from "firebase";

export class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDwsblNyR1TxBRxxQhG-ez6xgUbLGttaI4",
      authDomain: "auth-8efa6.firebaseapp.com",
      databaseURL: "https://auth-8efa6.firebaseio.com",
      projectId: "auth-8efa6",
      storageBucket: "auth-8efa6.appspot.com",
      messagingSenderId: "145537985188"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;