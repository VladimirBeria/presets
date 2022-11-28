import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  font-weight: 900;
  font-size: 3rem;
  color: var(--color-mainLight);
`;

const StyledSpan = styled.span`
  font-weight: 900;
  font-size: 3rem;
  color: var(--color-mainBlue);
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <StyledLogoLink exact to='/'>
        Pre
        <StyledSpan>Sets</StyledSpan>
      </StyledLogoLink>
    </LogoWrapper>
  );
};

export default Logo;
