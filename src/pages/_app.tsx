/* eslint-disable react/jsx-props-no-spreading */
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";
import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
