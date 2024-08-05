import { Box, Button, Flex, Heading, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { ChangeEvent, memo, useCallback } from "react";
import { Control, Controller, FieldValues, useForm } from "react-hook-form";
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';

// Component
import { InputField, Switch } from "../common";
import { AppleIcon, FacebookIcon, GoogleIcon } from "@/ui/icons";

// Constants
import { ROUTES } from "@/lib/constants";
import { useNavigate } from "react-router-dom";

// Types
import { AuthFormData } from "@/lib/types";


type TAuthFormProps = {
  control: Control<AuthFormData>
  isRegister?: boolean;
  isDisabled?: boolean
  onChange?: (value: string) => void;
  handleClearRootError?: () => void;
  handleSubmit?: () => void
}

const AuthForm = ({ control, isRegister = false, isDisabled= false, onChange, handleClearRootError, handleSubmit }: TAuthFormProps) => {
  const navigate = useNavigate()


  const { isOpen: isShowPassword, onToggle: onShowPassword } = useDisclosure();
  const { isOpen: isShowConfirmPassword, onToggle: onShowConfirmPassword } =
    useDisclosure();

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

  const handleNavigate = () => {
    navigate(isRegister ? ROUTES.SIGN_IN : ROUTES.SIGN_UP)
  }

  return (
    <Box
      w={isRegister ? '452px' : '353px'}
      px={isRegister ? '51px' : '0px'}
      py={isRegister ? '46px' : '0px'}
      borderRadius={isRegister ? 'lg' : 'transparent'}
      boxShadow={isRegister ? '0 7px 23px rgba(0, 0 , 0, .05)' : 'transparent'}
      bg={isRegister ? 'background.100' : 'transparent'}
    >
      {!isRegister ?
        <Box mb='36px'>
          <Heading as='h1' mb='8px' variant='tertiary' size='xl'>Welcome Back</Heading>
          <Text fontWeight='700'>Enter your email and password to sign in</Text>
        </Box>
        :
        <Box>
          <Box textAlign='center' mb='22px'>
            <Heading>Register with</Heading>
          </Box>
          <HStack gap='15px' justifyContent='center' mb='22px'>
            <Button size='icon' variant='iconSecondary' isDisabled={true}>
              <FacebookIcon />
            </Button>
            <Button size='icon' variant='iconSecondary' isDisabled={true}>
              <AppleIcon />
            </Button>
            <Button size='icon' variant='iconSecondary' isDisabled={true}>
              <GoogleIcon />
            </Button>
          </HStack>
          <Text size='textLg' fontWeight='700' textAlign='center' mb='16px'>Or</Text>
        </Box>
      }

      <VStack gap={6} alignItems='flex-start' mb='24px' as='form' onSubmit={handleSubmit}>
        {isRegister && (
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState: { error } }) => (
              <InputField
                variant="authentication"
                placeholder="name"
                isError={!!error}
                errorMessages={error?.message}
                isDisabled={isDisabled}
                onChange={onChange}
                aria-label="name"
              />
            )}
          />
        )}
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const handleChange = (valueInput: string) => {
              const sanitizedValue = valueInput.trim();

              onChange(sanitizedValue);
            };

            return (
              <InputField
                variant="authentication"
                placeholder="Email"
                isError={!!error?.message}
                errorMessages={error?.message}
                isDisabled={isDisabled}
                value={value}
                onChange={handleChange}
                onBlur={handleClearRootError}
              />
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error } }) => (
            <InputField
              type={isShowPassword ? 'text' : 'password'}
              variant="authentication"
              placeholder="Password"
              rightIcon={renderPasswordIcon(isShowPassword, onShowPassword)}
              isError={!!error?.message}
              errorMessages={error?.message}
              isDisabled={isDisabled}
              {...field}
              onBlur={handleClearRootError}
            />
          )}
        />

        {/* Helpers */}
        {!isRegister && (
          <Controller
            control={control}
            name="isRemember"
            render={({ field: { value, onChange } }) => (
              <Switch
                aria-label="remember"
                isChecked={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChange(e.target.checked)
                }
                isDisabled={isDisabled}
                position="relative"
                title="Remember me"
              />
            )}
          />
        )}

        {isRegister && (
          <>
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  variant="authentication"
                  placeholder="Confirm password"
                  rightIcon={renderPasswordIcon(
                    isShowConfirmPassword,
                    onShowConfirmPassword,
                  )}
                  isError={!!error}
                  errorMessages={error?.message}
                  isDisabled={isDisabled}
                  onChange={onChange}
                />
              )}
            />
          </>
        )}
      </VStack>

      <Box mb={7}>
        <Button
          width='100%'
          type="submit"
          role="button"
          aria-label={!isRegister ? 'Sign In' : 'Sign Up'}
          size='xl'
          fontSize='10px'
          colorScheme="primary"
          bg="primary.300"
          textTransform="capitalize"
          form={!isRegister ? 'login-form' : 'register-form'}
          isDisabled={isDisabled}
          onClick={handleSubmit}
        >
          {!isRegister ? 'SIGN IN' : 'SIGN UP'}
        </Button>
      </Box>

      <Flex justifyContent="center">
        <Text
          fontWeight="medium"
          textAlign="center"
          dangerouslySetInnerHTML={{
            __html: !isRegister
              ? 'Don&apos;t have an account?'
              : 'Already have an account?',
          }}
        />
        <Button
          aria-label={!isRegister ? 'sign up' : 'sign in'}
          w="fit-content"
          p={0}
          _hover={{
            bg: 'transparent',
          }}
          color="text.300"
          fontSize='md'
          bg="transparent"
          fontWeight="semibold"
          ml={1}
          onClick={handleNavigate}
        >
          {!isRegister ? 'Sign up' : 'Sign in'}
        </Button>
      </Flex>
    </Box>
  )
};

export default memo(AuthForm);
