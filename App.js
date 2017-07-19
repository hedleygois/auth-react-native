import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";
import firebase from "firebase";

export class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDwsblNyR1TxBRxxQhG-ez6xgUbLGttaI4",
      authDomain: "auth-8efa6.firebaseapp.com",
      databaseURL: "https://auth-8efa6.firebaseio.com",
      projectId: "auth-8efa6",
      storageBucket: "auth-8efa6.appspot.com",
      messagingSenderId: "145537985188"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
         <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;