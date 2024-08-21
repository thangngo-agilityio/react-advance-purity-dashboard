import { HStack, Link, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { FOOTER_LINKS } from '@/lib/constants';

export type TFooterProps = {
  isAuth?: boolean
}

const Footer = ({ isAuth }: TFooterProps) => (
  <Stack w="100%" flexDirection={{ base: 'column', lg: 'row' }} px={isAuth ? '30px' : ''} pt={isAuth ? '4px' : ''} pb={isAuth ? '20px' : ''} alignItems={{ base: "center", lg: 'flex-end' }} justifyContent={{ base: "center", lg: "space-between" }}>
    <HStack gap="2px">
      <Text content="@ 2021, Made with ❤️ by" size={{ base: "textXs", lg: "textSm" }} />
      <Text
        content="Creative Tim"
        color="text.300"
        fontWeight="700"
        size={{ base: "textXs", lg: "textSm" }}
      />
      <Text content="&" size={{ base: "textXs", lg: "textSm" }} />
      <Text content="Simple" color="text.300" fontWeight="700" size={{ base: "textXs", lg: "textSm" }} />
      <Text content="for a better web" size={{ base: "textXs", lg: "textSm" }} />
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
  </Stack>
);

export default Footer;
