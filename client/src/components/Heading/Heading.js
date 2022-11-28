import React from 'react';
import styled, { css } from 'styled-components';

const baseStyle = css`
  color: ${({ color }) => {
    if (color === 'white') {
      return 'var(--color-mainLight)';
    } else if (color === 'blue') {
      return 'var(--color-mainBlue)';
    } else return 'var(--color-mainDark)';
  }};
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ bold }) => (bold ? '900' : '700')};
  margin-bottom: ${({ mBottom }) => mBottom};
  margin-top: ${({ mTop }) => mTop};
  border-top: ${({ border }) => (border ? '0.4rem solid var(--color-mainBlue)' : 'none')};
`;

const Heading1 = styled.h1`
  font-size: 6.5rem;
  line-height: 8rem;
  ${baseStyle}
  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 5rem;
    line-height: 5.3rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 4rem;
  line-height: 5.5rem;
  ${baseStyle}
  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 2.8rem;
    line-height: 3rem;
  }
`;

const Heading3 = styled.h3`
  font-size: 2.5rem;
  line-height: 3.5rem;
  ${baseStyle}
  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;

const Heading4 = styled.h4`
  font-size: 1.5rem;
  line-height: 2.2rem;
  ${baseStyle}
  @media ${(props) => props.theme.mediaQueries.small} {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const Heading = ({ children, color, textAlign, size, bold, mBottom, mTop, border }) => {
  if (size === 'h1')
    return (
      <Heading1
        mBottom={mBottom}
        mTop={mTop}
        color={color}
        textAlign={textAlign}
        bold={bold}
        border={border}>
        {children}
      </Heading1>
    );
  if (size === 'h2')
    return (
      <Heading2
        mBottom={mBottom}
        mTop={mTop}
        color={color}
        textAlign={textAlign}
        bold={bold}
        border={border}>
        {children}
      </Heading2>
    );
  if (size === 'h3')
    return (
      <Heading3
        mBottom={mBottom}
        mTop={mTop}
        color={color}
        textAlign={textAlign}
        bold={bold}
        border={border}>
        {children}
      </Heading3>
    );
  if (size === 'h4')
    return (
      <Heading4
        mBottom={mBottom}
        mTop={mTop}
        color={color}
        textAlign={textAlign}
        bold={bold}
        border={border}>
        {children}
      </Heading4>
    );
};

export default Heading;
