import styled from 'styled-components/native';
import logoLogin from '../../assets/img/Demo/logo-login.png';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF4B3A;
`;

export const Circle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 250px;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  font-family: 'SF-Pro-Rounded-Black';
  font-size: ${RFValue(50)}px;
  color: #fff;
`;

export const ImageSection = styled.View`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export const Person = styled.Image`
  width: 200px;
  height: 300px;
  position: absolute;
  left: 0;
  z-index: 99;
`;

export const PersonSmall = styled.Image`
  width: 180px;
  height: 270px;
  position: absolute;
  right: 0;
  margin-top: 50px;
  z-index: -99;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 50px;
  border-radius: 100px;
`;
