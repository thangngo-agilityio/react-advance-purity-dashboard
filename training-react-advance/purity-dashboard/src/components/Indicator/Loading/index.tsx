// Libs
import { Spinner as SpinnerChakra, Center } from '@chakra-ui/react';

const LoadingIndicator = (): JSX.Element => {
  return (
    <Center minHeight="100vh">
      <SpinnerChakra />
    </Center>
  );
};

export default LoadingIndicator;
