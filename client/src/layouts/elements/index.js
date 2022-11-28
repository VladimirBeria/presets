import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 130rem;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  @media ${(props) => props.theme.mediaQueries.largest} {
    max-width: 100rem;
  }
  @media ${(props) => props.theme.mediaQueries.large} {
    max-width: 80rem;
  }
  @media ${(props) => props.theme.mediaQueries.medium} {
    max-width: 60rem;
  }
  @media ${(props) => props.theme.mediaQueries.small} {
    max-width: 45rem;
  }
  @media ${(props) => props.theme.mediaQueries.smallest} {
    max-width: 35rem;
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ bgColor }) =>
    bgColor ? 'var(--color-mainDark)' : 'var(--color-mainLight)'};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
