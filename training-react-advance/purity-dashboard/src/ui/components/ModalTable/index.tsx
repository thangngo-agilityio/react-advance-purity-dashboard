import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import Table from '../Table';
import { TDataSource, THeaderTable } from '@/lib/types/table';
import { AddIcon } from '@chakra-ui/icons';
import { memo } from 'react';

type TModalTableProps = {
  title?: string;
  columns?: THeaderTable[];
  dataSource?: TDataSource[];
  onClickTableRow?: (id: string) => void;
  onClickAdd?: () => void;
};

const ModalTable = ({
  title,
  columns,
  dataSource,
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
        <Button gap="4px" onClick={onClickAdd}>
          Add new <AddIcon />
        </Button>
      </Flex>
      <Table
        columns={columns}
        dataSource={dataSource}
        onClickTableRow={onClickTableRow}
      />
    </VStack>
  );
};

export default memo(ModalTable);
