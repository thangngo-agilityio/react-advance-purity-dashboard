import { Heading, HStack, Text } from '@chakra-ui/react';

type TInforItemProps = {
  param?: string;
  content?: string;
};

const InforItem = ({ param, content, ...rest }: TInforItemProps) => (
  <HStack {...rest}>
    <Heading fontSize="sm" color="text.500">
      {param}:
    </Heading>
    <Text fontSize="sm">{content}</Text>
  </HStack>
);

export default InforItem;
