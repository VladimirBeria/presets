import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
};
html{
    font-size: 62.5%;
    box-sizing: border-box;
    --color-mainBlue: ${(props) => props.theme.colors.mainBlue};
    --color-mainViolet: ${(props) => props.theme.colors.mainViolet};
    --color-mainDark: ${(props) => props.theme.colors.mainDark};
    --color-mainLight: ${(props) => props.theme.colors.mainLight};
    --color-inactive: ${(props) => props.theme.colors.inactive};
    --color-error: ${(props) => props.theme.colors.errorRed};
    --shadow: ${(props) => props.theme.colors.shadow};

    @media ${(props) => props.theme.mediaQueries.small} {
      font-size: 55%;
    }
}
body {
    font-family: 'Nunito';
    font-weight: 600;
    line-height: 1.6;
    background-color: #FBF8F8;
}
a, button {
    cursor: pointer;
  }
a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;
  }
`;
