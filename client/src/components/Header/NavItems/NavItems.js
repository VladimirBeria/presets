import React from 'react';
import styled from 'styled-components';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import NavItemRouter from './NavItem/NavItemRouter';

const Nav = styled.div`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItems = ({ isLogged, isAdmin }) => {
  let links;
  if (isLogged && isAdmin) {
    links = (
      <Ul>
        <NavItemRouter link='/'>Home</NavItemRouter>
        <NavItemRouter link='/shop'>Products</NavItemRouter>
        <NavItemRouter link='/create_product'>Create product</NavItemRouter>
        <NavItemRouter link='/categories'>Categories</NavItemRouter>
        <NavItemRouter link='/logout'>Logout</NavItemRouter>
      </Ul>
    );
  } else if (isLogged) {
    links = (
      <Ul>
        <NavItemRouter link='/'>Home</NavItemRouter>
        <NavItemRouter link='/shop'>Shop</NavItemRouter>
        <NavItemRouter link='/cart'>
          <ShoppingCart style={{ fontSize: 30 }} />
        </NavItemRouter>
        <NavItemRouter link='/logout'>Logout</NavItemRouter>
      </Ul>
    );
  } else {
    links = (
      <Ul>
        <NavItemRouter link='/'>Home</NavItemRouter>
        <NavItemRouter link='/shop'>Shop</NavItemRouter>
        <NavItemRouter link='/cart'>
          <ShoppingCart style={{ fontSize: 30 }} />
        </NavItemRouter>
        <NavItemRouter link='/login'>Login</NavItemRouter>
      </Ul>
    );
  }
  return <Nav>{links}</Nav>;
};

export default NavItems;
