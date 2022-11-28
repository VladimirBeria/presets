import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  background-color: var(--color-mainLight);
  margin-bottom: 3rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  @media ${(props) => props.theme.mediaQueries.small} {
    margin-bottom: 1rem;
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

const File = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <Wrapper>
      <StyledInput {...props} />
      <Error show={errors[field.name] && touched[field.name]}>{errors[field.name]}</Error>
    </Wrapper>
  );
};

export default File;
