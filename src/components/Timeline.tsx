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
      description: `
     <ul> 
      <li> Developed and maintained high-performance, responsive web applications using React, Next.js, and modern JavaScript, focusing on scalability and maintainability. </li>
      <li> Led the implementation of performance optimization strategies (code splitting, component optimization, efficient data fetching), improving page load times and overall user experience.  </li>
      <li> Collaborated closely with UX/UI designers, back-end developers, and product teams to translate complex requirements into intuitive, accessible interfaces.  </li>
      <li> Applied web accessibility standards (WCAG) and best practices, ensuring inclusive user experiences across devices and browsers.  </li>
      <li> Actively participated in Agile (Scrum) workflows, contributing to sprint planning, code reviews, and continuous delivery using Git-based version control. </li/>
      </ul>`,
    },
    {
      role: "Frontend Instructor",
      company: "Educamás Colombia",
      date: "2023",
      description: `
      <ul> 
      <li>Delivered structured and interactive training sessions on HTML, CSS, and JavaScript, adapting content to different learning levels.</li>
      <li>Designed project-based learning experiences aligned with real-world industry practices, increasing student engagement and completion rates.</li>
      <li>Mentored students on problem-solving, debugging techniques, and foundational software development concepts.</li>
      <li>Strengthened communication and leadership skills by translating technical concepts into clear, accessible explanations.</li>
      </ul>`,
    },
    {
      role: "Front-End Developer Jr.",
      company: "Bcode",
      date: "2020 – 2023",
      description: `  
      <ul> 
      <li>Contributed to the modernization and refactoring of legacy front-end codebases, improving performance, readability, and long-term maintainability.</li>
      <li>Developed reusable UI components, promoting consistent design systems and reducing development time across projects.</li>
      <li>Collaborated in cross-functional teams to implement new features, fix critical bugs, and support production deployments.</li>
      <li>Gained hands-on experience with best practices in clean code, version control, and collaborative development environments.</li>
      </ul>`,
    },
  ];

  const milestonesES: Milestone[] = [
    {
      role: "Desarrollador Front-End",
      company: "SCALA Colombia SAS",
      date: "2023 - Presente",
      description: `
      <ul>
        <li>Desarrollé y mantuve aplicaciones web responsivas y de alto rendimiento utilizando React, Next.js y JavaScript moderno, con enfoque en escalabilidad y mantenibilidad.</li>
        <li>Lideré la implementación de estrategias de optimización de rendimiento (code splitting, optimización de componentes y gestión eficiente de datos), mejorando los tiempos de carga y la experiencia de usuario.</li>
        <li>Colaboré estrechamente con diseñadores UX/UI, desarrolladores back-end y equipos de producto para transformar requerimientos complejos en interfaces intuitivas y accesibles.</li>
        <li>Apliqué estándares de accesibilidad web (WCAG) y buenas prácticas, garantizando experiencias inclusivas en distintos dispositivos y navegadores.</li>
        <li>Participé activamente en metodologías Agile (Scrum), contribuyendo a la planificación de sprints, revisiones de código y procesos de entrega continua mediante control de versiones con Git.</li>
      </ul>`,
    },
    {
      role: "Instructor de Front-End",
      company: "Educamás Colombia",
      date: "2023",
      description: `
      <ul>
        <li>Impartí sesiones de formación estructuradas e interactivas en HTML, CSS y JavaScript, adaptando los contenidos a distintos niveles de aprendizaje.</li>
        <li>Diseñé experiencias de aprendizaje basadas en proyectos alineadas con prácticas reales de la industria, aumentando el compromiso y la tasa de finalización de los estudiantes.</li>
        <li>Guié a los estudiantes en resolución de problemas, técnicas de depuración y conceptos fundamentales del desarrollo de software.</li>
        <li>Fortalecí habilidades de comunicación y liderazgo al traducir conceptos técnicos en explicaciones claras y accesibles.</li>
      </ul>`,
    },
    {
      role: "Desarrollador Front-End Jr.",
      company: "Bcode",
      date: "2020 – 2023",
      description: `
      <ul>
        <li>Contribuí a la modernización y refactorización de bases de código front-end heredadas, mejorando el rendimiento, la legibilidad y la mantenibilidad a largo plazo.</li>
        <li>Desarrollé componentes reutilizables de interfaz de usuario, promoviendo sistemas de diseño consistentes y reduciendo los tiempos de desarrollo entre proyectos.</li>
        <li>Colaboré con equipos multidisciplinarios para implementar nuevas funcionalidades, corregir errores críticos y apoyar despliegues en producción.</li>
        <li>Adquirí experiencia práctica en buenas prácticas de código limpio, control de versiones y entornos de desarrollo colaborativos.</li>
      </ul>`,
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
                          dangerouslySetInnerHTML={{ __html: m.description }}
                        />
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
