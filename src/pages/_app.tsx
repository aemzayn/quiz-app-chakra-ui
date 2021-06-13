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
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <Component {...pageProps} />
        </Container>
      </ColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
