import { css } from '@emotion/core'
import theme from './theme'
import reset from './reset'

export const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f699ff;
  }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', 'Noto Sans JP', 'Noto Sans CJK JP', 'Yu Gothic', YuGothic,
      Arial, sans-serif;
    background: white;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.75;
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      font-size: 16px;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: ${theme.fontWeights.bold};
    }

    h1 {
      font-size: ${theme.fontSizes[5]};
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
      margin: 0;
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
      margin: 0;
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }

    @media (max-width: 600px) {
      font-size: 16px;

      h1 {
        font-size: ${theme.fontSizes[4]};
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
        margin-block-start: 1em;
        margin-block-end: 1em;
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  a {
    transition: all 0.3s ease-in-out;
    color: black;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }

  ${reset}
`

export default globalStyle
