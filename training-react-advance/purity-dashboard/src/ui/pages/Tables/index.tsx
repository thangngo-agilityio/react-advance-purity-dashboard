import { useCallback, useMemo } from 'react';
import { Td, Text, Th, VStack } from '@chakra-ui/react';

// Components
import Header from '@/ui/components/Header';
import ModalTable from '@/ui/components/ModalTable';
import HeadCell from '@/ui/components/Table/HeadCell';
import AuthorCell from '@/ui/components/Table/Body/AuthorCell';
import CompletionCell from '@/ui/components/Table/Body/CompletionCell';
import ActionCell from '@/ui/components/Table/Body/ActionCell';
import StatusCell from '@/ui/components/Table/Body/StatusCell';
import FunctionCell from '@/ui/components/Table/Body/FunctionCell';

// Hooks
import { useAuthor } from '@/lib/hooks';

// Constants
import { COLUMNS_AUTHOR, COLUMNS_PROJECT, ROUTES, STATUS_LABEL } from '@/lib/constants';

// Types
import { TDataSource, THeaderTable } from '@/lib/types';
import { TAuthor } from '../../../lib/types/author';
import { TProject } from '../../../lib/types/project';
import { formatAuthorResponse } from '@/lib/utils';

const TablePage = () => {
  const { authorData } = useAuthor();

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

  const renderFunction = useCallback(({ role, job }: TAuthor): JSX.Element =>
    (<FunctionCell role={role} job={job} />), [])

  type TStatus = keyof typeof STATUS_LABEL;

  const renderAuthorStatus = useCallback(({ authorStatus }: TDataSource) => (
    <StatusCell variant={STATUS_LABEL[`${authorStatus}` as TStatus]}
      text={authorStatus as string} />
  ), [])

  const renderProjectStatus = useCallback(({ projectStatus }: TDataSource) => (
    <StatusCell variant={STATUS_LABEL[`${projectStatus}` as TStatus]}
      text={projectStatus as string} />
  ), [])

  const renderEmployed = useCallback(({ employed }: TAuthor): JSX.Element => (
    <Td
      py='5px'
      pr='5px'
      pl={0}
      fontSize="md"
      textAlign="left"
      w={{ base: '100px', md: '220px' }}
    >
      <Text
        fontSize="md"
        whiteSpace="break-spaces"
        noOfLines={1}
        w={{ base: '100px', '3xl': '150px', '5xl': '200px' }}
        flex={1}
        color='text.200'
        fontWeight='bold'
      >
        {employed}
      </Text>
    </Td>
  ), [])

  const renderAuthorAction = useCallback(
    (data: TAuthor) => (
      <ActionCell />
    ),
    [],
  );

  const renderProjectActionIcon = useCallback(
    (data: TProject) => (
      <ActionCell />
    ),
    [],
  );

  const renderCompanies = useCallback(({ id, avatar, projectName }: TDataSource): JSX.Element => (
    <AuthorCell id={id} key={id} name={projectName} image={avatar} />
  ), [])

  const renderBudget = useCallback(({ budget }: TProject): JSX.Element => (
    <Td
      py='5px'
      pr='5px'
      pl={0}
      fontSize="md"
      textAlign="left"
      w={{ base: '100px', md: '20px' }}
    >
      <Text
        fontSize="md"
        whiteSpace="break-spaces"
        noOfLines={1}
        w={{ base: '100px', '3xl': '150px', '5xl': '200px' }}
        flex={1}
      >
        {budget}
      </Text>
    </Td>
  ), [])

  const renderCompletion = useCallback(({ completion }: TProject): JSX.Element => (
    <CompletionCell completion={completion} />
  ), [])

  const columnAuthor = useMemo(
    () =>
      COLUMNS_AUTHOR
        (
          renderHead,
          renderAuthor,
          renderFunction,
          renderAuthorStatus,
          renderEmployed,
          renderAuthorAction
        )
    , [
      renderHead,
      renderAuthor,
      renderFunction,
      renderAuthorStatus,
      renderEmployed,
      renderAuthorAction,
    ])

  const columnProject = useMemo(() =>
    COLUMNS_PROJECT
      (
        renderHead,
        renderCompanies,
        renderBudget,
        renderProjectStatus,
        renderCompletion,
        renderProjectActionIcon,
      )
    , [
      renderHead,
      renderCompanies,
      renderBudget,
      renderProjectStatus,
      renderCompletion,
      renderProjectActionIcon
    ])

  return (
    <VStack alignItems='flex-start'>
      <Header name="Tables" path={ROUTES.TABLES} />

      <VStack gap='24px' w='100%'>
        <ModalTable title='Authors Table' columns={columnAuthor as unknown as THeaderTable[]} dataSource={formatAuthorResponse(authorData)} />
        <ModalTable title='Projects' columns={columnProject as unknown as THeaderTable[]} dataSource={[]} />
      </VStack>
    </VStack>
  );
};

export default TablePage;
