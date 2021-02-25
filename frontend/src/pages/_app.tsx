import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="dark" />
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
