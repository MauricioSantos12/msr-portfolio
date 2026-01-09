import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Terminal,
  Cpu,
  Zap,
  Brain,
  MessageSquare,
  Users,
  Rocket,
} from "lucide-react";
import type { Translation, Theme, Skill } from "../types";
import SpotlightCard from "./SpotlightCard";

const MotionHeading = motion(Heading);

interface SkillsProps {
  t: Translation;
  theme: Theme;
  lang: string;
}

const Skills: React.FC<SkillsProps> = ({ t, theme, lang }) => {
  const technicalSkills: Skill[] = [
    {
      name: {
        EN: "React",
        ES: "React",
      },
      icon: Layout,
      type: "technical",
    },
    {
      name: {
        EN: "TypeScript",
        ES: "TypeScript",
      },
      icon: Code2,
      type: "technical",
    },
    {
      name: {
        EN: "Performance",
        ES: "Rendimiento",
      },
      icon: Cpu,
      type: "technical",
    },
    {
      name: {
        EN: "SEO",
        ES: "SEO",
      },
      icon: Zap,
      type: "technical",
    },
    {
      name: {
        EN: "Optimization",
        ES: "Optimización",
      },
      icon: Zap,
      type: "technical",
    },
    {
      name: {
        EN: "Scalability",
        ES: "Escalabilidad",
      },
      icon: Rocket,
      type: "technical",
    },
  ];

  const softSkills: Skill[] = [
    {
      name: {
        EN: "Critical Thinking",
        ES: "Pensamiento Crítico",
      },
      icon: Brain,
      type: "soft",
    },
    {
      name: {
        EN: "Effective Communication",
        ES: "Comunicación Efectiva",
      },
      icon: MessageSquare,
      type: "soft",
    },
    {
      name: {
        EN: "Team Collaboration",
        ES: "Colaboración en Equipo",
      },
      icon: Users,
      type: "soft",
    },
    {
      name: {
        EN: "Adaptability",
        ES: "Adaptabilidad",
      },
      icon: Rocket,
      type: "soft",
    },
  ];

  const subHeadingColor = useColorModeValue("brand.deepPurple", "brand.purple");
  const bgColor = useColorModeValue("gray.100", "blackAlpha.600");

  return (
    <Box as="section" id="skills" py="16" bg={bgColor}>
      <Container maxW="container.xl">
        <MotionHeading
          mb="8"
          letterSpacing="tighter"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {t.skills.title}
        </MotionHeading>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="16">
          <VStack align="stretch" spacing="8">
            <HStack
              color={subHeadingColor}
              fontSize="xs"
              fontWeight="bold"
              spacing="4"
            >
              <Box w="8" h="1px" bg="currentColor" />
              <Text letterSpacing="widest" textTransform="uppercase">
                {t.skills.technical}
              </Text>
            </HStack>
            <SimpleGrid columns={{ base: 2, sm: 3 }} spacing="4">
              {technicalSkills.map((skill) => (
                <SpotlightCard key={skill.name[lang] as any} theme={theme}>
                  <VStack py="10" px="4" spacing="4">
                    <Icon as={skill.icon} boxSize="8" color="brand.purple" />
                    <Text
                      fontSize="xs"
                      fontWeight="bold"
                      textAlign="center"
                      textTransform="uppercase"
                      letterSpacing="widest"
                    >
                      {skill.name[lang] as string}
                    </Text>
                  </VStack>
                </SpotlightCard>
              ))}
            </SimpleGrid>
          </VStack>

          <VStack align="stretch" spacing="8">
            <HStack
              color={subHeadingColor}
              fontSize="xs"
              fontWeight="bold"
              spacing="4"
            >
              <Box w="8" h="1px" bg="currentColor" />
              <Text letterSpacing="widest" textTransform="uppercase">
                {t.skills.soft}
              </Text>
            </HStack>
            <SimpleGrid columns={1} spacing="4">
              {softSkills.map((skill) => (
                <SpotlightCard key={skill.name[lang]} theme={theme}>
                  <HStack p="6" spacing="6">
                    <Box p="3" bg="whiteAlpha.100" borderRadius="xl">
                      <Icon as={skill.icon} boxSize="6" color="brand.purple" />
                    </Box>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      textTransform="uppercase"
                      letterSpacing="widest"
                    >
                      {skill.name[lang]}
                    </Text>
                  </HStack>
                </SpotlightCard>
              ))}
            </SimpleGrid>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Skills;
