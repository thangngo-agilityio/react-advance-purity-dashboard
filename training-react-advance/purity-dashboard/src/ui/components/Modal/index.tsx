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
  title?: string;
  body?: JSX.Element;
  isProjectDetail?: boolean;
  haveCloseButton?: boolean;
  onClose: () => void;
};

const ModalComponent = ({
  isOpen,
  body,
  title = '',
  isProjectDetail,
  haveCloseButton = false,
  onClose,
}: TModalProps) => (
  <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent minW={isProjectDetail ? '0' : '320px'} maxW={isProjectDetail ? '30%' :"fit-content"}>
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
