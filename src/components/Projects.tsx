import React from "react";
import {
  Box,
  Container,
  Heading,
  Grid,
  GridItem,
  Text,
  HStack,
  Image,
  Button,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Github, ArrowUp, Globe } from "lucide-react";
import type { Translation, Theme, Project } from "../types";
import SpotlightCard from "./SpotlightCard";

const MotionHeading = motion(Heading);

interface ProjectsProps {
  t: Translation;
  theme: Theme;
  lang: string;
}

const Projects: React.FC<ProjectsProps> = ({ t, theme, lang }) => {
  const projectsEN: Project[] = [
    {
      title: "Scholar Test App",
      description:
        "A CMS to create and manage interactive test with real-time feedback.",
      image: "../../public/assets/Projects/ScholarTest.png",
      tags: ["React", "Vite", "Node js", "MYSQL", "Chakra UI"],
      codeUrl: "https://github.com/MauricioSantos12/scholar_test_frontend",
      pageUrl: "https://scholar-test-frontend.onrender.com/",
    },
    {
      title: "Luxury Shop",
      description:
        "A high-end e-commerce platform for luxury fashion brands with personalized shopping experiences.",
      image: "../../public/assets/Projects/Luxury_Shopp.png",
      tags: ["Next js", "Javascript", "CSS"],
      codeUrl: "https://github.com/MauricioSantos12/luxury_ibg_shop",
      pageUrl: "https://luxuryshopibague.com/",
    },
    {
      title: "Real State App",
      description:
        "Is a real estate listing platform that connects buyers and sellers with advanced search and virtual tours.",
      image: "../../public/assets/Projects/Real_state.png",
      tags: ["React", "Javascript", "Express", "CSS", "MYSQL"],
      codeUrl: "https://github.com/MauricioSantos12/real_estate_frontend",
      pageUrl: "https://real-estate-frontend-1dq3.onrender.com/",
    },
    {
      title: "Cine Hub App",
      description:
        "A movie discovery app that can you search for movies, view details, and watch trailers.",
      image: "../../public/assets/Projects/CineHub.png",
      tags: ["React", "JavaScript", "CSS", "API"],
      codeUrl: "https://github.com/MauricioSantos12/cine_hub_frntnd",
      pageUrl: "https://cine-hub-frntnd.onrender.com/",
    },
    {
      title: "Rest api with node js",
      description:
        "A RESTful API built with Node.js and Express for managing movies.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*MlKBt6JcT-b5HWBJkp7XsA.jpeg",
      tags: ["Node js", "Express", "MongoDB", "REST API"],
      codeUrl: "https://github.com/MauricioSantos12/rest-api-local/tree/main",
    },
  ];

  const projectsES: Project[] = [
    {
      title: "Aplicación de Pruebas Scholar",
      description:
        "Un CMS para crear y gestionar pruebas interactivas con retroalimentación en tiempo real.",
      image: "../../public/assets/Projects/ScholarTest.png",
      tags: ["React", "Vite", "Node js", "MYSQL", "Chakra UI"],
      codeUrl: "https://github.com/MauricioSantos12/scholar_test_frontend",
      pageUrl: "https://scholar-test-frontend.onrender.com/",
    },
    {
      title: "Tienda de Lujo",
      description:
        "Una plataforma de comercio electrónico de alta gama para marcas de moda de lujo con experiencias de compra personalizadas.",
      image: "../../public/assets/Projects/Luxury_Shopp.png",
      tags: ["Next js", "Javascript", "CSS"],
      codeUrl: "https://github.com/MauricioSantos12/luxury_ibg_shop",
      pageUrl: "https://luxuryshopibague.com/",
    },
    {
      title: "Aplicación de Bienes Raíces",
      description:
        "Es una plataforma de listado de bienes raíces que conecta a los compradores y vendedores con búsqueda avanzada y tours virtuales.",
      image: "../../public/assets/Projects/Real_state.png",
      tags: ["React", "Javascript", "Express", "CSS", "MYSQL"],
      codeUrl: "https://github.com/MauricioSantos12/real_estate_frontend",
      pageUrl: "https://real-estate-frontend-1dq3.onrender.com/",
    },
    {
      title: "Aplicación Cine Hub",
      description:
        "Es una aplicación de descubrimiento de películas que proporciona recomendaciones personalizadas y trailers para aficionados al cine.",
      image: "../../public/assets/Projects/CineHub.png",
      tags: ["React", "JavaScript", "CSS", "API"],
      codeUrl: "https://github.com/MauricioSantos12/cine_hub_frntnd",
      pageUrl: "https://cine-hub-frntnd.onrender.com/",
    },
    {
      title: "API REST con Node js",
      description:
        "Es una API REST construida con Node.js y Express para gestionar datos de películas.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*MlKBt6JcT-b5HWBJkp7XsA.jpeg",
      tags: ["Node js", "Express", "MongoDB", "API REST"],
      codeUrl: "https://github.com/MauricioSantos12/rest-api-local/tree/main",
    },
  ];

  const projects = lang === "ES" ? projectsES : projectsEN;

  const bgColor = useColorModeValue("gray.100", "blackAlpha.600");

  return (
    <Box as="section" id="projects" py="16" bg={bgColor}>
      <Container maxW="container.xl">
        <MotionHeading
          mb="16"
          letterSpacing="tighter"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t.projects.title}
        </MotionHeading>

        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
          gap="8"
          maxW="100%"
        >
          {projects.map((project, idx) => (
            <GridItem
              key={project.title}
              colSpan={{ base: 1, lg: idx === 0 ? 2 : 1 }}
              h="full"
            >
              <SpotlightCard
                theme={theme}
                props={{
                  h: "full",
                }}
              >
                <Box h="full" display="flex" flexDirection="column">
                  <Box position="relative" overflow="hidden" h="240px">
                    <Image
                      src={project.image}
                      alt={project.title}
                      w="full"
                      h="full"
                      objectFit="cover"
                      opacity="0.5"
                      transition="0.7s ease"
                      _groupHover={{ transform: "scale(1.1)", opacity: 0.8 }}
                    />
                  </Box>
                  <Box p="8" flex="1">
                    <HStack spacing="2" mb="4" wrap="wrap">
                      {project.tags.map((tag) => (
                        <Box
                          key={tag}
                          px="3"
                          py="1"
                          bg="purple.500"
                          color="white"
                          fontSize="10px"
                          fontWeight="bold"
                          letterSpacing="widest"
                          textTransform="uppercase"
                          borderRadius="full"
                          border="1px solid"
                          borderColor="whiteAlpha.200"
                        >
                          {tag}
                        </Box>
                      ))}
                    </HStack>
                    <Heading size="lg" mb="3" letterSpacing="tight">
                      {project.title}
                    </Heading>
                    <Text
                      color="gray.400"
                      fontSize="sm"
                      mb="8"
                      lineHeight="relaxed"
                    >
                      {project.description}
                    </Text>
                    <Stack
                      direction="row"
                      spacing="4"
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Button
                        onClick={() => window.open(project.codeUrl, "_blank")}
                        variant="glow"
                        leftIcon={<Icon as={Github} />}
                        size="sm"
                        px="6"
                      >
                        {t.projects.viewCode}
                      </Button>
                      <Button
                        variant="glow"
                        onClick={() => window.open(project.pageUrl, "_blank")}
                        leftIcon={<Icon as={Globe} />}
                        size="sm"
                        px="6"
                      >
                        {t.projects.pageUrl}
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </SpotlightCard>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
