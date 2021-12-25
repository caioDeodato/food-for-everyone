import React from 'react';
import { Text } from 'react-native';
import { ButtonArea, ButtonText } from './styles';

export default function Button(props) {
  return (
    <ButtonArea schema={props.schema} style={props.style || {}}>
      <ButtonText schema={props.schema}>{props.text}</ButtonText>
    </ButtonArea>
  );
}
