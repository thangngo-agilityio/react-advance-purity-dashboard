'use client';

import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';

// Components
import { Button, Flex, FormLabel, Select, VStack } from '@chakra-ui/react';

// Types
import { TRecordProject } from '@/lib/types';

// constants
import {
  AUTH_SCHEMA,
  PROJECT_STATUS,
  PROJECT_STATUS_LIST,
  STATUS_SUBMIT,
} from '@/lib/constants';
import InputField from '../../common/InputFiled';

interface AuthorFormProps {
  data?: TRecordProject;
  onCloseModal: () => void;
  onSubmit?: (data: TRecordProject) => void;
}

const ProjectForm = ({ data, onCloseModal, onSubmit }: AuthorFormProps) => {
  const { id, fields, createdTime } = data || {};
  const {
    projectName = '',
    avatar = '',
    budget = '',
    status = PROJECT_STATUS.TODO,
    completion = '',
    image = '',
    description = '',
  } = fields || {};
  const {
    control,
    formState: { isDirty },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<TRecordProject>({
    defaultValues: {
      id: id,
      fields: {
        projectName: projectName,
        avatar: avatar,
        budget: Number(budget),
        status: status,
        completion: Number(completion),
        image: image,
        description: description,
      },
      createdTime: createdTime,
    },
  });

  const disabled = useMemo(
    () => !isDirty || status === STATUS_SUBMIT.PENDING,
    [isDirty],
  );

  const handleChangeValue = useCallback(
    <T,>(
      field:
        | 'id'
        | 'fields'
        | 'createdTime'
        | 'fields.projectName'
        | 'fields.avatar'
        | 'fields.budget'
        | 'fields.status'
        | 'fields.completion'
        | 'fields.image'
        | 'fields.description'
        | 'fields._id',
      changeHandler: (value: T) => void,
    ) =>
      (data: T) => {
        clearErrors(field);
        changeHandler(data);
      },
    [clearErrors],
  );

  const handleSubmitForm = useCallback(
    (data: TRecordProject) => {
      onSubmit && onSubmit(data);
      onCloseModal();
      reset();
    },
    [onSubmit, onCloseModal, reset],
  );

  return (
    <VStack
      as="form"
      id="update-product-form"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <VStack w="100%" alignItems="flex-start">
        <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
          <Controller
            control={control}
            rules={AUTH_SCHEMA.PROJECT_NAME}
            name="fields.projectName"
            render={({ field, field: { onChange }, fieldState: { error } }) => (
              <InputField
                label="Project Name"
                bg="background.100"
                placeholder="Project Name"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.projectName', onChange)}
                data-testid="edit-field-projectName"
              />
            )}
          />
        </Flex>
        <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
          <Controller
            control={control}
            rules={AUTH_SCHEMA.BUDGET}
            name="fields.budget"
            render={({ field, field: { onChange }, fieldState: { error } }) => (
              <InputField
                label="Budget"
                bg="background.100"
                placeholder="Budget"
                type="number"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.budget', onChange)}
                data-testid="edit-field-budget"
              />
            )}
          />
        </Flex>
        <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
          <Controller
            control={control}
            rules={AUTH_SCHEMA.IMAGE}
            name="fields.avatar"
            render={({ field, field: { onChange }, fieldState: { error } }) => (
              <InputField
                label="Avatar"
                bg="background.100"
                placeholder="Avatar"
                accept="image/*"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.avatar', onChange)}
                data-testid="edit-field-avatar"
              />
            )}
          />
        </Flex>
      </VStack>
      <VStack w="100%" alignItems="flex-start">
        <Flex
          flexDirection="column"
          w="100%"
          h="100%"
          mb={{ base: '5px', sm: '5px' }}
        >
          <FormLabel>Status</FormLabel>
          <Controller
            control={control}
            // rules={AUTH_SCHEMA.NAME}
            name="fields.status"
            render={({ field, field: { onChange } }) => (
              <Select
                w="100%"
                bg="background.100"
                {...field}
                onChange={handleChangeValue('fields.status', onChange)}
              >
                {PROJECT_STATUS_LIST.map((list, index) => (
                  <option key={index} value={list.value}>
                    {list.name}
                  </option>
                ))}
              </Select>
            )}
          />
        </Flex>
        <Flex w="100%" mb={{ sm: '5px' }}>
          <Controller
            rules={AUTH_SCHEMA.COMPLETION}
            control={control}
            name="fields.completion"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Completion"
                type="number"
                bg="background.100"
                placeholder="Completion"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue(
                  'fields.completion',
                  field.onChange,
                )}
              />
            )}
          />
        </Flex>
      </VStack>
      <VStack w="100%" alignItems="flex-start">
        <Flex w="100%" mb={{ sm: '5px' }}>
          <Controller
            rules={AUTH_SCHEMA.IMAGE}
            control={control}
            name="fields.image"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Image"
                bg="background.100"
                placeholder="Image"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.image', field.onChange)}
              />
            )}
          />
        </Flex>
        <Flex w="100%" mb={{ sm: '5px' }}>
          <Controller
            control={control}
            name="fields.description"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Description"
                bg="background.100"
                placeholder="Description"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue(
                  'fields.description',
                  field.onChange,
                )}
              />
            )}
          />
        </Flex>
      </VStack>

      <Flex my={4}>
        <Button
          type="submit"
          form="update-product-form"
          data-testid="submit-product-form"
          w={44}
          h="full"
          bg="green.600"
          mr={3}
          isDisabled={disabled}
        >
          Save
        </Button>
        <Button
          w={44}
          h="full"
          bg="orange.300"
          _hover={{ bg: 'orange.400' }}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
      </Flex>
    </VStack>
  );
};

const ProjectFormMemorized = ProjectForm;
export default ProjectFormMemorized;
