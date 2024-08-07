import { TDataSource } from "@/lib/types";
import { Heading, Td, Text, VStack } from "@chakra-ui/react";

const FunctionCell = ({ job, role }: TDataSource) => (
  <Td>
    <VStack>
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
