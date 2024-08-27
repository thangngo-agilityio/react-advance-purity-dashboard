import { Heading, Td, Text, VStack } from '@chakra-ui/react';

// Components
import { TDataSource } from '@/lib/types';

const FunctionCell = ({ job, role }: TDataSource) => (
  <Td px={0} w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}>
    <VStack gap={0} alignItems="flex-start" pr="20px">
      <Heading
        w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}
        size="md"
      >
        {role as string}
      </Heading>
      <Text
        w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}
        variant="tertiary"
      >
        {job as string}
      </Text>
    </VStack>
  </Td>
);

export default FunctionCell;
