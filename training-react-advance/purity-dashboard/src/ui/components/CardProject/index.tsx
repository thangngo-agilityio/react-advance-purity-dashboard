import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';

type TCardProject = {
  id: string;
  image: string;
  name: string;
  projectId: string;
  description: string;
  onClick?: (id: string) => void;
};

const CardProject = ({
  id,
  image,
  name,
  projectId,
  description,
  onClick
}: TCardProject) => {
  const handleClick = () => {
    onClick && onClick(id)
  }
  return (
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
          src={image}
          alt={name}
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
        <Text size="textSm">Project #{projectId}</Text>
        <Heading mb="10px">{name}</Heading>
        <Text mb="20px">{description}</Text>
        <Box>
          <Button w="110px" size="xs" variant="tertiary" onClick={handleClick}>
            VIEW ALL
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
}
export default CardProject;
