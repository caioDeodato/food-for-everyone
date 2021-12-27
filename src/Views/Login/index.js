import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container } from '../../global/styles';
import { Header, Logo, LoginMenu, LoginOption } from './styles';

import logo from '../../assets/img/Login/logo-big.png';

export default function Login() {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const SignIn = () => {
    return <Text style={{ color: 'black' }}>Tela de Login</Text>;
  };

  const SignUp = () => {
    return <Text style={{ color: 'black' }}>Tela de Cadastro</Text>;
  };

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black' }}>Login!</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black' }}>Signup!</Text>
      </View>
    );
  }

  function handleSignUp(key) {
    if(isSubscribe && key === 1) {}
  }

  function LoadView() {
    return isSubscribe ? <SettingsScreen /> : <HomeScreen />;
  }

  return (
    //919191
    <Container>
      <Header>
        <Logo source={logo} />
        <LoginMenu>
          <LoginOption key={1}
            style={isSubscribe ? styles.nonSelected : styles.selected}>
            Login
          </LoginOption>
          <LoginOption key={2}
            style={isSubscribe ? styles.selected : styles.nonSelected}>
            Sign-Up
          </LoginOption>
        </LoginMenu>
      </Header>
      <LoadView />
    </Container>
  );
}

const styles = StyleSheet.create({
  selected: {
    borderBottomColor: '#FA4A0C',
    borderBottomWidth: 2,
  },
  nonSelected: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
  },
});
