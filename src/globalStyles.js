import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif; 
}

html, body {
  overflow-x: hidden;
}

body {
  background-color: black;
  margin: 0 auto;
  width: 80vw;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
}
`

export default GlobalStyle
