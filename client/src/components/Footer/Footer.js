import React from 'react';
import styled from 'styled-components';

import { Container, SectionWrapper } from '../../layouts/elements';
import Heading from '../Heading/Heading';

import Img from '../../assets/img/&.svg';

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 20rem;
  background-color: var(--color-mainDark);
`;

const HeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2.5rem;
  margin: 5rem 0rem;
  border-bottom: 0.4rem solid var(--color-mainLight);
`;

const ImgWrapper = styled.div`
  margin: 0rem 4rem;
`;

const NavWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const StyledP = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-mainLight);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <SectionWrapper>
          <HeadingWrapper>
            <Heading size='h2' bold color='white'>
              CREATE
            </Heading>
            <ImgWrapper>
              <img src={Img} alt='And' />
            </ImgWrapper>
            <Heading size='h2' bold color='white'>
              ENJOY
            </Heading>
          </HeadingWrapper>
          <NavWrapper></NavWrapper>
          <StyledP>©2022 PreSets. All Rights Reserved.</StyledP>
        </SectionWrapper>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
