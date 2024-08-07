import { useCallback, useMemo } from 'react';
import { Th, VStack } from '@chakra-ui/react';

// Components
import Header from '@/ui/components/Header';
import ModalTable from '@/ui/components/ModalTable';
import HeadCell from '@/ui/components/Table/HeadCell';

// Constants
import { COLUMNS_AUTHOR, COLUMNS_PROJECT, ROUTES } from '@/lib/constants';

const TablePage = () => {
  const isAuth: boolean = true

  const renderHead = useCallback(
    (title: string, key: string): JSX.Element => {

      return title ? (
        <HeadCell key={key} title={title} />
      ) : (
        <Th w={50} maxW={50} />
      );
    }, [],
  );

  const columns = useMemo(() => {
    isAuth ? COLUMNS_AUTHOR(renderHead) : COLUMNS_PROJECT(renderHead)
  }, [])

  return (
    <VStack alignItems='flex-start'>
      <Header name="Tables" path={ROUTES.TABLES} />

      <VStack gap='24px' w='100%'>
        <ModalTable title='Authors Table' columns={columns} />
        <ModalTable title='Projects' />
      </VStack>
    </VStack>
  );
};

export default TablePage;
