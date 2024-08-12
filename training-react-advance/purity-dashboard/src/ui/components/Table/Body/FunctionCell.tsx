import { memo } from 'react';
import { Heading, Td, Text, VStack } from '@chakra-ui/react';

// Components
import { TDataSource } from '@/lib/types';

const FunctionCell = ({ job, role }: TDataSource) => (
  <Td px={0} w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}>
    <VStack gap={0} alignItems="flex-start" pr="20px">
      <Heading
        size="md"
        textOverflow="ellipsis"
        overflow="hidden"
        w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}
      >
        {role as string}
      </Heading>
      <Text
        variant="tertiary"
        textOverflow="ellipsis"
        overflow="hidden"
        w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}
      >
        {job as string}
      </Text>
    </VStack>
  </Td>
);

export default memo(FunctionCell);
