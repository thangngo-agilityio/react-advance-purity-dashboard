import { TDataSource } from "@/lib/types";
import { Flex, Heading, Td, Text, VStack } from "@chakra-ui/react";

// Components
import Avatar from "../../common/Avatar";


const AuthorCell = ({ image, name, email }: TDataSource) => (
  <Td>
    <Flex alignItems='center'>
      <Avatar src={`${image}`} alt={`${name}`} />
      <VStack ml='15px' alignItems='flex-start'>
        <Heading size='md'>
          {name}
        </Heading>
        <Text variant='tertiary'>
          {email}
        </Text>
      </VStack>
    </Flex>
  </Td>
);

export default AuthorCell;
