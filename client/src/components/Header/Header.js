import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import { Container } from '../../layouts/elements';
import Logo from '../Logo/Logo';
import MenuBurger from './MenuBurger/MenuBurger';
import NavItems from './NavItems/NavItems';

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;
  background-color: var(--color-mainDark);
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Header = ({ isLogged, isAdmin }) => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <Media queries={{ medium: '(max-width: 56em)' }}>
            {(matches) =>
              matches.medium ? (
                <MenuBurger isLogged={isLogged} isAdmin={isAdmin} />
              ) : (
                <NavItems isLogged={isLogged} isAdmin={isAdmin} />
              )
            }
          </Media>
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Header;
