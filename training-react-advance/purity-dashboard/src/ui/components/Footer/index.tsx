import { HStack, Link, List, ListItem } from '@chakra-ui/react';
import { Text } from '../common';
import { FOOTER_LINKS } from '@/lib/constants';

const Footer = () => (
  <HStack w="100%" alignItems="flex-end" justifyContent="space-between">
    <HStack gap="2px">
      <Text content="@ 2021, Made with ❤️ by" size="textSm" />
      <Text
        content="Creative Tim"
        color="text.300"
        fontWeight="700"
        size="textSm"
      />
      <Text content="&" size="textSm" />
      <Text content="Simple" color="text.300" fontWeight="700" size="textSm" />
      <Text content="for a better web" size="textSm" />
    </HStack>

    <List
      display="flex"
      flexDirection="row"
      color="text.400"
      fontWeight="400"
      gap="44px"
    >
      {FOOTER_LINKS.map(({ name, path }) => (
        <ListItem key={name}>
          <Link href={path} p={0}>
            {name}
          </Link>
        </ListItem>
      ))}
    </List>
  </HStack>
);

export default Footer;
