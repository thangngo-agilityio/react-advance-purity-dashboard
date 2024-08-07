import { useMemo } from 'react';
import { VStack } from '@chakra-ui/react';

// Components
import Header from '@/ui/components/Header';
import ModalTable from '@/ui/components/ModalTable';

// Constants
import { COLUMNS_AUTHOR, COLUMNS_PROJECT, ROUTES } from '@/lib/constants';

const TablePage = () => {


  return (
    <VStack alignItems='flex-start'>
      <Header name="Tables" path={ROUTES.TABLES} />

      <VStack gap='24px' w='100%'>
        <ModalTable title='Authors Table' />
        <ModalTable title='Projects' />
      </VStack>
    </VStack>
  );
};

export default TablePage;
