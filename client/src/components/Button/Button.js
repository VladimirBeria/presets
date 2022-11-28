import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  outline: none;
  width: ${({ contain }) => (contain ? 'fit-content' : '100%')};
  padding: 1rem 4rem;
  border-radius: 1rem;
  background-color: var(--color-mainBlue);
  box-shadow: 0rem 0.5rem 3.5rem var(--color-shadow);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-mainLight);
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-inactive);
  }
`;

const Button = ({ children, contain, ...rest }) => {
  return (
    <StyledButton contain={contain} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
