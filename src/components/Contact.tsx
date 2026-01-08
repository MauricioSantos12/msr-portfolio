import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import type { Translation, Theme } from "../types";
import SpotlightCard from "./SpotlightCard";
import { Resend } from "resend";

const MotionBox = motion(Box);

interface ContactProps {
  t: Translation;
  theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ t, theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const toast = useToast();

  const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await resend.emails.send({
        from: `Acme <${formData.email}>`,
        to: ["mauricio.santosr12@gmail.com"],
        subject: `New message from ${formData.name} | Portfolio Contact Form`,
        html: `<strong>My name is ${formData.name}.</strong><br/><p>${formData.message}</p>`,
      });
      if (data) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out! I'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      if (error) {
        toast({
          title: "Error",
          description:
            "There was an error sending your message. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error sending your message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error({ error });
    }
  };

  const bgColor = useColorModeValue("gray.100", "blackAlpha.400");

  return (
    <Box as="section" id="contact" py="16">
      <Container maxW="container.md">
        <VStack spacing="12" mb="8" textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heading mb="2">{t.contact.title}</Heading>
            <Text
              color="brand.purple"
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="0.3em"
              textTransform="uppercase"
            >
              {t.contact.description}
            </Text>
          </MotionBox>
        </VStack>

        <SpotlightCard theme={theme}>
          <Box as="form" p={{ base: "6", md: "12" }} onSubmit={handleSubmit}>
            <VStack spacing="4">
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing="4" w="full">
                <FormControl isRequired>
                  <FormLabel
                    fontSize="2xs"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="widest"
                    color="gray.500"
                  >
                    {t.contact.name}
                  </FormLabel>
                  <Input
                    variant="filled"
                    bg={bgColor}
                    borderColor="whiteAlpha.100"
                    _focus={{
                      borderColor: "brand.purple",
                      bg: bgColor,
                    }}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel
                    fontSize="2xs"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="widest"
                    color="gray.500"
                  >
                    {t.contact.email}
                  </FormLabel>
                  <Input
                    type="email"
                    variant="filled"
                    bg={bgColor}
                    borderColor="whiteAlpha.100"
                    _focus={{
                      borderColor: "brand.purple",
                      bg: bgColor,
                    }}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>
              </SimpleGrid>

              <FormControl isRequired>
                <FormLabel
                  fontSize="2xs"
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="widest"
                  color="gray.500"
                >
                  {t.contact.message}
                </FormLabel>
                <Textarea
                  variant="filled"
                  bg={bgColor}
                  borderColor="whiteAlpha.100"
                  _focus={{ borderColor: "brand.purple", bg: "blackAlpha.600" }}
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </FormControl>

              <Button
                type="submit"
                variant="glow"
                w="full"
                py="4"
                leftIcon={<Icon as={Terminal} />}
                fontSize="xs"
              >
                {t.contact.send}
              </Button>
            </VStack>
          </Box>
        </SpotlightCard>
      </Container>
    </Box>
  );
};

export default Contact;
