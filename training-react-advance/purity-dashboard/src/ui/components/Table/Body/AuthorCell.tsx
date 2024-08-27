import { TDataSource } from '@/lib/types';
import { Flex, Heading, Td, Text, VStack } from '@chakra-ui/react';

// Components
import Avatar from '../../common/Avatar';

const AuthorCell = ({ image, name, email }: TDataSource) => (
  <Td px={0} w={{ base: '200px', xl: '220px', '3xl': '450px', '6xl': '450px' }}>
    <Flex alignItems="center" pr="20px">
      <Avatar src={`${image}`} alt={`${name}`} />
      <VStack ml="15px" alignItems="flex-start" gap={0}>
        <Heading
          w={{ base: '200px', xl: '220px', '3xl': '450px', '6xl': '450px' }}
          size="md"
          textTransform="capitalize"
        >
          {name as string}
        </Heading>
        <Text
          w={{ base: '200px', xl: '220px', '3xl': '450px', '6xl': '450px' }}
          variant="tertiary"
        >
          {email as string}
        </Text>
      </VStack>
    </Flex>
  </Td>
);

export default AuthorCell;
