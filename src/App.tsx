import React, { useState, useEffect } from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { translations } from "./translations";
import type { Language } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>("EN");
  const [isLoaded, setIsLoaded] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <Box
        h="100vh"
        bg="black"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Box
            w="16"
            h="16"
            border="2px solid"
            borderColor="brand.purple"
            borderTopColor="transparent"
            borderRadius="full"
            shadow="0 0 20px rgba(168,85,247,0.5)"
          />
        </motion.div>
        <Text
          mt="4"
          fontFamily="heading"
          fontSize="xs"
          color="brand.purple"
          letterSpacing="0.5em"
        >
          INITIALIZING SYSTEM
        </Text>
      </Box>
    );
  }

  return (
    <Box minH="100vh" position="relative" overflowX="hidden">
      <div className="grid-overlay" />

      <Navbar
        lang={lang}
        setLang={setLang}
        theme={colorMode}
        setTheme={toggleColorMode}
        t={t}
      />

      <main>
        <Hero t={t} theme={colorMode} lang={lang} />
        <Skills t={t} theme={colorMode} lang={lang} />
        <Timeline t={t} theme={colorMode} lang={lang} />
        <Projects t={t} theme={colorMode} lang={lang} />
        <Contact t={t} theme={colorMode} />
      </main>

      <Footer t={t} theme={colorMode} />
    </Box>
  );
};

export default App;
