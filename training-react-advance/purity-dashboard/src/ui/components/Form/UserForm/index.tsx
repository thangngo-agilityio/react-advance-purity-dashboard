'use client';

import { memo, useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import isEqual from 'react-fast-compare';

// Components
import {
  Button,
  Flex,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

// Types
import { TRecordUser } from '@/lib/types';

// constants
import { AUTH_SCHEMA, STATUS_SUBMIT } from '@/lib/constants';
import InputField from '../../common/InputFiled';
import { authStore } from '@/lib/stores';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

interface AuthorFormProps {
  onCloseModal: () => void;
  onSubmit?: (data: TRecordUser) => void;
}

const UserForm = ({ onCloseModal, onSubmit }: AuthorFormProps) => {
  const user = authStore((state) => state.user);

  const { id, fields, createdTime } = user || {};
  const {
    email = '',
    password = '',
    name = '',
    location = '',
    phone = '',
    avatar = '',
  } = fields || {};
  const {
    control,
    formState: { isDirty },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<TRecordUser>({
    defaultValues: {
      id: id,
      fields: {
        name: name,
        avatar: avatar,
        email: email,
        password: password,
        location: location,
        phone: phone,
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
        | 'fields.name'
        | 'fields.avatar'
        | 'fields.email'
        | 'fields.password'
        | 'fields.location'
        | 'fields.phone',
      changeHandler: (value: T) => void,
    ) =>
      (data: T) => {
        clearErrors(field);
        changeHandler(data);
      },
    [clearErrors],
  );

  const handleSubmitForm = useCallback(
    (data: TRecordUser) => {
      onSubmit && onSubmit(data);
      onCloseModal();
      reset();
    },
    [onSubmit, onCloseModal, reset],
  );

  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();

  const renderPasswordIcon = useCallback(
    (isCorrect: boolean, callback: typeof onShowPassword): JSX.Element => {
      const Icon = isCorrect ? ViewIcon : ViewOffIcon;

      return (
        <Icon
          color="gray.400"
          w="25px"
          h="25px"
          cursor="pointer"
          onClick={callback}
        />
      );
    },
    [],
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
            rules={AUTH_SCHEMA.NAME}
            name="fields.name"
            render={({ field, field: { onChange }, fieldState: { error } }) => (
              <InputField
                label="Name"
                bg="background.100"
                placeholder="Project Name"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.name', onChange)}
                data-testid="edit-field-name"
              />
            )}
          />
        </Flex>
        <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
          <Controller
            control={control}
            rules={AUTH_SCHEMA.EMAIL}
            name="fields.email"
            render={({ field, field: { onChange }, fieldState: { error } }) => (
              <InputField
                label="Email"
                bg="background.100"
                placeholder="Email"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.email', onChange)}
                data-testid="edit-field-email"
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
          <Controller
            rules={AUTH_SCHEMA.PASSWORD}
            control={control}
            name="fields.password"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Password"
                type={isShowPassword ? 'text' : 'password'}
                variant="authentication"
                placeholder="Password"
                rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
                {...field}
                isError={!!error?.message}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.password', field.onChange)}
              />
            )}
          />
        </Flex>
        <Flex w="100%" mb={{ sm: '5px' }}>
          <Controller
            rules={AUTH_SCHEMA.LOCATION}
            control={control}
            name="fields.location"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Location"
                bg="background.100"
                placeholder="Location"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.location', field.onChange)}
              />
            )}
          />
        </Flex>
      </VStack>
      <VStack w="100%" alignItems="flex-start">
        <Flex w="100%" mb={{ sm: '5px' }}>
          <Controller
            rules={AUTH_SCHEMA.PHONE_NUMBER}
            control={control}
            name="fields.phone"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label="Phone"
                bg="background.100"
                placeholder="Phone"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.phone', field.onChange)}
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

const UserFormMemorized = UserForm;
export default UserFormMemorized;
