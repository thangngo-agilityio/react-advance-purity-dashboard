import { useCallback, useMemo, useState } from 'react';
import { Button, Td, Text, Th, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

// Components
import {
  Modal,
  Header,
  ModalTable,
  HeadCell,
  AuthorCell,
  CompletionCell,
  ActionCell,
  StatusCell,
  FunctionCell,
  AuthorForm
} from '@/ui/components';

// Hooks
import { useAuthor, useProject } from '@/lib/hooks';

// Constants
import { COLUMNS_AUTHOR, COLUMNS_PROJECT, ROUTES, STATUS_LABEL, TIME_FORMAT } from '@/lib/constants';

// Types
import { TDataSource, THeaderTable, TAuthor, TProject, AuthorFormData, TFiledAuthor } from '@/lib/types';

// utils
import { formatAuthorResponse, formatProjectResponse } from '@/lib/utils';
import dayjs from 'dayjs';

const TablePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false)
  const [isAddProject, setIsAddProject] = useState(false)

  const { authorData, createAuthor } = useAuthor();
  const { projectData } = useProject();

  const {
    control,
    formState: { isDirty },
    handleSubmit,
    clearErrors,
    reset
  } = useForm<AuthorFormData>({
    defaultValues: {

    },
  });


  const handleToggleAddModal = () => {
    setIsOpenModal((prev) => !prev);
  }

  const handleToggleEditModal = () => {
    setIsOpenModal((prev) => !prev);
    setIsEdit((prev) => !prev)
  }

  const handleToggleAddProject = () => {
    setIsOpenModal((prev) => !prev);
    setIsAddProject((prev) => !prev)
  }

  const handleCreateAuthor = useCallback(async (data: AuthorFormData) => {
    try {
      const payload: TFiledAuthor[] = [
        {
          fields: {
            ...data,
            employed: dayjs(data.employed).format(TIME_FORMAT)
          }
        }
      ]

      await createAuthor({ records: payload })
    } catch (error) {
      throw error
    }
  }, [createAuthor, reset, setIsOpenModal])

  const onSubmit = useCallback((data: AuthorFormData) => {
    handleCreateAuthor(data)
    reset()
    setIsOpenModal(false)

  }, [handleCreateAuthor])


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
    <StatusCell isAuthor variant={STATUS_LABEL[`${authorStatus}` as TStatus]}
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
        {dayjs(employed).format(TIME_FORMAT)}
      </Text>
    </Td>
  ), [])

  const renderAuthorAction = useCallback(
    (data: TAuthor): JSX.Element => (
      <Td>
        <Button
          p={0}
          bg="none"
          _hover={{
            bg: 'none',
          }}
          _active={{
            bg: 'none',
          }}
          fontSize='sm'
          fontWeight='bold'
          color='text.500'
          onClick={handleToggleEditModal}
        >
          Edit
        </Button>
      </Td>
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
      w={{ base: '100px', md: '220px' }}
    >
      <Text
        flex={1}
        w={{ base: '100px', '3xl': '150px', '5xl': '200px' }}
        noOfLines={1}
        color='text.primary'
        fontWeight='bold'
        fontSize="md"
        whiteSpace="break-spaces"
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
        <ModalTable title='Authors Table' columns={columnAuthor as unknown as THeaderTable[]} dataSource={formatAuthorResponse(authorData)} onClickAdd={handleToggleAddModal} />
        <ModalTable title='Projects' columns={columnProject as unknown as THeaderTable[]} dataSource={formatProjectResponse(projectData)} onClickAdd={handleToggleAddProject} />
      </VStack>
      {
        isOpenModal && (
          <Modal isOpen={isOpenModal} onClose={handleToggleAddModal} title='Add Author' haveCloseButton body={
            <AuthorForm control={control} handleSubmit={handleSubmit(onSubmit)} clearErrors={clearErrors} isDirty={isDirty} onCloseModal={handleToggleAddModal} />
          } />
        )
      }
      {
        isOpenModal && isEdit && (
          <Modal isOpen={isOpenModal} onClose={handleToggleEditModal} title='Edit Author' haveCloseButton body={
            <AuthorForm control={control} handleSubmit={handleSubmit(onSubmit)} clearErrors={clearErrors} onCloseModal={handleToggleEditModal} />
          } />
        )
      }
      {
        isOpenModal && isAddProject && (
          <Modal isOpen={isOpenModal} onClose={handleToggleAddProject} title='Add Project' haveCloseButton />
        )
      }
    </VStack>
  );
};

export default TablePage;
