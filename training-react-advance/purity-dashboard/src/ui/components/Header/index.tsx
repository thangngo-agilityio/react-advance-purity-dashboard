import { memo } from 'react';
import { Box, Flex } from '@chakra-ui/react';

// Component
import Navbar from './NavbarItem';
import { NotificationIcon, SearchIcon, SettingIcon } from '@/ui/icons';
import InputField from '../common/InputFiled';

type THeaderProps = {
  path?: string;
  name?: string;
  colorFill?: string;
  colorIcon?: string;
};

const Header = ({ path, name, colorFill, colorIcon }: THeaderProps) => (
  <Flex
    w="100%"
    alignItems="center"
    p="24px"
    justifyContent="space-between"
    borderRadius="lg"
  >
    <Box>
      <Navbar path={path} name={name} colorFill={colorFill} />
    </Box>
    <Flex flexDirection="row" alignItems="center">
      <Box mr="18px">
        <InputField
          type="search"
          placeholder="Type here..."
          leftIcon={<SearchIcon />}
          background="background.100"
        />
      </Box>
      <Box>
        <Flex gap="17px">
          <SettingIcon color={colorIcon} />
          <NotificationIcon color={colorIcon} />
        </Flex>
      </Box>
    </Flex>
  </Flex>
);

export default memo(Header);
