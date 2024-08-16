import { TRecordProject } from "@/lib/types";
import { formatDecimalNumber } from "@/lib/utils/formatNumber";
import { Box, Heading, HStack, Image, Progress, Text, VStack } from "@chakra-ui/react"
import { memo } from "react";

type TProjectDetailProps = {
  data?: TRecordProject
}

const ProjectDetail = ({ data }: TProjectDetailProps) => {
  return (
    <VStack w='100%'>
      <Box
        position="relative"
        borderRadius="lg"
        w="100%"
        h="250px"
        mb="20px"
        borderColor="transparent"
      >
        <Image
          borderRadius="lg"
          objectFit="cover"
          w="100%"
          h="100%"
          src={`${data?.fields.image}`}
          alt={`${data?.fields.projectName}`}
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
        <VStack alignItems='flex-start' gap={0} mb='10px'>
          <Heading mb="5px">{data?.fields.projectName}</Heading>
          <Text size="textSm">Project #{data?.fields._id}</Text>
        </VStack>
        <HStack w='100%' alignItems='flex-start' justifyContent='space-between'>
          <VStack alignItems='flex-start'>
            <Heading>Budget</Heading>
            <Text mb="20px">{`$${formatDecimalNumber(data?.fields.budget)}`}</Text>
          </VStack>
          <VStack alignItems='flex-start'>
            <Heading>Status</Heading>
            <Text mb="20px">{data?.fields.status}</Text>
          </VStack>
          <VStack alignItems='flex-start'>
            <Heading>Completion</Heading>
            <VStack alignItems="flex-start">
              <Text color="#38A169" fontWeight="bold">
                {data?.fields.completion}%
              </Text>
              <Progress
                w="125px"
                borderRadius="md"
                value={data?.fields.completion}
                size="xs"
                colorScheme="green"
              />
            </VStack>
          </VStack>
        </HStack>

        <VStack alignItems='flex-start'>
          <Heading>Descripttion</Heading>
          <Text mb="20px">{data?.fields.description}</Text>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default memo(ProjectDetail);
