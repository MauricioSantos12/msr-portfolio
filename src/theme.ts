import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      black: "#000000",
      purple: "#a855f7",
      deepPurple: "#6b21a8",
      gray: "#9ca3af",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "black" : "gray.50",
        color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "lg",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "widest",
      },
      variants: {
        glow: {
          bg: "brand.purple",
          color: "white",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
          _hover: {
            bg: "purple.400",
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.6)",
            transform: "translateY(-2px)",
          },
          _active: {
            transform: "scale(0.95)",
          },
        },
      },
    },
  },
});
