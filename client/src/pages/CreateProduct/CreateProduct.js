import React from 'react';
import styled from 'styled-components';
import CreateProoductForm from './CreateProductForm/CreateProoductForm';

import * as actions from '../../redux/actions';

import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const InnerWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = React.useState(false);
  React.useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);
  return (
    <Wrapper>
      <InnerWrapper>
        <Heading size='h1' mBottom='4rem'>
          Add Product
        </Heading>
        <Button contain onClick={() => setIsAdding(true)}>
          Add Product
        </Button>
        <CreateProoductForm opened={isAdding} close={() => setIsAdding(false)} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default CreateProduct;
