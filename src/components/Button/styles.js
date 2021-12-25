import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonArea = styled.TouchableOpacity`
  width: 270px;
  height: 60px;
  background-color: ${props =>
    props.schema === 'orange' ? '#FA4A0C' : '#ffffff'};
  border-radius: 27px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: SF-Pro-Text-Medium;
  font-size: ${RFValue(16)}px;
  color: ${props => (props.schema === 'orange' ? '#ffffff' : '#FA4A0C')};
`;
