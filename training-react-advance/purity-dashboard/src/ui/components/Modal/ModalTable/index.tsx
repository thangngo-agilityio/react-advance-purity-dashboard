import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

// Components
import Fetching from '../../Skeleton/TableList';
import Table from '../../Table';
import Pagination from '../../Pagination';

// Hooks
import { usePagination } from '@/lib/hooks';

// types
import { TDataSource, THeaderTable } from '@/lib/types/table';

type TModalTableProps = {
  title?: string;
  columns?: THeaderTable[];
  dataSource: TDataSource[];
  isAuthor?: boolean;
  isFetching?: boolean;
  onClickTableRow?: (id: string) => void;
  onClickAdd?: () => void;
};

const ModalTable = ({
  title,
  columns,
  dataSource,
  isAuthor = false,
  isFetching,
  onClickTableRow,
  onClickAdd,
}: TModalTableProps) => {

  const {
    data,
    filterData,
    arrOfCurrButtons,
    isDisabledPrev,
    isDisableNext,
    handlePageChange,
    handlePageClick,
  } = usePagination(dataSource);

  return (
    <VStack
      w="100%"
      borderRadius="lg"
      bgColor="background.100"
      px="22px"
      py="24px"
      alignItems="flex-start"
      boxShadow="0 5.5px 3.5px rgba(0, 0 , 0, .02)"
    >
      <Flex w="100%" justifyContent="space-between">
        <Heading mt="4px">{title}</Heading>
        {isAuthor && (
          <Button gap="4px" onClick={onClickAdd}>
            Add new <AddIcon />
          </Button>
        )}
      </Flex>
      <Fetching quality={15} isLoading={isFetching}>
        <Table
          columns={columns}
          dataSource={filterData}
          onClickTableRow={onClickTableRow}
        />
      </Fetching>
      <Flex w='100%' justifyContent='flex-end'>
        <Pagination
          currentPage={data.currentPage}
          isDisableNext={isDisableNext}
          isDisabledPrev={isDisabledPrev}
          arrOfCurrButtons={arrOfCurrButtons}
          onPageChange={handlePageChange}
          onClickPage={handlePageClick}
        />
      </Flex>
    </VStack>
  );
};

export default memo(ModalTable, isEqual);
