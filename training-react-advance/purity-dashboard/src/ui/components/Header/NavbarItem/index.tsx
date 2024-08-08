import { Box, Flex, Link } from '@chakra-ui/react';

// Components
import { Heading, Text } from '../../common';

type TNavbarProps = {
  path?: string;
  name?: string;
  colorFill?: string;
};

const Navbar = ({ path, name, colorFill }: TNavbarProps) => (
  <Box>
    <Flex flexDirection="row" alignItems="center" mb="5px">
      <Text size="textSm" content="Pages /" color={colorFill} />
      <Link href={path} variant="secondary" color={colorFill}>
        {name}
      </Link>
    </Flex>
    <Heading as={'h2'} title={name} size="md" color={colorFill} />
  </Box>
);

export default Navbar;
