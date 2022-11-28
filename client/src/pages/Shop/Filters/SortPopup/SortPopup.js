import React from 'react';
import styled from 'styled-components';

const SortWrapper = styled.div`
  position: relative;
`;

const SortBy = styled.div`
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
`;

const PopUp = styled.div`
  font-size: 1.2rem;
  z-index: 2;
  position: absolute;
  right: 0;
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

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const sortRef = React.useRef();
  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (event) => {
    const path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      event.composedPath(event.target);
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    setVisiblePopup(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <SortWrapper ref={sortRef}>
      <SortBy>
        <StyledB>Sorting by: </StyledB>
        <StyledSpan onClick={toggleVisiblePopup}>{activeLabel}</StyledSpan>
      </SortBy>
      {visiblePopup && (
        <PopUp>
          <StyledUl>
            {items.map((obj, index) => (
              <li
                onClick={() => onSelectItem(obj)}
                className={activeSortType === obj.type ? 'active' : ''}
                key={`${obj.type}_${index}`}>
                {obj.name}
              </li>
            ))}
          </StyledUl>
        </PopUp>
      )}
    </SortWrapper>
  );
});

export default SortPopup;
