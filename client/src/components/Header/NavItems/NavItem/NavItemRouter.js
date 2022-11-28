import React from 'react';
import styled from 'styled-components';
import { NavLink as LinkR } from 'react-router-dom';

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const StyledLinkRouter = styled(LinkR)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0rem 1rem;
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 0.4rem solid transparent;
  color: var(--color-mainLight);
  transition: all 0.2s;
  &:hover {
    border-bottom: 0.4rem solid var(--color-mainBlue);
  }
  &.active {
    border-bottom: 0.4rem solid var(--color-mainBlue);
  }
`;

const NavItemRouter = ({ link, children }) => {
  return (
    <Li>
      <StyledLinkRouter exact to={link} activeClassName='active'>
        {children}
      </StyledLinkRouter>
    </Li>
  );
};

export default NavItemRouter;
