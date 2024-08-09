import { TDataSource } from '@/lib/types';
import { Flex, Heading, Td, Text, VStack } from '@chakra-ui/react';

// Components
import Avatar from '../../common/Avatar';
import { memo } from 'react';

const AuthorCell = ({ image, name, email }: TDataSource) => (
  <Td px={0}>
    <Flex alignItems="center">
      <Avatar src={`${image}`} alt={`${name}`} />
      <VStack ml="15px" alignItems="flex-start" gap={0}>
        <Heading size="md">{name as string}</Heading>
        <Text variant="tertiary">{email as string}</Text>
      </VStack>
    </Flex>
  </Td>
);

export default memo(AuthorCell);
