import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common";
import firebase from "firebase";

class LoginForm extends Component {
  state = { 
    email: "" ,
    password: "",
    erro: "",
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({error: "", loading: true});

    const onLoginSuccess = () => 
      this.setState({
        email: "",
        password: "",
        erro: "",
        loading: false
      });

    const onCreationError = (error) => this.setState({ error: error.message, loading: false });

    const onLoginError = (error) => 
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(onLoginSuccess)
        .catch(onCreationError);

    firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(onLoginSuccess)
    .catch(onLoginError);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
      <CardSection>
        <Input 
          placeholder="test@gmail.com"
          label="Email"
          value={this.state.email}
          onChangeText={ email => this.setState({ email }) }
        />
      </CardSection>

      <Text style={ styles.erroTextStyles }>
        {this.state.error}
      </Text>

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
        {this.renderButton()}
      </CardSection>

      </Card>
    );
  }
}

const styles = {
  erroTextStyles: {
    fontSize: 20,
    color: "red",
    alignSelf: "center"
  }
};

export default LoginForm;