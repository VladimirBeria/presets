import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import Media from 'react-media';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 0.1rem solid var(--color-inactive);
  padding-top: 3rem;
  margin-top: 3rem;
  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: column;
    padding-top: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  width: 10%;
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    justify-content: center;
    margin: 0;
  }
`;

const StyledImg = styled.img`
  width: 8rem;
  height: 8rem; ;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;

const StyledH = styled.h4`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.7rem;
  text-transform: capitalize;
  color: var(--color-mainDark);
  @media ${(props) => props.theme.mediaQueries.medium} {
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: 1.5rem;
  color: var(--color-inactive);
  @media ${(props) => props.theme.mediaQueries.medium} {
    text-align: center;
  }
`;

const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ProductCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.8rem;
  @media ${(props) => props.theme.mediaQueries.medium} {
    margin: 1.5rem;
  }
`;

const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const useStyles = makeStyles(() => ({
  iconButton: {
    border: '1px solid #548CA8',
    margin: 15,
    width: 20,
    height: 20,
    '&:hover': {
      backgroundColor: '#548CA8',
    },
  },
  deleteIcon: {
    color: '#ff5454',
    backgroundColor: '#fff',
    margin: 15,
    width: 30,
    height: 30,
    '&:hover': {
      color: '#fff',
      backgroundColor: '#ff5454',
    },
  },
}));

const CartItem = ({ product, onRemove, onPlus, onMinus }) => {
  const classes = useStyles();

  const handleRemoveClick = () => {
    onRemove(product._id);
  };

  const handlePlusItem = () => {
    onPlus(product._id);
  };

  const handleMinusItem = () => {
    onMinus(product._id);
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <StyledImg src={product.images.url} alt='img' />
      </ImgWrapper>
      <InfoWrapper>
        <StyledH>{product.title}</StyledH>
        <StyledP>Lightroom preset</StyledP>
      </InfoWrapper>
      <Media queries={{ medium: '(max-width: 56em)' }}>
        {(matches) =>
          matches.medium ? (
            <InnerWrapper>
              <ProductPrice>
                <b>${product.price}</b>
              </ProductPrice>
              <ProductCount>
                <IconButton className={classes.iconButton} onClick={handleMinusItem}>
                  <RemoveIcon fontSize='small' />
                </IconButton>{' '}
                {product.cartQuantity}
                <IconButton
                  className={classes.iconButton}
                  onClick={product.quantity > product.cartQuantity ? handlePlusItem : null}>
                  <AddIcon />
                </IconButton>{' '}
              </ProductCount>
              <ButtonWrapper>
                <IconButton className={classes.deleteIcon} onClick={handleRemoveClick}>
                  <DeleteIcon fontSize='large' />
                </IconButton>
              </ButtonWrapper>
            </InnerWrapper>
          ) : (
            <InnerWrapper>
              <ProductCount>
                <IconButton className={classes.iconButton} onClick={handleMinusItem}>
                  <RemoveIcon fontSize='small' />
                </IconButton>{' '}
                {product.cartQuantity}
                <IconButton
                  className={classes.iconButton}
                  onClick={product.quantity > product.cartQuantity ? handlePlusItem : null}>
                  <AddIcon />
                </IconButton>{' '}
              </ProductCount>
              <ProductPrice>
                <b>${product.price}</b>
              </ProductPrice>
              <ButtonWrapper>
                <IconButton className={classes.deleteIcon} onClick={handleRemoveClick}>
                  <DeleteIcon fontSize='large' />
                </IconButton>
              </ButtonWrapper>
            </InnerWrapper>
          )
        }
      </Media>
    </Wrapper>
  );
};

export default CartItem;
