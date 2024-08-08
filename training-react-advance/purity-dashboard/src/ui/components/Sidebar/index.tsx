import { Link, VStack } from '@chakra-ui/react';

// Component
import { LineIcon, LogoIcon } from '@/ui/icons';
import CardHelp from '../CardHelp';

// Constants
import { SIDEBAR_LIST } from '@/lib/constants';
import Menu from '../common/Menu';

const Sidebar = () => (
  <VStack width="246px" pt='44px'>
    <Link href="/" as="h1" mb="27.5px">
      <LogoIcon />
    </Link>
    <LineIcon />
    {SIDEBAR_LIST.map((item) => (
      <Menu title={item.title} listItem={item.listItem} />
    ))}
    <CardHelp />
  </VStack>
);

export default Sidebar;
