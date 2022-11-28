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
  align-items: center;
`;

function ProductsSection({ heading, children }) {
  return (
    <SectionContainer>
      <Container>
        <SectionWrapper>
          {heading ? (
            <Heading size='h2' mBottom='6rem' mTop='10rem' border color='blue'>
              {heading}
            </Heading>
          ) : null}

          <ContentWrapper>
            <InnerWrapper>{children}</InnerWrapper>
          </ContentWrapper>
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
}

export default ProductsSection;
