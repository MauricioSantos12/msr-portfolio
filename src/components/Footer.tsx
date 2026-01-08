import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Github, Twitter, Linkedin, ArrowUp, Cpu } from "lucide-react";
import type { Translation, Theme } from "../types";

interface FooterProps {
  t: Translation;
  theme: Theme;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bg = useColorModeValue("gray.100", "blackAlpha.700");
  const textColor = useColorModeValue("gray.800", "white");
  const socialBg = useColorModeValue("whiteAlpha.200", "whiteAlpha.50");
  const borderColorIcon = useColorModeValue("gray.400", "whiteAlpha.100");

  return (
    <Box
      as="footer"
      py="16"
      bg={bg}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl">
        <VStack spacing="4">
          <HStack spacing="2" fontWeight="bold">
            <Icon as={Cpu} color="brand.purple" boxSize="6" />
            <Heading size="md" letterSpacing="tighter" color={textColor}>
              MSR
            </Heading>
          </HStack>

          <HStack spacing="6">
            <IconButton
              as={Link}
              href="https://github.com/MauricioSantos12"
              isExternal
              aria-label="GitHub"
              icon={<Github size={24} />}
              p="8"
              bg={socialBg}
              borderRadius="xl"
              border="1px solid"
              borderColor={borderColorIcon}
              _hover={{
                bg: "brand.purple",
                color: "white",
                borderColor: "brand.purple",
                transform: "translateY(-5px)",
              }}
              transition="all 0.3s"
            />
            <IconButton
              as={Link}
              href="https://x.com/Maurici89494430"
              isExternal
              aria-label="Twitter"
              icon={<Twitter size={24} />}
              p="8"
              bg={socialBg}
              borderRadius="xl"
              border="1px solid"
              borderColor={borderColorIcon}
              _hover={{
                bg: "brand.purple",
                color: "white",
                borderColor: "brand.purple",
                transform: "translateY(-5px)",
              }}
              transition="all 0.3s"
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/mauricio-santos-rebolledo-9a0924137/"
              isExternal
              aria-label="LinkedIn"
              icon={<Linkedin size={24} />}
              p="8"
              bg={socialBg}
              borderRadius="xl"
              border="1px solid"
              borderColor={borderColorIcon}
              _hover={{
                bg: "brand.purple",
                color: "white",
                borderColor: "brand.purple",
                transform: "translateY(-5px)",
              }}
              transition="all 0.3s"
            />
          </HStack>

          <VStack spacing="4">
            <IconButton
              aria-label="Back to Top"
              icon={<ArrowUp size={20} />}
              borderRadius="full"
              variant="outline"
              borderColor={borderColorIcon}
              _hover={{ borderColor: "brand.purple", color: "brand.purple" }}
              onClick={scrollToTop}
            />
            <Text
              fontSize="2xs"
              fontWeight="bold"
              color={textColor}
              letterSpacing="0.3em"
              textTransform="uppercase"
            >
              {t.footer.backToTop}
            </Text>
          </VStack>

          <Text
            fontSize="2xs"
            letterSpacing="widest"
            color={textColor}
            fontWeight="bold"
          >
            © {new Date().getFullYear()} MSR
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
