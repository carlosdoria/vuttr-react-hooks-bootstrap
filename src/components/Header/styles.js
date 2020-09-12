import styled from 'styled-components';

export const Container = styled.div`
  /* Responsável por fixar a div no topo da tela. */
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  /* A propriedade abaixo foi utilizada para garantir a sobreposição dessa div sobre os demais ele mentos */
  z-index: 2;
  padding: 0;
  background-color: var(--color-red);
  display: block;
`;

export const Wrapper = styled.div`
  height: 80px;
  margin: 0 auto 0;
  max-width: 1100px;
  padding: 0 20px 0;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  /* Impede a redução do tamanho do item, para que ele não fique menor que seu tamanho. */
  flex-shrink: 0;
`;
