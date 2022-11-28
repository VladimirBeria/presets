import React from 'react';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  position: relative;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
`;

const StyledB = styled.b`
  margin-right: 1rem;
  font-size: 1.8rem;
`;

const StyledSpan = styled.span`
  font-size: 1.8rem;
  color: var(--color-mainBlue);
  border-bottom: 0.2rem dashed var(--color-mainBlue);
  cursor: pointer;
  text-transform: capitalize;
`;

const PopUp = styled.div`
  font-size: 1.2rem;
  z-index: 2;
  position: absolute;
  left: 0;
  margin-top: 2rem;
  background: #ffffff;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  border-radius: 2rem;
  overflow: hidden;
  padding: 1rem 0;
  width: 18rem;
`;

const StyledUl = styled.ul`
  overflow: hidden;
  li {
    padding: 1.5rem 2rem;
    cursor: pointer;

    &.active,
    &:hover {
      background: rgba(84, 140, 168, 0.05);
    }

    &.active {
      font-weight: bold;
      color: var(--color-mainBlue);
    }
  }
`;
const StyledLi = styled.li`
  text-transform: capitalize;
`;

const CategoriesPopup = React.memo(function CategoriesPopup({
  items,
  activeCategory,
  onClickCategory,
}) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const categoryRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      event.composedPath(event.target);
    if (!path.includes(categoryRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (item) => {
    if (onClickCategory) {
      onClickCategory(item.name);
    }
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <CategoryWrapper ref={categoryRef}>
      <Category>
        <StyledB>Categories: </StyledB>
        <StyledSpan onClick={toggleVisiblePopup}>
          {activeCategory === null ? 'All' : activeCategory}
        </StyledSpan>
      </Category>
      {visiblePopup && (
        <PopUp>
          <StyledUl>
            <StyledLi
              className={activeCategory === null ? 'active' : ''}
              onClick={() => {
                if (onClickCategory) {
                  onClickCategory(null);
                }
                setVisiblePopup(false);
              }}>
              all
            </StyledLi>
            {items.map((item, index) => (
              <StyledLi
                onClick={() => onSelectItem(item)}
                className={activeCategory === item.name ? 'active' : ''}
                key={`${item.name}_${index}`}>
                {item.name}
              </StyledLi>
            ))}
          </StyledUl>
        </PopUp>
      )}
    </CategoryWrapper>
  );
});

export default CategoriesPopup;
