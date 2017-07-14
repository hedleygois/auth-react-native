import React, { Component } from "react";
import { View } from "react-native";
import { Button, Card, CardSection, Input } from "./common";
import firebase from "firebase";

class LoginForm extends Component {
  state = { 
    email: "" ,
    password: ""
  };

  onButtonPress() {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input 
          placeholder="test@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={ password => this.setState({ password }) }
        />
      </CardSection>

      <CardSection>
        <Input 
          placeholder="password"
          label="Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={ password => this.setState({ password }) }
        />
      </CardSection>

      <CardSection>
        <Button>Log in</Button>
      </CardSection>

      </Card>
    );
  }
}

export default LoginForm;