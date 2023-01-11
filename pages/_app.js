import GlobalStyle from "../src/themes/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <GlobalStyle />
        <Component {...pageProps} />
        </>
    ) 
  }