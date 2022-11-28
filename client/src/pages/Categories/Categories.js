import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../redux/actions';

import CategoriesForm from './CategoriesForm/CategoriesForm';
import Category from './Category/Category';

import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

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

const Content = styled.div`
  width: 100%;
  max-width: 50rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Categories = () => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = React.useState(false);
  const categories = useSelector(({ categories }) => categories.items);
  React.useEffect(() => {
    dispatch(actions.getCategories());
  }, [dispatch]);

  return (
    <Wrapper>
      <InnerWrapper>
        <Heading size='h1' mBottom='4rem'>
          Categories
        </Heading>
        <Button contain onClick={() => setIsAdding(true)}>
          Add Category
        </Button>
        <CategoriesForm opened={isAdding} close={() => setIsAdding(false)} />
        <Content>
          {categories.reverse().map((category) => (
            <Category key={category._id} category={category} />
          ))}
        </Content>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Categories;
