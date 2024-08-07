'use client';

import { memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  Td,
} from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

// Components
import { Dot } from '@/ui/icons';


const ActionCellComponent = ({

}) => (
  <Td
    px={5}
    fontSize="md"
    color="text.primary"
    fontWeight="semibold"
    textAlign="center"
    position="relative"
  >
    <Menu closeOnSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            isActive={isOpen}
            p={0}
            bg="none"
            _hover={{
              bg: 'none',
            }}
            _active={{
              bg: 'none',
            }}
          >
            <IconButton
              aria-label="This is the icon action"
              w={7}
              h={7}
              bgColor="transparent"
              _hover={{
                bgColor: 'transparent',
              }}
              data-testid="dot-icon"
              transform='rotate(90deg)'
            >
              <Dot />
            </IconButton>
          </MenuButton>
        </>
      )}
    </Menu>
  </Td>
);


const ActionCell = memo(ActionCellComponent, isEqual);

export default ActionCell;
