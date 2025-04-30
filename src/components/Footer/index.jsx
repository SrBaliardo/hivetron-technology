import React from 'react';
import { Container } from './styles';
import { ShinyText } from '../../components';

export function Footer() {
  return (
    <Container>
      <ShinyText
        text="&copy; 2024 HIVETRON Technology - Todos os direitos reservados"
        disabled={false}
        speed={5}
        className="custom-class"
      />
    </Container>
  );
}
