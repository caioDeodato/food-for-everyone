import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'

const baseHeaderProps = {
  shadowColor: '#FAFA',
  shadowOpacity: 0.9,
  shadowRadius: 5,
  shadowOffset: {
    height: 1,
    width: 1,
  },
};

export const Logo = styled.Image`
  width: 140px;
  height: 140px;
`;

export const LoginMenu = styled.View`
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: space-around;
  bottom: 0;
  /* margin */
`;

export const LoginOption = styled.Text`
  font-family: 'SF-Pro-Text-Medium';
  font-size: ${RFValue(16)}px;
  color: #000;
  width: 110px;
  padding: 5px;
  text-align: center;
`;

export const Header = styled.View.attrs(props =>
  Platform.OS === 'android'
    ? {
        elevation: 3,
        ...baseHeaderProps,
      }
    : {
        ...baseHeaderProps,
      },
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 270px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
`;
