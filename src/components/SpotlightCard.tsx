import React, { useState, useRef, MouseEvent } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface SpotlightCardProps {
  children: React.ReactNode;
  props?: any;
  theme: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  props = {},
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const bg = useColorModeValue("whiteAlpha.600", "whiteAlpha.50");
  const border = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  return (
    <Box
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      position="relative"
      overflow="hidden"
      transition="all 0.3s"
      bg={bg}
      border="1px solid"
      borderColor={border}
      backdropFilter="blur(16px)"
      borderRadius="2xl"
      {...props}
    >
      <Box
        pointerEvents="none"
        position="absolute"
        inset="-px"
        transition="opacity 0.3s"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
          opacity,
        }}
      />
      <Box position="relative" zIndex="1">
        {children}
      </Box>
    </Box>
  );
};

export default SpotlightCard;
