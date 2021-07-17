import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#5e9dd4",
      200: "#5e9dd4",
      300: "#5e9dd4",
      400: "#5e9dd4",
      500: "#5e9dd4",
      600: "#5e9dd4"
    },
  }
});

export default theme;