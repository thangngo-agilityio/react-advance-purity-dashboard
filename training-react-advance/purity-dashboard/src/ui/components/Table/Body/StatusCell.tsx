import { formatUppercaseFirstLetter } from '@/lib/utils';
import { Badge, BadgeProps, Td, Tooltip } from '@chakra-ui/react';
import { memo } from 'react';

type TStatusProps = BadgeProps & {
  text?: string | number | boolean;
};

const StatusComponent = ({
  text = '',
  ...props
}: TStatusProps): JSX.Element => {
  return (
    <Td
      py='5px'
      px={0}
      fontSize="md"
      w="220px"
    >
      <Tooltip minW="max-content" placement="bottom" label={text}>
        <Badge
          {...props}
          maxW="65px"
          whiteSpace="break-spaces"
          noOfLines={1}
          textAlign="center"
          fontSize='md'
          textTransform='unset'
        >
          {text}
        </Badge>
      </Tooltip>
    </Td>
  );
}

const StatusCell = memo(StatusComponent);

export default StatusCell;
