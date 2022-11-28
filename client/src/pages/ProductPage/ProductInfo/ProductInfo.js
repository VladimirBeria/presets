import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Media from 'react-media';

import * as actions from '../../../redux/actions';

import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { Container, SectionContainer, SectionWrapper } from '../../../layouts/elements';
import Spinner from '../../../components/Spinner/Spinner';
import ImgCard from '../../../components/ImgCard/ImgCard';

// import Heading from '../../../components/Heading/Heading';

const ContentWrapper = styled.div`
  margin-top: 10rem;
  width: 88rem;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const SideWrapper = styled.div`
  width: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.p`
  font-size: 2.5rem;
  line-height: 3.5rem;
  color: var(--color-mainDark);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PriceWrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const OldPrice = styled.span`
  margin-right: 2rem;
  color: #7e7f80;
  font-size: 2.2rem;
  text-decoration: line-through;
`;

const NewPrice = styled.span`
  color: var(--color-mainBlue);
  font-size: 2.2rem;
`;

const Description = styled.div`
  color: var(--color-mainDark);
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const useStyles = makeStyles(() => ({
  buttonCart: {
    width: '160px',
    height: '40px',
    backgroundColor: '#548CA8',
    color: '#FBF8F8',
    fontWeight: 600,
    fontSize: 14,
    fontFamily: 'Nunito',
    '&:hover': {
      backgroundColor: '#3f697e',
    },
  },
}));

// const PhotosWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const CardWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 1rem;
// `;

const ProductInfo = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let content;
  if (product.length === 0) {
    content = <Spinner />;
  } else
    content = (
      <SectionContainer>
        <Container>
          <SectionWrapper>
            <ContentWrapper>
              <Media queries={{ medium: '(max-width: 56em)' }}>
                {(matches) =>
                  matches.medium ? (
                    <ImgCard productImg={product.images.url} size='30rem' />
                  ) : (
                    <ImgCard productImg={product.images.url} size='50rem' />
                  )
                }
              </Media>

              <SideWrapper>
                <InfoWrapper>
                  <ProductName>{product.title} LIGHTROOM PRESET</ProductName>
                  <InnerWrapper>
                    <PriceWrapper>
                      <OldPrice>${product.price + product.price * 0.3}</OldPrice>
                      <NewPrice>${product.price}</NewPrice>
                    </PriceWrapper>
                    <Description>{product.description}</Description>

                    <Button
                      onClick={() => dispatch(actions.addItemToCart(product))}
                      variant='contained'
                      className={classes.buttonCart}
                      startIcon={<ShoppingCart />}>
                      Buy
                    </Button>
                  </InnerWrapper>
                </InfoWrapper>
                {/* <PhotosWrapper>
                  <CardWrapper>
                    <ImgCard size='10rem' />
                    <ImgCard size='10rem' />
                    <ImgCard size='10rem' />
                  </CardWrapper>
                  <CardWrapper>
                    <ImgCard size='10rem' />
                    <ImgCard size='10rem' />
                    <ImgCard size='10rem' />
                  </CardWrapper>
                </PhotosWrapper> */}
              </SideWrapper>
            </ContentWrapper>
          </SectionWrapper>
        </Container>
      </SectionContainer>
    );
  return content;
};

export default ProductInfo;
