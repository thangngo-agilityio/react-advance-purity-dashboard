'use client';

import { memo, useCallback, useMemo } from 'react';
import { Control, Controller, useForm, UseFormClearErrors } from 'react-hook-form';
import isEqual from 'react-fast-compare';

// Components
import {
  Button,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';

// Types
import { AuthorFormData, TAuthor, TFiledAuthor } from '@/lib/types';

// constants
import { STATUS_SUBMIT } from '@/lib/constants';
import InputField from '../common/InputFiled';

interface AuthorFormProps {
  control: Control<AuthorFormData>
  data?: TFiledAuthor;
  isDirty?: boolean;
  onCloseModal?: () => void;
  handleSubmit?: () => void
  clearErrors: UseFormClearErrors<AuthorFormData>
}

const AuthorForm = ({
  control,
  isDirty,
  onCloseModal,
  handleSubmit,
  clearErrors
}: AuthorFormProps) => {

  const disabled = useMemo(
    () => !(isDirty) || status === STATUS_SUBMIT.PENDING,
    [isDirty],
  );

  const handleChangeValue = useCallback(
    <T,>(field: keyof AuthorFormData, changeHandler: (value: T) => void) =>
      (data: T) => {
        clearErrors(field);
        changeHandler(data);
      },
    [clearErrors],
  );

  return (
    <VStack
      as="form"
      id="update-product-form"
      onSubmit={handleSubmit}
    >
      <VStack w='100%' alignItems='flex-start'>
        <Heading fontSize='md' color='text.500'>
          Author
        </Heading>
        <Flex w='100%'>

          <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
            <Controller
              control={control}
              // rules={AUTH_SCHEMA.NAME}
              name="name"
              render={({ field, field: { onChange }, fieldState: { error } }) => (
                <InputField
                  bg="background.100"
                  placeholder="Name"
                  mr={{ md: 2 }}
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('name', onChange)}
                  data-testid="edit-field-name"
                />
              )}
            />
          </Flex>
          <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
            <Controller
              control={control}
              // rules={AUTH_SCHEMA.NAME}
              name="email"
              render={({ field, field: { onChange }, fieldState: { error } }) => (
                <InputField
                  bg="background.100"
                  placeholder='Email'
                  mr={{ md: 2 }}
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('name', onChange)}
                  data-testid="edit-field-name"
                />
              )}
            />
          </Flex>
        </Flex>
      </VStack>
      <VStack w='100%' alignItems='flex-start'>
        <Heading fontSize='md' color='text.500'>
          Function
        </Heading>
        <Flex>
          <Flex w="100%" mb={{ base: '5px', sm: '5px' }}>
            <Controller
              control={control}
              // rules={AUTH_SCHEMA.NAME}
              name="role"
              render={({ field, field: { onChange }, fieldState: { error } }) => (
                <InputField
                  bg="background.100"
                  placeholder='Role'
                  mr={{ md: 2 }}
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('role', onChange)}
                  data-testid="edit-field-role"
                />
              )}
            />
          </Flex>
          <Flex w="100%" mb={{ sm: '5px' }}>
            <Controller
              control={control}
              name="job"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  bg="background.100"
                  placeholder="Job"
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('job', field.onChange)}
                />
              )}
            />
          </Flex>
        </Flex>
      </VStack>
      <VStack w='100%' alignItems='flex-start'>
        <Heading fontSize='md' color='text.500'>
          Employed
        </Heading>
        <Flex w="100%" mb={{ sm: '5px' }}>
          <Controller
            control={control}
            name="employed"
            render={({ field, fieldState: { error } }) => (
              <InputField
                bg="background.100"
                placeholder="Employed"
                type='datetime-local'
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('employed', field.onChange)}
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
          h='full'
          bg="green.600"
          mr={3}
          isDisabled={disabled}
        >
          Save
        </Button>
        <Button
          w={44}
          h='full'
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

const ProductFormMemorized = memo(AuthorForm, isEqual);
export default ProductFormMemorized;
