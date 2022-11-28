import React from 'react';
import styled from 'styled-components';
import RightNav from './RightNav/RightNav';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const StyledBurger = styled.div`
  width: 3rem;
  z-index: 20;
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;

  div {
    width: 3rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'var(--color-mainBlue)' : 'var(--color-mainLight)')};
    border-radius: 1rem;
    transform-origin: 0.05rem;
    transition: all 0.3s linear;
    &:nth-child(1) {
      margin-bottom: 0.8rem;
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      margin-bottom: 0.8rem;
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const MenuBurger = ({ isLogged, isAdmin }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Wrapper>
        <StyledBurger open={open} onClick={() => handleOpen()}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </Wrapper>
      <RightNav open={open} handleOpen={handleOpen} isLogged={isLogged} isAdmin={isAdmin} />
    </>
  );
};

export default MenuBurger;
