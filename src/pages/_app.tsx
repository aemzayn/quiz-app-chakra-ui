import { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "../theme";
import ColorProvider from "../context/ColorScheme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorProvider>
        <Container maxW="container.md" py={10}>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />
            <meta charSet="UTF-8" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link
              rel="shortcut icon"
              sizes="16x16"
              href="/images/favicon-16x16.png"
              type="image/x-icon"
            />
            <link
              rel="shortcut icon"
              sizes="32x32"
              href="/images/favicon-32x32.png"
              type="image/x-icon"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
          </Head>
          <Component {...pageProps} />
        </Container>
      </ColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
