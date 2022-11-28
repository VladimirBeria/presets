import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  color: ${({ error, success }) => {
    if (error) return 'var(--color-error)';
    if (success) return 'green';
    else return 'var(--color-mainDark)';
  }};
  text-align: center;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '3rem' : '0rem')});
  transition: all 0.2s;
`;

const Message = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success} show={show}>
      {children}
    </P>
  );
};

export default Message;
