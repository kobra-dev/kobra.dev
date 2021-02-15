import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from 'next/app';
import { useEffect } from "react";

/*import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// TODO: find a way to only import the needed icons

library.add(fas);*/

const theme = extendTheme({
  colors: {
    // https://smart-swatch.netlify.app/#00d777
    brand: {
      50: '#dafff1',
      100: '#adffdb',
      200: '#7cffc5',
      300: '#4affae',
      400: '#1aff99',
      //500: '#00e67f',
      500: '#00d777',
      600: '#00b362',
      700: '#008046',
      800: '#004e28',
      900: '#001c09',
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
