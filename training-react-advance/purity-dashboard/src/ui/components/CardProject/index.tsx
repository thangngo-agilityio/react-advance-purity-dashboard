import { Box, Button, Heading, Image, Text, useDisclosure, VStack } from '@chakra-ui/react';

// Components
import { Modal, ProjectDetail } from '..';

// Types
import { TRecordProject } from '@/lib/types';

type TCardProject = {
  data: TRecordProject
};

const CardProject = ({
  // Update naming
  data,
}: TCardProject) => {
  const { isOpen, onToggle } = useDisclosure()
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
          src={`${data.fields.image}`}
          alt={`${data.fields.projectName}`}
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
        <Text size="textSm">Project #{data.fields._id}</Text>
        <Heading mb="10px">{data.fields.projectName}</Heading>
        <Text mb="20px">{data.fields.description}</Text>
        <Box>
          <Button w="110px" size="xs" variant="tertiary" onClick={onToggle}>
            VIEW ALL
          </Button>
        </Box>
      </VStack>


      {/* Remove modal outside component */}
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={onToggle}
          title="View Detail Project"
          haveCloseButton
          isProjectDetail
          body={
            <ProjectDetail data={data} />
          }
        />
      )}
    </VStack>
  );
}
export default CardProject;
