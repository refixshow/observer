import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, 
    *::after,
    *::before { 
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
        background-color: #333;;
    }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
