import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../../redux/actions';

import Heading from '../../../components/Heading/Heading';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const DeleteCategory = ({ opened, close, category }) => {
  const dispatch = useDispatch();
  return (
    <Modal opened={opened} close={close}>
      <Heading size='h3' color='white'>
        Delete category
      </Heading>
      <Heading size='h4' color='white' mBottom='4rem'>
        {category.name}
      </Heading>

      <ButtonsWrapper>
        <Button
          contain
          type='submit'
          onClick={() => dispatch(actions.deleteCategory(category._id))}>
          Delete
        </Button>
        <Button contain type='button' onClick={() => close(false)}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </Modal>
  );
};

export default DeleteCategory;
