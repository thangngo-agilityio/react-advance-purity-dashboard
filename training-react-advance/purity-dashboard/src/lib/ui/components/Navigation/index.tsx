import { MouseEvent, ReactNode, memo, useState } from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';

export type TNavigationProps = {
  children: ReactNode;
  leftIcon: ReactNode;
  destination?: string;
  isActive: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const Navigation = ({
  children,
  leftIcon,
  destination = '/',
  onClick,
}: TNavigationProps) => {


  return (
    <Link
      display='flex'
      alignItems='center'
      gap='12px'
      href={destination}
      onClick={onClick}
      aria-label="navigate-item"
    >
      {leftIcon && (
        leftIcon
      )}
      {children}
    </Link>
  );
};

export default memo(Navigation);

