import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Circle,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { Translation, Theme, Milestone } from "../types";
import SpotlightCard from "./SpotlightCard";

const MotionHeading = motion(Heading);
const MotionBox = motion(Box);

interface TimelineProps {
  t: Translation;
  theme: Theme;
  lang: string;
}

const Timeline: React.FC<TimelineProps> = ({ t, theme, lang }) => {
  const milestonesEN: Milestone[] = [
    {
      role: "Front-End Developer",
      company: "SCALA Colombia SAS",
      date: "2023 - PRESENT",
      description: `Designed and developed responsive web interfaces using
React, Next.js, and JavaScript, improving load time and
accessibility across platforms.
Collaborated with UX/UI and back-end teams to translate
designs into scalable, user-focused applications.
Implemented performance optimization strategies and
accessibility standards, increasing usability metrics.
Applied Agile methodologies and Git for version control and
continuous delivery.
`,
    },
    {
      role: "Frontend Instructor",
      company: "Educamás Colombia",
      date: "2023",
      description: `Delivered interactive lessons on HTML, CSS, and JavaScript,
boosting student engagement and retention.
Designed project-based learning strategies aligned with
industry standards.`,
    },
    {
      role: "Front-End Developer Jr.",
      company: "Bcode",
      date: "2020 – 2023",
      description: `Contributed to the modernization of core codebases,
enhancing system performance and maintainability.
Participated in multi-disciplinary teams to implement new
features and resolve critical bugs.
Promoted code quality and efficiency through reusable
component design`,
    },
  ];

  const milestonesES: Milestone[] = [
    {
      role: "Desarrollador Front-End",
      company: "SCALA Colombia SAS",
      date: "2023 - PRESENT",
      description: `Diseño y desarrollo de interfaces web responsivas utilizando React, Next.js y JavaScript, mejorando el tiempo de carga y la accesibilidad en todas las plataformas.
Colaboración con equipos de UX/UI y back-end para traducir diseños en aplicaciones escalables y centradas en el usuario.
Implementación de estrategias de optimización del rendimiento y estándares de accesibilidad, aumentando las métricas de usabilidad.
Aplicación de metodologías ágiles y Git para el control de versiones y la entrega continua.
`,
    },
    {
      role: "Instructor de Front-End",
      company: "Educamás Colombia",
      date: "2023",
      description: `Entregue lecciones interactivas sobre HTML, CSS y JavaScript, impulsando la interacción y la retención de los estudiantes.
Diseñe estrategias de aprendizaje basadas en proyectos.`,
    },
    {
      role: "Desarrollador Front-End Jr.",
      company: "Bcode",
      date: "2020 – 2023",
      description: `Contribuyó a la modernización de core codebases, mejorando el rendimiento del sistema y la mantenibilidad.
Participé en equipos multidisciplinares para implementar nuevas características y resolver problemas críticos.
Promovió la calidad y eficiencia a través de la diseño de componentes reutilizables`,
    },
  ];

  const milestones = lang === "EN" ? milestonesEN : milestonesES;

  return (
    <Box as="section" id="timeline" py="16" bg="whiteAlpha.50">
      <Container maxW="container.lg">
        <MotionHeading
          textAlign="center"
          mb="20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.timeline.title}
        </MotionHeading>

        <Box position="relative">
          {/* Vertical Path Line */}
          <Box
            position="absolute"
            left={{ base: "4", md: "50%" }}
            top="0"
            bottom="0"
            w="2px"
            bgGradient="linear(to-b, brand.purple, transparent)"
            opacity="0.2"
            transform="translateX(-50%)"
          />

          <VStack spacing="12" align="stretch">
            {milestones.map((m, idx) => (
              <Box key={idx} position="relative" pl={{ base: "12", md: "0" }}>
                {/* Connector Circle */}
                <Circle
                  position="absolute"
                  left={{ base: "4", md: "50%" }}
                  transform="translateX(-50%)"
                  size="12"
                  bg="black"
                  border="2px solid"
                  borderColor="brand.purple"
                  zIndex="2"
                  boxShadow="0 0 15px rgba(168,85,247,0.4)"
                >
                  <Circle
                    size="3"
                    bg="brand.purple"
                    sx={{ animation: "ping 1.5s infinite" }}
                  />
                </Circle>

                <Box
                  w={{ base: "full", md: "45%" }}
                  ml={{ base: "0", md: idx % 2 === 0 ? "auto" : "0" }}
                  mr={{ base: "0", md: idx % 2 !== 0 ? "auto" : "0" }}
                >
                  <MotionBox
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <SpotlightCard theme={theme}>
                      <Box p="8">
                        <Text
                          color="brand.purple"
                          fontSize="xs"
                          fontWeight="bold"
                          letterSpacing="widest"
                        >
                          {m.date}
                        </Text>
                        <Heading size="md" mt="2" mb="1" letterSpacing="tight">
                          {m.role}
                        </Heading>
                        <Text
                          color="gray.500"
                          fontSize="sm"
                          fontWeight="bold"
                          mb="4"
                        >
                          {m.company}
                        </Text>
                        <Text
                          color="gray.400"
                          fontSize="sm"
                          lineHeight="relaxed"
                        >
                          {m.description}
                        </Text>
                      </Box>
                    </SpotlightCard>
                  </MotionBox>
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      </Container>
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </Box>
  );
};

export default Timeline;
