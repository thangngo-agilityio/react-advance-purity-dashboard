import { useCallback, useMemo } from 'react';
import { Th, VStack } from '@chakra-ui/react';

// Components
import Header from '@/ui/components/Header';
import ModalTable from '@/ui/components/ModalTable';
import HeadCell from '@/ui/components/Table/HeadCell';
import AuthorCell from '@/ui/components/Table/Body/AuthorCell';

// Constants
import { COLUMNS_AUTHOR, COLUMNS_PROJECT, ROUTES } from '@/lib/constants';
import { TDataSource } from '@/lib/types';
import { TAuthor } from '../../../lib/types/author';
import FunctionCell from '@/ui/components/Table/Body/FunctionCell';
import StatusCell from '@/ui/components/Table/Body/StatusCell';
import { STATUS_LABEL } from '@/lib/constants/status';

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

  const renderAuthor = useCallback(({ id, name, avatar, email }: TDataSource): JSX.Element => (
    <AuthorCell id={id} key={id} name={name} image={avatar} email={email} />
  ), [])

  const renderFunction = useCallback(({ role, job }: TDataSource): JSX.Element =>
    (<FunctionCell role={role} job={job} />), [])

  type TStatus = keyof typeof STATUS_LABEL;

  const renderStatus = useCallback(({ status }: TDataSource) => (
    <StatusCell variant={STATUS_LABEL[`${status}` as TStatus]}
      text={status as string} />
  ), [])

  const columns = useMemo(() => {
    isAuth
      ? COLUMNS_AUTHOR
        (
          renderHead,
          renderAuthor,
          renderFunction,
          renderStatus,
        )
      :
      COLUMNS_PROJECT(renderHead, renderStatus)
  }, [isAuth])

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
