import { memo, useCallback } from 'react';
import { Flex } from '@chakra-ui/react';
import isEqual from 'react-fast-compare';

// Components
import { Button } from '@/ui/components';
import { ArrowIcon } from '@/ui/icons';

// Constants
import { DOTS, NEXT, PREV } from '@/lib/constants';

interface PaginationProps {
  currentPage?: number;
  isDisabledPrev?: boolean;
  isDisableNext?: boolean;
  arrOfCurrButtons?: string[];
  onPageChange?: (direction: string) => void;
  onClickPage?: (currentPage: number) => void;
}

const PaginationComponent = ({
  currentPage = 1,
  arrOfCurrButtons = [],
  isDisabledPrev = false,
  isDisableNext = false,
  onPageChange = () => { },
  onClickPage = () => { },
}: PaginationProps) => {

  const handleNextPage = useCallback(() => onPageChange(NEXT), [onPageChange]);

  const handlePrevPage = useCallback(() => onPageChange(PREV), [onPageChange]);

  return (
    <Flex
      data-testid="pagination"
      justifyContent="space-between"
      mt={1}
      flexDir="row"
      flexWrap="wrap"
      gap={{ base: 3, default: 0 }}
    >
      <Flex
        alignItems="center"
        w={{
          base: arrOfCurrButtons.length > 1 ? '100%' : 'auto',
          '0.8sm': arrOfCurrButtons.length > 2 ? '100%' : 'auto',
          default: 'auto',
        }}
        gap='4px'
      >
        <Button
          width={{ base: '6px', default: '30px' }}
          height={{ base: '6px', default: '30px' }}
          data-testid="prev-button"
          aria-label="btn-prev"
          variant="iconPrimary"
          cursor={isDisabledPrev ? 'not-allowed' : ''}
          isDisabled={isDisabledPrev}
          onClick={handlePrevPage}
        >
          <ArrowIcon width="10px" height="10px" isExpanded={false} rotate="90deg" />
        </Button>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w={{ base: '100%', default: 'auto' }}
        >
          {arrOfCurrButtons.map((item: string, index: number) => {
            const isDots = item === DOTS;
            const isDisable = currentPage === +item || isDots;
            const hoverStyle = isDots
              ? {}
              : {
                color: 'text.100',
                bg: 'background.800',
              };
            const disableStyle = isDots
              ? {}
              : {
                color: 'text.100',
                bg: 'background.800',
              };
            const handleClickPage = () => onClickPage(+item);

            return (
              <Button
                key={`${item}-${index}`}
                data-testid={`page-${item}-button`}
                aria-label="btn-pages"
                isDisabled={isDisable}
                mx={0.5}
                h={{ base: '7px', default: '30px', '3xl': '53px' }}
                fontSize={{ base: 'sm', lg: 'md' }}
                p={{ base: '3px', default: '4px', '3xl': '6px' }}
                bg={
                  currentPage === +item
                    ? 'background.800'
                    : 'transparent'
                }
                color={
                  currentPage === +item ? 'text.100' : 'text.200'
                }
                {...(isDots && { cursor: 'not-allowed' })}
                _hover={hoverStyle}
                _disabled={disableStyle}
                onClick={handleClickPage}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
        <Button
          data-testid="next-button"
          aria-label="btn-next"
          variant="iconPrimary"
          cursor={isDisableNext ? 'not-allowed' : ''}
          isDisabled={isDisableNext}
          onClick={handleNextPage}
          width={{ base: '6px', default: '30px' }}
          height={{ base: '6px', default: '30px' }}
        >
          <ArrowIcon
            width="10px"
            height="10px"
            isExpanded={false}
            rotate="-90deg"
          />
        </Button>
      </Flex>
    </Flex>
  );
};

const Pagination = memo(PaginationComponent, isEqual);
export default Pagination;
