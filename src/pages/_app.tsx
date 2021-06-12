import { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "../theme";
import ColorProvider from "../context/ColorScheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorProvider>
        <Container maxW="container.md" py={10}>
          <Component {...pageProps} />
        </Container>
      </ColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
