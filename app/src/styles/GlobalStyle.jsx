import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
 
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input[type="search"]::-webkit-search-cancel-button{
  display: none;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

html {
  height: max-content;
  scroll-behavior: smooth;
}

html,
body {
  min-width: 100%;
  min-height: 100vh;
}

body {
  background: ${({ theme }) => theme.color1};
}
`;
