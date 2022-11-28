import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../../redux/actions';

import Modal from '../../../components/Modal/Modal';
import Heading from '../../../components/Heading/Heading';
import Button from '../../../components/Button/Button';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const DeleteProduct = ({ opened, close, product }) => {
  const dispatch = useDispatch();
  return (
    <Modal opened={opened} close={close}>
      <Heading size='h3' color='white'>
        Delete product
      </Heading>
      <Heading size='h4' color='white' mBottom='4rem'>
        {product.title}
      </Heading>

      <ButtonsWrapper>
        <Button
          contain
          type='submit'
          onClick={() => dispatch(actions.deleteProduct(product._id, product.images.public_id))}>
          Delete
        </Button>
        <Button contain type='button' onClick={() => close(false)}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </Modal>
  );
};

export default DeleteProduct;
