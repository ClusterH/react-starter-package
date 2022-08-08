import { createGlobalStyle, withTheme } from 'styled-components/macro'

import { themeColor, themeFontFamily, themeSize, clampFontSizeBuilder } from './theme'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #1d2427;
    --blue: #4597de;
    --lightBlue: #2081e2;
    --darkBlue: #060e19;
    --skyBlue: #6ea0ea;
    --reddishOrange: #f7531d;
    --reddishOrange2: #ffd7bf;
    --dullOrange: #e07d44;
    --osloGrey: #8a8a8e;
    --dune: #323232;
    --cinder: #151515;
    --greyGoose: #d2d2d2;
    --silver: #c7c7c7;
    --darkGrey: #3c3c3c;
    --darkGrey2: #3b3b3b;
    --blackCow: #464646;
    --heavyGrey: #212121;
    --divider: #595959;
    --borderColor: #383d45;
    --borderColor2: #ccb4e9;
    --inputBGColor: #383d4526;
    --boxBGColor: #2a3039;
    --buttonColor1: #6ea0ea;
    --buttonHoverColor1: #4597de;
    --success: #14ae5c;
    --error: #ff7b7b;
    --disable: #808080;
    --scrollbarTrack: #c4c4c4;
    --scrollbarThumb: #3c3c3c;
    --xs: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 0.625, 0.75)}; // 12px
    --sm: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 0.75, 0.875)}; // 14px
    --base: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 0.875, 1)};  // 16px
    --lg: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 1.125, 1.25)}; // 20px
    --xl: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 1.25, 1.375)}; // 22px
    --xxl: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 1.375, 1.5)}; // 24px
    --xxxl: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 1.875, 2)};  // 32px
    --extra: ${clampFontSizeBuilder(themeSize.sm, themeSize.xl, 2, 3)};     // 48px

    // toastify style
    --toastify-font-family: ${themeFontFamily.main};
    --toastify-toast-width: fit-content;
  }

  body {
    background-repeat: repeat;
    background-color: ${themeColor.background1};
    background-size: cover;
    opacity: 1;
    z-index: -1;
  }
  * {
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    input, select, textarea, button { font-family: inherit; }
    // transition: background-color 300ms ease-in-out 0s, opacity 800ms ease-in-out 0s;
  }

  /* For Chrome */
  /* width */
  ::-webkit-scrollbar {
    width: 4px;
    height: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--scrollbarTrack);
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--scrollbarThumb);
    height: 24px;
    width: 24px;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--darkBlue);
  }
`

export default withTheme(GlobalStyles)
