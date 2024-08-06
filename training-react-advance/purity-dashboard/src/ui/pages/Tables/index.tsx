import { ROUTES } from '@/lib/constants';
import Header from '@/ui/components/Header';
import { Heading, VStack } from '@chakra-ui/react';

const TablePage = () => {
  return (
    <VStack>
      <Header name="Tables" path={ROUTES.TABLES} />

      <Heading>Tables page</Heading>
    </VStack>
  );
};

export default TablePage;
