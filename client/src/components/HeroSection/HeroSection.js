import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { Container } from '../../layouts/elements';

import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background-color: var(--color-mainDark);
`;

const HeroImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: ${({ bgImg }) => (bgImg ? '0' : 'none')};
  left: ${({ bgImg }) => (bgImg ? '0' : 'none')};
  height: 100%;
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const HeroWrapper = styled.div`
  width: ${({ textWrap }) => (textWrap ? textWrap : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-start')};
`;

const HeroSection = ({ mainHeading, heading, Img, bgImg, textWrap, alignCenter, nextSection }) => {
  return (
    <HeroContainer>
      <HeroImg bgImg={bgImg}>
        <StyledImg src={Img} />
      </HeroImg>
      <Container>
        <HeroWrapper textWrap={textWrap} alignCenter={alignCenter}>
          <Heading textAlign='center' color='white' size='h1' bold mBottom='3rem'>
            {mainHeading}
          </Heading>
          <Heading textAlign='center' color='white' size='h3' bold mBottom='5rem'>
            {heading}
          </Heading>
          {nextSection ? (
            <Link to={nextSection} spy={true} smooth={true}>
              <Button contain>Explore</Button>
            </Link>
          ) : (
            ''
          )}
        </HeroWrapper>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
