'use client';

import { memo, useState } from 'react';
import isEqual from 'react-fast-compare';
import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
} from '@chakra-ui/react';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';

// Components
import { Dot } from '@/ui/icons';
import { AuthorForm, Modal } from '../..';

// Types
import { TRecordAuthor } from '@/lib/types';

type TActionCellComponent = {
  data?: TRecordAuthor;
  isAuthor?: boolean;
  isOpenOption?: boolean;
  onUpdateAuthor?: (author: TRecordAuthor) => void;
};

const ActionCellComponent = ({
  data,
  isAuthor,
  isOpenOption,
  onUpdateAuthor,
}: TActionCellComponent) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleEditModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <Td
        px={5}
        fontSize="md"
        color="text.primary"
        fontWeight="semibold"
        textAlign="center"
        position="relative"
      >
        {isAuthor ? (
          <Button
            p={0}
            bg="none"
            _hover={{
              bg: 'none',
            }}
            _active={{
              bg: 'none',
            }}
            fontSize="sm"
            fontWeight="bold"
            color="text.500"
            onClick={handleToggleEditModal}
          >
            Edit
          </Button>
        ) : (
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
                    transform="rotate(90deg)"
                  >
                    <Dot />
                  </IconButton>
                </MenuButton>
                {isOpenOption && (
                  <MenuList border="none" mt="-2.5" bg="transparent" minW={65}>
                    <MenuItem bg="transparent">
                      <Flex
                        position="absolute"
                        right={4}
                        minW={12}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        gap="10px"
                      >
                        <EditIcon
                          w="18px"
                          h="18px"
                          onClick={() => {}}
                          data-testid="edit-icon"
                        />
                        <ViewIcon
                          w="18px"
                          h="18px"
                          onClick={() => {}}
                          data-testid="View-icon"
                        />
                      </Flex>
                    </MenuItem>
                  </MenuList>
                )}
              </>
            )}
          </Menu>
        )}
      </Td>
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          onClose={handleToggleEditModal}
          title="Edit Author"
          haveCloseButton
          body={
            <AuthorForm
              data={data}
              onSubmit={onUpdateAuthor}
              onCloseModal={handleToggleEditModal}
            />
          }
        />
      )}
    </>
  );
};

const ActionCell = memo(ActionCellComponent, isEqual);

export default ActionCell;
