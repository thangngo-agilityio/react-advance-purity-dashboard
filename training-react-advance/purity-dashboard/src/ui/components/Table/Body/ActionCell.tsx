'use client';

import { memo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Button, IconButton, Menu, MenuButton, Td } from '@chakra-ui/react';
// import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

// Components
import { Dot } from '@/ui/icons';
import { AuthorForm, Modal } from '../..';
import { TRecordAuthor } from '@/lib/types';

type TActionCellComponent = {
  data?: TRecordAuthor;
  isAuthor?: boolean;
  onUpdateAuthor?: (author: TRecordAuthor) => void;
};

const ActionCellComponent = ({
  data,
  isAuthor,
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
