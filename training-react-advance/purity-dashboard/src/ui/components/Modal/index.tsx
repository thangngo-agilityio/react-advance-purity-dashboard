import { memo } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

export type TModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  body?: JSX.Element;
  haveCloseButton?: boolean;
};

const ModalComponent = ({
  isOpen,
  onClose,
  body,
  title = '',
  haveCloseButton = false,
}: TModalProps) => (
  <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent minW={320} maxW="fit-content">
      <ModalHeader
        display="flex"
        justifyContent={haveCloseButton ? 'space-between' : 'center'}
        alignItems="center"
        w="full"
        fontSize='lg'
      >
        {title}
        {haveCloseButton && <ModalCloseButton position="unset" size="sm" />}
      </ModalHeader>
      {!!body && <ModalBody>{body}</ModalBody>}
    </ModalContent>
  </Modal>
);

const CustomModal = memo(ModalComponent, isEqual);
export default CustomModal;
