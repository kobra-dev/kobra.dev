import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { Fonts } from '../components/Fonts';
import SEO from '../next-seo.config';
import '../styles/globals.css';

const theme = extendTheme({
    colors: {
        brand: {
            50: '#dafff1',
            100: '#adffdb',
            200: '#7cffc5',
            300: '#4affae',
            400: '#1aff99',
            500: '#00d777',
            600: '#00b362',
            700: '#008046',
            800: '#004e28',
            900: '#001c09'
        }
    },
    fonts: {
        heading: 'Montserrat',
        body: 'Noto Sans'
    }
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PlausibleProvider domain="kobra.dev">
            <ChakraProvider theme={theme}>
                <Fonts />
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </ChakraProvider>
        </PlausibleProvider>
    );
}

export default MyApp;
