import { Flex, Text, Th } from '@chakra-ui/react';
import { memo } from 'react';


type THeadCellProps = {
  title?: string;
  onClick?: () => void;
};

const HeadCellComponent = ({ title }: THeadCellProps): JSX.Element => (
  <Th
    key={title}
    py={5}
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
        color="text.secondary"
        textTransform="none"
        fontSize="xs"
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

const HeadCell = memo(HeadCellComponent);

export default HeadCell;
