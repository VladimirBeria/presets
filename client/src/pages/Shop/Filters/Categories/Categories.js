import React from 'react';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  position: relative;
`;

const StyledUl = styled.ul`
  display: flex;
`;
const StyledLi = styled.li`
  list-style: none;
  font-size: 1.4rem;
  text-transform: capitalize;
  padding: 1rem 3rem;
  border-radius: 2rem;
  margin-right: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: var(--color-mainBlue);
    color: #fff;
  }

  &:active {
    background-color: var(--color-mainBlue);
  }

  &.active {
    background-color: var(--color-mainBlue);
    color: #fff;
  }
`;

const Categories = React.memo(function Categories({ items, activeCategory, onClickCategory }) {
  return (
    <CategoryWrapper>
      <StyledUl>
        <StyledLi
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          All
        </StyledLi>
        {items &&
          items.map((item, index) => (
            <StyledLi
              className={activeCategory === item.name ? 'active' : ''}
              onClick={() => onClickCategory(item.name)}
              key={`${item}_${index}`}>
              {item.name}
            </StyledLi>
          ))}
      </StyledUl>
    </CategoryWrapper>
  );
});

export default Categories;
