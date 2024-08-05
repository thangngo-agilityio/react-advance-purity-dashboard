import { Link, List, ListItem, VStack } from "@chakra-ui/react";
import { Fragment, ReactElement } from "react";

// Component
import { LineIcon, LogoIcon } from "@/ui/icons";
import Navigation from "../Navigation";
import CardHelp from "../CardHelp";

export type TMenuItem = {
  id: number;
  leftIcon?: () => ReactElement;
  menuItemContent?: string;
  destination: string;
};

type TSidebarProps = {
  listItem: Array<TMenuItem>
}

const Sidebar = ({ listItem = [] }: TSidebarProps) => (
  <VStack width='246px'>
    <Link href="/" as='h1' mb='27.5px'>
      <LogoIcon />
    </Link>
    <LineIcon />

    <List
      mt={2.5}
      aria-label="list-icon"
      w="full"
      mb='70px'
      px='16px'
    >
      {listItem.map(
        ({ leftIcon, destination, menuItemContent, id }) => {
          const LeftIconComponent = leftIcon || Fragment;
          return (
            <ListItem key={id} aria-label="item-icon">
              <Navigation destination={destination} leftIcon={<LeftIconComponent />}>
                {menuItemContent}
              </Navigation>
            </ListItem>
          );
        },
      )}
    </List>
    <CardHelp />
  </VStack>
);

export default Sidebar;
