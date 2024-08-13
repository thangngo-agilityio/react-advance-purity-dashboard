import { memo } from 'react';
import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

// Components

// types
import { TDataSource, THeaderTable } from '@/lib/types/table';
import Table from '../../Table';
import Fetching from '../../Skeleton/TableList';

type TModalTableProps = {
  title?: string;
  columns?: THeaderTable[];
  dataSource?: TDataSource[];
  isAuthor?: boolean;
  isFetching?: boolean;
  onClickTableRow?: (id: string) => void;
  onClickAdd?: () => void;
};

const ModalTable = ({
  title,
  columns,
  dataSource,
  isAuthor,
  isFetching,
  onClickTableRow,
  onClickAdd,
}: TModalTableProps) => {
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
          dataSource={dataSource}
          onClickTableRow={onClickTableRow}
        />
      </Fetching>
    </VStack>
  );
};

export default memo(ModalTable);
