import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';

import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsSection from '../../components/ProductsSection/ProductsSection';
import Card from '../../components/Card/Card';
import Img from '../../assets/img/shopHeroSection.jpg';
import Categories from './Filters/Categories/Categories';
import CategoriesPopup from './Filters/Categories/CategoriesPopup';
import SortPopup from './Filters/SortPopup/SortPopup';
import { Container } from '../../layouts/elements';

import * as actions from '../../redux/actions';

const FiltersWpapper = styled.div`
  margin: 6rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const sortItems = [
  { name: 'Newest', type: '' },
  { name: 'Oldest', type: 'sort=oldest' },
  { name: 'Price: Hight-Low', type: 'sort=-price' },
  { name: 'Price: Low-Hight', type: 'sort=price' },
];

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.items);
  const categoryNames = useSelector(({ categories }) => categories.items);
  const isAdmin = useSelector(({ user }) => user.info.isAdmin);
  const { category, sort } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(actions.getFilteredProducts(category, sort));
  }, [dispatch, category, sort]);

  const onSelectCategory = React.useCallback(
    (category) => {
      dispatch(actions.setCategory(category));
    },
    [dispatch],
  );

  const onSelectSortType = React.useCallback(
    ({ type }) => {
      dispatch(actions.setSortBy(type));
    },
    [dispatch],
  );
  return (
    <>
      <HeroSection
        Img={Img}
        bgImg
        mainHeading='CREATE EXPLORE EXPAND CONQUER'
        heading={`Your new design, it's time to shine`}
        alignCenter
      />
      <Container>
        <FiltersWpapper>
          <Media queries={{ medium: '(max-width: 56em)' }}>
            {(matches) =>
              matches.medium ? (
                <CategoriesPopup
                  items={categoryNames}
                  activeCategory={category}
                  onClickCategory={onSelectCategory}
                />
              ) : (
                <Categories
                  items={categoryNames}
                  activeCategory={category}
                  onClickCategory={onSelectCategory}
                />
              )
            }
          </Media>

          <SortPopup items={sortItems} activeSortType={sort} onClickSortType={onSelectSortType} />
        </FiltersWpapper>
      </Container>

      <ProductsSection>
        {products.map((product) => (
          <Card key={product._id} product={product} isAdmin={isAdmin} />
        ))}
      </ProductsSection>
    </>
  );
};

export default Shop;
