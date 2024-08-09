import { Progress, Td, Text, VStack } from '@chakra-ui/react';
import { memo } from 'react';

type TCompletionCellProps = {
  completion: number;
};

const CompletionCell = ({ completion }: TCompletionCellProps) => (
  <Td px={0}>
    <VStack alignItems="flex-start">
      <Text color="#38A169" fontWeight="bold">
        {completion}%
      </Text>
      <Progress
        w="125px"
        borderRadius="md"
        value={completion}
        size="xs"
        colorScheme="green"
      />
    </VStack>
  </Td>
);

export default memo(CompletionCell);
