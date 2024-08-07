import { Badge, BadgeProps, Td, Tooltip } from '@chakra-ui/react';
import { memo } from 'react';

type TStatusProps = BadgeProps & {
  text?: string | number | boolean;
};

const StatusComponent = ({
  text = '',
  ...props
}: TStatusProps): JSX.Element => (
  <Td
    py='5px'
    px={0}
    fontSize="md"
    textAlign="left"
    minW="120px"
  >
    <Tooltip minW="max-content" placement="bottom" label={text}>
      <Badge
        {...props}
        maxW="100px"
        whiteSpace="break-spaces"
        noOfLines={1}
        textAlign="center"
      >
        {text}
      </Badge>
    </Tooltip>
  </Td>
);

const StatusCell = memo(StatusComponent);

export default StatusCell;
