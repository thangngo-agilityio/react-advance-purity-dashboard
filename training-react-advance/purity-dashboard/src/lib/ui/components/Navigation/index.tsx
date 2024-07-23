import { MouseEvent, ReactElement, ReactNode, memo } from 'react';
import { Box, Link } from '@chakra-ui/react';
import ButtonIcon from '../common/ButtonIcon';

export type TNavigationProps = {
  children: ReactNode;
  leftIcon?: ReactElement;
  destination?: string;
  isActive?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

const Navigation = ({
  children,
  leftIcon,
  isActive,
  destination = '/',
  onClick,
}: TNavigationProps) => {


  return (
    <Box
      borderRadius='lg'
      color={isActive ? 'text.200' : 'text.400'}
      backgroundColor={isActive ? 'background.200' : 'transparent'}
      boxShadow={isActive ? '0 5.5px 3.5px rgba(0, 0 , 0, .02)' : 'transparent'}
      transition='.2s ease-in-out'
      _hover={{
        boxShadow: '0 5.5px 3.5px rgba(0, 0 , 0, .02)',
        backgroundColor: 'background.200'
      }}
    >
      <Link
        display='flex'
        alignItems='center'
        gap='12px'
        href={destination}
        onClick={onClick}
        aria-label="navigate-item"
        variant={isActive ? 'primary' : 'default'}
      >
        {leftIcon && (
          <ButtonIcon icon={leftIcon} isActive={isActive} />
        )}
        {children}
      </Link>
    </Box>
  );
};

export default memo(Navigation);

