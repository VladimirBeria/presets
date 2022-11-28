import React from 'react';
import styled from 'styled-components';

import { Container, SectionContainer, SectionWrapper } from '../../layouts/elements';
import Heading from '../Heading/Heading';

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mediaQueries.largest} {
    max-width: 80rem;
    justify-content: center;
    margin: 0 auto;
  }
`;

function FeaturedSection({ children, id }) {
  return (
    <SectionContainer id={id}>
      <Container>
        <SectionWrapper>
          <Heading size='h2' mBottom='6rem' mTop='10rem' border color='blue'>
            Featured
          </Heading>
          <ContentWrapper>
            <InnerWrapper>{children}</InnerWrapper>
          </ContentWrapper>
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
}

export default FeaturedSection;
