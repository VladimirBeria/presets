import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 2rem;
  border: 0.1rem solid var(--color-mainDark);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%; ;
`;

const ImgCard = ({ size, productImg }) => {
  return (
    <Wrapper size={size}>
      <ImgWrapper>
        <StyledImg src={productImg} alt='img' />
      </ImgWrapper>
    </Wrapper>
  );
};

export default ImgCard;
