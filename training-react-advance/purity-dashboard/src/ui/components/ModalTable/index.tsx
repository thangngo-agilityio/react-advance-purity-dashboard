import { Heading, VStack } from "@chakra-ui/react"
import Table from "../Table"
import { TDataSource, THeaderTable } from "@/lib/types/table";

type TModalTableProps = {
  title?: string
  columns?: THeaderTable[];
  dataSource?: TDataSource[];
  onClickTableRow?: (id: string) => void;
}

const ModalTable = ({ title, columns, dataSource, onClickTableRow }: TModalTableProps) => (
  <VStack w='100%' borderRadius='lg' bgColor='background.100' px='22px' py='24px' alignItems='flex-start'>
    <Heading mt='4px' mb='24px'>
      {title}
    </Heading>
    <Table columns={columns} dataSource={dataSource} onClickTableRow={onClickTableRow} />
  </VStack>
)

export default ModalTable
