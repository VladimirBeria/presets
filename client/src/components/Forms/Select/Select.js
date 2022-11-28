import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 3rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.mediaQueries.small} {
    margin-bottom: 1rem;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  outline: none;
`;

const Error = styled.div`
  padding: 0.5rem 2rem;
  position: absolute;
  bottom: 0;
  transform: translateY(${({ show }) => (show ? '15px' : '10px')});
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: all 0.1s;
  color: var(--color-error);
  font-weight: 700;
  font-size: 1.1rem;
`;

const Select = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <Wrapper>
      <StyledSelect {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>{errors[field.name]}</Error>;
    </Wrapper>
  );
};

export default Select;
