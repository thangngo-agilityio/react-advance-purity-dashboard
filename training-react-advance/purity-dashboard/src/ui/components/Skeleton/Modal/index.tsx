import { Flex, Heading, Skeleton } from '@chakra-ui/react';
import { memo, ReactNode } from 'react';
import isEqual from 'react-fast-compare';

// Constants
import { ERROR_MESSAGES } from '@/lib/constants/message';

type TVariant = 'primary' | 'secondary';
type TFetchingProps = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  quality?: number;
  variant?: TVariant;
  children?: ReactNode;
};

const FetchingModal = ({
  isLoading = false,
  isError = false,
  errorMessage = ERROR_MESSAGES.SOMETHING_ERROR,
  children,
}: TFetchingProps): JSX.Element => {
  return isError ? (
    <Heading
      as="h3"
      color="text.100"
      bgColor="background.700"
      rounded="lg"
      p="4px"
    >
      {errorMessage}
    </Heading>
  ) : isLoading ? (
    <Flex gap="20px" w="100%" flexDirection="column">
      <Skeleton w="100%" h="300px" borderRadius="lg" />
    </Flex>
  ) : (
    <>{children}</>
  );
};

export default memo(FetchingModal, isEqual);
