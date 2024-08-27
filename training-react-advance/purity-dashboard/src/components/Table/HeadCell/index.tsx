import { Flex, Text, Th } from '@chakra-ui/react';


type THeadCellProps = {
  title?: string;
  onClick?: () => void;
};

const HeadCellComponent = ({ title }: THeadCellProps): JSX.Element => (
  <Th
    key={title}
    py='12px'
    px={0}
    sx={{
      minW: {
        base: 170,
        md: 'unset',
      },
    }}
  >
    <Flex alignItems="center" gap={2}>
      <Text
        textTransform="none"
        fontSize="xs"
        fontWeight='bold'
        whiteSpace="break-spaces"
        maxW="200px"
        noOfLines={1}
        title={title}
      >
        {title}
      </Text>

    </Flex>
  </Th>
);

const HeadCell = HeadCellComponent;

export default HeadCell;
