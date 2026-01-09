import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  useColorModeValue,
  Link,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Sun, Moon, Languages, Cpu } from "lucide-react";
import type { Language, Translation } from "../types";

const MotionBox = motion(Box);

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: "light" | "dark";
  setTheme: () => void;
  t: Translation;
}

const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  theme,
  setTheme,
  t,
}) => {
  const bg = useColorModeValue("whiteAlpha.700", "blackAlpha.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      w="full"
      zIndex="50"
      backdropFilter="blur(16px)"
      bg={bg}
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl" h="20">
        <Flex h="full" align="center" justify="space-between">
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            display="flex"
            alignItems="center"
          >
            <HStack spacing="2" fontWeight="bold">
              <Icon as={Cpu} color="brand.purple" boxSize="5" />
              <Heading size="md" letterSpacing="tighter" color={textColor}>
                MSR
              </Heading>
            </HStack>
          </MotionBox>

          <HStack spacing="8" display={{ base: "none", md: "flex" }}>
            {Object.entries(t.nav).map(([key, value]) => (
              <Link
                key={key}
                href={`#${key}`}
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color={textColor}
                opacity="0.8"
                _hover={{
                  color: "brand.purple",
                  opacity: 1,
                  textDecoration: "none",
                }}
              >
                {value}
              </Link>
            ))}
          </HStack>

          <HStack spacing="4">
            <Button
              size="sm"
              variant="ghost"
              leftIcon={<Languages size={18} />}
              onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
              color={textColor}
            >
              {lang}
            </Button>
            <IconButton
              aria-label="Toggle Theme"
              size="sm"
              variant="ghost"
              icon={theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              onClick={setTheme}
              color={textColor}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
