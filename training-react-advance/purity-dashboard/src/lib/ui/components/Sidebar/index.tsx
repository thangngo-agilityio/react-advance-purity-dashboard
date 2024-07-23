import { Flex, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";

// Component
import { LineIcon, LogoIcon } from "@/lib/icons";
import { Fragment, ReactElement } from "react";
import { ROUTES } from "@/lib/constants";
import Navigation from "../Navigation";

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
    >
      {listItem.map(
        ({ leftIcon, destination, menuItemContent, id }) => {
          const LeftIconComponent = leftIcon || Fragment;
          return (
            <ListItem key={id} aria-label="item-icon">

              <Navigation destination={destination} onClick={() => { }}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex
                    gap={2.5}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <LeftIconComponent />
                    <Text
                      fontSize="lg"
                      fontWeight="md"
                      color="text.primary"
                      transition="all .25s ease-in-out"
                    >
                      {menuItemContent}
                    </Text>
                  </Flex>
                </Flex>
              </Navigation>
            </ListItem>
          );
        },
      )}
    </List>
  </VStack>
);

export default Sidebar;
