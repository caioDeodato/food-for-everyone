import React from 'react';
import { ButtonArea, ButtonText } from './styles';

export default function Button(props) {
  return (
    <ButtonArea schema={props.schema} onPress={props.onPress} style={props.style || {}}>
      <ButtonText schema={props.schema}>{props.children || 'Button'}</ButtonText>
    </ButtonArea>
  );
}
