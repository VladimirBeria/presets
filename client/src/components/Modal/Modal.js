import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Backdrop from './Backdrop/Backdrop';

const ModalWrapper = styled.div`
  position: fixed;
  top: 58%;
  left: 50%;
  width: 100%;
  max-width: 60rem;
  z-index: 150;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  transform: translate(-50%, -60%);
  transition: all 0.1s;
  border-radius: 1rem;
  box-shadow: 0rem 0.5rem 3.5rem var(--color-shadow);
  background-color: var(--color-mainDark);
`;

const InnnerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4rem 3rem;
`;

const Modal = ({ opened, close, children }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop close={close} opened={opened} />
      <ModalWrapper opened={opened}>
        <InnnerWrapper>{children}</InnnerWrapper>
      </ModalWrapper>
    </>,
    document.getElementById('root-modal'),
  );
};

export default Modal;
