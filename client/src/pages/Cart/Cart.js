import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as actions from '../../redux/actions';

import Button from '../../components/Button/Button';
import CartItem from '../../components/CartItem/CartItem';
import Heading from '../../components/Heading/Heading';

import emptyCartImage from '../../assets/img/empty-cart.png';
import { Container } from '../../layouts/elements';

const CartWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartTopWrapper = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-top: 7rem;
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  color: var(--color-inactive);
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: var(--color-mainDark);
  }
`;

const StyledImg = styled.img`
  width: 30rem;
  margin-bottom: 6rem;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PriceWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  font-size: 2rem;
`;

const TotalPrice = styled.span`
  color: var(--color-mainBlue);
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-top: 3rem;
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(({ user }) => user.info.cart);

  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    setTotalPrice(
      cart.reduce((prev, item) => {
        return prev + item.price * item.cartQuantity;
      }, 0),
    );
  }, [cart]);

  const onClearCart = () => {
    if (window.confirm('Do you want to clear cart?')) {
      dispatch(actions.clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Do you want to delete this product?')) {
      dispatch(actions.removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(actions.plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(actions.minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log('Your order.', cart);
    if (window.confirm('Confirm your order.')) {
      dispatch(actions.cartOrder(cart));
    }
  };

  if (cart.length === 0)
    return (
      <Container>
        <CartWrapper>
          <Heading size='h2' mBottom='6rem' mTop='10rem'>
            YOUR CART IS EMPTY 😕
          </Heading>
          <StyledImg src={emptyCartImage} alt='Empty cart' />
          <Link to='/shop'>
            <Button contain>Shop Now</Button>
          </Link>
        </CartWrapper>
      </Container>
    );
  else
    return (
      <Container>
        <CartWrapper>
          <CartTopWrapper>
            <Heading size='h3' bold>
              Cart
            </Heading>
            <StyledSpan onClick={onClearCart}>Clear cart</StyledSpan>
          </CartTopWrapper>
          <CartItems>
            {cart.map((product) => (
              <CartItem
                key={product._id}
                product={product}
                onRemove={onRemoveItem}
                onPlus={onPlusItem}
                onMinus={onMinusItem}
              />
            ))}
          </CartItems>
          <PriceWrapper>
            Total Price: <TotalPrice>${totalPrice}</TotalPrice>
          </PriceWrapper>
          <ButtonWrapper>
            <Link to='/shop'>
              <Button contain>Go Back</Button>
            </Link>
            <Button contain onClick={onClickOrder}>
              Purchase Now
            </Button>
          </ButtonWrapper>
        </CartWrapper>
      </Container>
    );
};

export default Cart;
