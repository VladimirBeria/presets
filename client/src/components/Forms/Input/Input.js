import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 3rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.mediaQueries.small} {
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-mainLight);
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--color-white);
  border: none;
  border-radius: 2rem;

  &::placeholder {
    color: var(--color-white);
  }
`;
const Error = styled.div`
  padding: 0.5rem 2rem;
  position: absolute;
  bottom: 0;
  transform: translateY(${({ show }) => (show ? '25px' : '10px')});
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: all 0.1s;
  color: var(--color-error);
  font-weight: 700;
  font-size: 1.1rem;
`;

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>{errors[field.name]}</Error>
    </InputWrapper>
  );
};

export default Input;
