import { memo } from 'react';
import { Heading, Td, Text, VStack } from '@chakra-ui/react';

// Components
import { TDataSource } from '@/lib/types';

const FunctionCell = ({ job, role }: TDataSource) => (
  <Td px={0}>
    <VStack gap={0} alignItems="flex-start">
      <Heading size="md">{role as string}</Heading>
      <Text variant="tertiary">{job as string}</Text>
    </VStack>
  </Td>
);

export default memo(FunctionCell);
