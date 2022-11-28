import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import Button from '../Button/Button';
import { Container, SectionContainer, SectionWrapper } from '../../layouts/elements';
import Heading from '../Heading/Heading';

import Img from '../../assets/img/InfoSection.jpg';

const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`;

const InfoWrapper = styled.div`
  width: 100%;
  margin-top: 9rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InfoSection = () => {
  return (
    <SectionContainer>
      <BgImg>
        <StyledImg src={Img} />
      </BgImg>
      <Container>
        <SectionWrapper>
          <Heading size='h2' mBottom='6rem' mTop='10rem' border color='blue'>
            Info
          </Heading>
          <InfoWrapper>
            <InnerWrapper>
              <Media queries={{ medium: '(max-width: 56em)' }}>
                {(matches) =>
                  matches.medium ? (
                    <>
                      <Heading textAlign='right' size='h1' bold mBottom='2rem' color='white'>
                        What are presets
                      </Heading>
                      <Heading textAlign='right' size='h3' bold mBottom='5rem' color='white'>
                        Lightroom presets are a settings packages, assigned to edit your photos by
                        one click.
                      </Heading>
                    </>
                  ) : (
                    <>
                      <Heading textAlign='right' size='h1' bold mBottom='3rem'>
                        What are presets
                      </Heading>
                      <Heading textAlign='right' size='h3' bold mBottom='5rem'>
                        Lightroom presets are a settings packages, assigned to edit your photos by
                        one click.
                      </Heading>
                    </>
                  )
                }
              </Media>

              <Link to='/shop'>
                <Button contain>Go to shop</Button>
              </Link>
            </InnerWrapper>
          </InfoWrapper>
        </SectionWrapper>
      </Container>
    </SectionContainer>
  );
};

export default InfoSection;
