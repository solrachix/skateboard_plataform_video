import { createGlobalStyle, css } from 'styled-components'
import { rgba } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: background-color 1s;
  }
  html, body, #__next {
    /* min-width: 100vw; */
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;

    /* background: ${props => props.theme.colors.background.normal}; */
    color: ${props => props.theme.colors.text.normal};

    font-size: 15px;
    font-weight: 500;

    overflow-x: visible;

    -webkit-font-smoothing: antialiased;
  }
  
  body {
    padding: 1em 2em;
    /* https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg */
    background-image: url("/images/background.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: color-dodge;
  }

  #__next {
    display: flex;
    overflow: hidden;

    max-width: 1240px;
    min-height: 100%;
    max-height: 900px;
    height: 95vh;
    width: 100%;

    background-color: ${props =>
      rgba(props.theme.colors.background.darker, 0.4)};
    backdrop-filter: blur(20px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    border-radius: 20px;

    &.navbar-false {
      /* grid-template-columns: 100%;
      grid-template-rows: 100%;
      grid-template-areas:
        'content';

      @media (max-width: 600px) {
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        grid-template-areas:
          'content';
      } */
    }
  }

  @media (max-width: 1088px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 600px) {
    body {
      padding: 0;
    }
    #__next{
      height: 100vh;
      border-radius: 0;
      max-height: 100%;
      }
    }
  }

  body, input, textarea, button, select, a {
    color: inherit;
    outline: none;

    text-decoration: none;
    font-family: 'Inter', 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text.normal};
    font-family: 'Inter', 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
  input[type=search] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }
  video {
    max-width: 100%;
    width: 100%;
    border-radius: 20px 20px 0 0;
    display: block;
    cursor: pointer;
    transition: 0.4s;
  } 
  ::-webkit-scrollbar {
    width: 4px;
    background: ${({ theme }) => theme.colors.background.normal};
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => rgba(theme.colors.background.lighter, 1)};
    border-radius: 50px;
  }
`
