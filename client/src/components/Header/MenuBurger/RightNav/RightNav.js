import React from 'react';
import styled from 'styled-components';
import { NavLink as LinkR } from 'react-router-dom';

const Ul = styled.ul`
  height: 100vh;
  width: 100%;
  padding-top: 3.5rem;
  position: fixed;
  top: 0;
  right: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-mainDark);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 1rem;
    color: var(--color-mainLight);
  }
`;
const StyledLinkRouter = styled(LinkR)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0rem 1rem;
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-mainLight);
  transition: all 0.2s;
  &:hover {
    color: var(--color-mainBlue);
  }
  &.active {
    color: var(--color-mainBlue);
  }
`;

const RightNav = ({ open, handleOpen, isLogged, isAdmin }) => {
  let links;
  if (isLogged && isAdmin) {
    links = (
      <Ul open={open}>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/'>
          Home
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/shop'>
          Products
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/create_product'>
          Create product
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/categories'>
          Categories
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/logout'>
          Logout
        </StyledLinkRouter>
      </Ul>
    );
  } else if (isLogged) {
    links = (
      <Ul open={open}>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/'>
          Home
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/shop'>
          Shop
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/cart'>
          Cart
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/logout'>
          Logout
        </StyledLinkRouter>
      </Ul>
    );
  } else {
    links = (
      <Ul open={open}>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/'>
          Home
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/shop'>
          Shop
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/cart'>
          Cart
        </StyledLinkRouter>
        <StyledLinkRouter onClick={() => handleOpen()} exact to='/login'>
          Login
        </StyledLinkRouter>
      </Ul>
    );
  }
  return links;
};

export default RightNav;
