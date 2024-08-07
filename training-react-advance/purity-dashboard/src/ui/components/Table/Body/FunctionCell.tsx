import { TDataSource } from "@/lib/types";
import { Heading, Td, Text, VStack } from "@chakra-ui/react";

const FunctionCell = ({ job, role }: TDataSource) => (
  <Td px={0}>
    <VStack gap={0} alignItems='flex-start'>
      <Heading size='md'>
        {role}
      </Heading>
      <Text variant='tertiary'>
        {job}
      </Text>
    </VStack>
  </Td>
);

export default FunctionCell;
