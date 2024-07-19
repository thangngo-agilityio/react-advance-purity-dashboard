import { Button, ButtonProps } from '@chakra-ui/react';
import { ReactElement, ReactNode, memo } from 'react';

export type TButtonProps = ButtonProps & {
  leftIcon?: ReactElement;
  onClick?: () => void;
  children: ReactNode;
};

export const ButtonComponent = memo(({ children, ...rest }: TButtonProps) => (
  <Button {...rest}>{children}</Button>
));
