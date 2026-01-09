import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Avatar,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Translation, Theme } from "../types";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

interface HeroProps {
  t: Translation;
  theme: Theme;
  lang: string;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const descColor = useColorModeValue("gray.600", "gray.400");
  const titleColor = useColorModeValue("gray.800", "transparent");

  const downloadCVFn = () => {
    const url =
      lang === "EN"
        ? "https://i.ibb.co/wF2HdX3V/CV-Mauricio-Santos-EN.png"
        : "https://i.ibb.co/rKvGT23B/CV-Mauricio-Santos-ES.png";
    window.open(url, "_blank");
  };

  return (
    <Box
      as="section"
      id="hero"
      minH="100vh"
      pt="28"
      pb="20"
      display="flex"
      alignItems="center"
      position="relative"
    >
      {/* Background Glows */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="600px"
        h="600px"
        bg="purple.600"
        opacity="0.1"
        filter="blur(120px)"
        pointerEvents="none"
      />

      <Container
        maxW="container.lg"
        textAlign="center"
        position="relative"
        zIndex="1"
      >
        <VStack spacing="4">
          <MotionBox
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            position="relative"
          >
            <Box
              p="1"
              bgGradient="linear(to-tr, brand.purple, brand.deepPurple)"
              borderRadius="full"
              shadow="0 0 30px rgba(168,85,247,0.3)"
            >
              <Avatar
                w={{ base: "200px", md: "200px" }}
                h={{ base: "200px", md: "200px" }}
                name="Mauricio Santos"
                src="https://i.ibb.co/4R43Cnfy/Mauro-Photo.png"
                border="4px solid black"
              />
            </Box>
            <Box
              position="absolute"
              inset="-4"
              bg="brand.purple"
              opacity="0.2"
              filter="blur(24px)"
              borderRadius="full"
              zIndex="-1"
            />
          </MotionBox>

          <VStack spacing="1">
            <MotionHeading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              letterSpacing="tighter"
              bgGradient="linear(to-r, gray.100, gray.500)"
              bgClip="text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              color={titleColor}
            >
              {t.hero.greeting}
            </MotionHeading>

            <MotionText
              color="brand.purple"
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="0.4em"
              textTransform="uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.role}
            </MotionText>

            <MotionText
              maxW="2xl"
              color={descColor}
              fontSize={{ base: "md", md: "lg" }}
              lineHeight="tall"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t.hero.description}
            </MotionText>
          </VStack>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="glow" size="lg" px="10" onClick={downloadCVFn}>
              {t.hero.downLoadCV}
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
