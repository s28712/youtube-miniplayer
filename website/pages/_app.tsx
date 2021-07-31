import type { AppProps /*, AppContext */ } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import Footer from '../components/footer'
import theme from '../components/_theme'
import '../css/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;