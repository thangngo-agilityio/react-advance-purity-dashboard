import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';

type TCardProject = {
  src?: string;
  alt?: string;
  projectNumber?: number;
  projectName?: string;
  description?: string;
};

const CardProject = ({
  src,
  alt,
  projectNumber,
  projectName,
  description,
}: TCardProject) => (
  <VStack>
    <Box
      position="relative"
      borderRadius="lg"
      w="100%"
      h="192px"
      mb="20px"
      borderColor="transparent"
    >
      <Image
        borderRadius="lg"
        objectFit="cover"
        w="100%"
        h="100%"
        src={src}
        alt={alt}
      />
      <Image
        position="absolute"
        borderRadius="lg"
        borderColor="transparent"
        w="100%"
        h="100%"
        top={0}
        left={0}
        zIndex={2}
        bgGradient="linear(to-t, linear.100, linear.200)"
      />
    </Box>
    <VStack alignItems="flex-start" w="100%" px="10px">
      <Text size="textSm">Project #{projectNumber}</Text>
      <Heading mb="10px">{projectName}</Heading>
      <Text mb="20px">{description}</Text>
      <Box>
        <Button w="110px" size="xs" variant="tertiary">
          VIEW ALL
        </Button>
      </Box>
    </VStack>
  </VStack>
);

export default CardProject;
