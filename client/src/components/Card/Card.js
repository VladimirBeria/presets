import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as actions from '../../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import ShoppingCart from '@material-ui/icons/ShoppingCart';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateProoductForm from '../../pages/CreateProduct/CreateProductForm/CreateProoductForm';
import DeleteProduct from '../../pages/CreateProduct/DeleteProduct/DeleteProduct';

const DisabledBlock = styled.div`
  width: 30rem;
  height: 40rem;
  margin-bottom: 5rem;
  border-radius: 2rem;
  background-color: var(--color-inactive);
  filter: blur(1px);
  pointer-events: none;
`;

const Wrapper = styled.div`
  position: relative;
  margin-right: 1%;
`;

// const StyledInput = styled.input`
//   position: absolute;
//   width: 1.5rem;
//   height: 1.5rem;
// `;

const CardWrapper = styled.div`
  width: 30rem;
  height: 40rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2rem;
  border: 0.1rem solid var(--color-mainDark);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
`;

const ImgWrapper = styled(Link)`
  width: 100%;
  border-radius: 2rem 2rem 0rem 0rem;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%; ;
`;

const InfoWrapper = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.p`
  font-size: 2rem;
  color: var(--color-mainBlue);
  text-transform: capitalize;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceWrapper = styled.div`
  display: flex;
`;

const OldPrice = styled.span`
  margin-right: 2rem;
  color: #7e7f80;
  font-size: 1.5rem;
  text-decoration: line-through;
`;

const NewPrice = styled.span`
  color: var(--color-mainViolet);
  font-size: 1.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#548CA8',
    color: '#FBF8F8',
    fontWeight: 600,
    fontSize: 10,
    fontFamily: 'Nunito',
    '&:hover': {
      backgroundColor: '#3f697e',
    },
  },
  deleteIcon: {
    color: '#ff5454',
    backgroundColor: '#FBF8F8',
    margin: 15,
    width: 30,
    height: 30,
    '&:hover': {
      color: '#FBF8F8',
      backgroundColor: '#ff5454',
    },
  },
  editIcon: {
    color: '#548CA8',
    backgroundColor: '#FBF8F8',
    margin: 15,
    width: 30,
    height: 30,
    '&:hover': {
      color: '#FBF8F8',
      backgroundColor: '#548CA8',
    },
  },
}));

const Card = ({ product, isAdmin }) => {
  const dispatch = useDispatch();
  const [isDeleting, setisDeleting] = React.useState(false);
  const [isEditing, setisEditing] = React.useState(false);
  const classes = useStyles();
  return (
    <>
      {isAdmin ? (
        <Wrapper>
          {/* {isAdmin && <StyledInput type='checkbox' />} */}
          <CardWrapper>
            <ImgWrapper to={`/detail/${product._id}`}>
              <StyledImg src={product.images.url} alt='img' />
            </ImgWrapper>
            <InfoWrapper>
              <ProductTitle>{product.title}</ProductTitle>
              <InnerWrapper>
                <PriceWrapper>
                  <OldPrice>${product.price + product.price * 0.3}</OldPrice>
                  <NewPrice>${product.price}</NewPrice>
                </PriceWrapper>

                <ButtonWrapper>
                  <IconButton onClick={() => setisEditing(true)} className={classes.editIcon}>
                    <EditIcon fontSize='large' />
                  </IconButton>
                  <IconButton onClick={() => setisDeleting(true)} className={classes.deleteIcon}>
                    <DeleteIcon fontSize='large' />
                  </IconButton>
                  <CreateProoductForm
                    editProduct={product}
                    opened={isEditing}
                    close={() => setisEditing(false)}
                  />
                  <DeleteProduct
                    product={product}
                    opened={isDeleting}
                    close={() => setisDeleting(false)}
                  />
                </ButtonWrapper>
              </InnerWrapper>
            </InfoWrapper>
          </CardWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          {product.quantity === 0 ? (
            <DisabledBlock>
              <CardWrapper quantity={product.quantity}>
                <ImgWrapper to={`/detail/${product._id}`}>
                  <StyledImg src={product.images.url} alt='img' />
                </ImgWrapper>
                <InfoWrapper>
                  <ProductTitle>{product.title}</ProductTitle>
                  <InnerWrapper>
                    <PriceWrapper>
                      <OldPrice>${product.price + product.price * 0.3}</OldPrice>
                      <NewPrice>${product.price}</NewPrice>
                    </PriceWrapper>
                    <Button
                      onClick={() => dispatch(actions.addItemToCart(product))}
                      variant='contained'
                      className={classes.button}
                      startIcon={<ShoppingCart />}>
                      Buy
                    </Button>
                  </InnerWrapper>
                </InfoWrapper>
              </CardWrapper>
            </DisabledBlock>
          ) : (
            <CardWrapper quantity={product.quantity}>
              <ImgWrapper to={`/detail/${product._id}`}>
                <StyledImg src={product.images.url} alt='img' />
              </ImgWrapper>
              <InfoWrapper>
                <ProductTitle>{product.title}</ProductTitle>
                <InnerWrapper>
                  <PriceWrapper>
                    <OldPrice>${product.price + product.price * 0.3}</OldPrice>
                    <NewPrice>${product.price}</NewPrice>
                  </PriceWrapper>
                  <Button
                    onClick={() => dispatch(actions.addItemToCart(product))}
                    variant='contained'
                    className={classes.button}
                    startIcon={<ShoppingCart />}>
                    Buy
                  </Button>
                </InnerWrapper>
              </InfoWrapper>
            </CardWrapper>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default Card;
