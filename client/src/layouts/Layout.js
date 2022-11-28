import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';

import Header from '../components/Header/Header';

const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const isLogged = useSelector(({ user }) => user.info.isLogged);
  const isAdmin = useSelector(({ user }) => user.info.isAdmin);
  return (
    <>
      <Header isLogged={isLogged} isAdmin={isAdmin} />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
};

export default Layout;
