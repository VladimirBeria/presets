import React from 'react';
import styled from 'styled-components';

import { Container, SectionContainer, SectionWrapper } from '../../layouts/elements';
import Heading from '../Heading/Heading';

import Img from '../../assets/img/NewSection.jpg';

const BgImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  @media ${(props) => props.theme.mediaQueries.medium} {
    display: none;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 102rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 31rem;
    justify-content: center;
  }
`;

// const InnerWrapper = styled.div`
//   width: 48rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const CardWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

const NewSection = ({ children }) => {
  return (
    <SectionContainer bgColor>
      <BgImg>
        <StyledImg src={Img} />
      </BgImg>
      <Container>
        <SectionWrapper>
          <Heading size='h2' mBottom='6rem' mTop='10rem' border color='blue'>
            New
          </Heading>
          <ContentWrapper>{children}</ContentWrapper>
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
};

export default NewSection;
