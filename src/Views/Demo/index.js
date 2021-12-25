import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Container,
  Header,
  HeaderTitle,
  Circle,
  Logo,
  ImageSection,
  Person,
  PersonSmall,
} from './styles';

import personBigger from '../../assets/img/Demo/person-bigger.png';
import personSmaller from '../../assets/img/Demo/person-smaller.png';
import logoLogin from '../../assets/img/Demo/logo-login.png';
import Button from '../../components/Button';

export default function Demo() {
  return (
    <Container>
      <Header>
        <Circle>
          <Logo source={logoLogin} />
        </Circle>
        <HeaderTitle>Food for everyone</HeaderTitle>
      </Header>
      <ImageSection>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            // position: 'relative',
            // marginBottom: 50
          }}>
          <Person source={personBigger} />
          <PersonSmall source={personSmaller} />
        </View>
        <LinearGradient colors={['transparent', '#FF470B']} style={{ width: '100%', height: 150, position: 'absolute', bottom: 0, zIndex: 100, marginBottom: 20}} />
      </ImageSection>
      <Button schema="white" text="Get Starteed" style={{ marginTop: -30, zIndex: 160 }} />
    </Container>
  );
}
