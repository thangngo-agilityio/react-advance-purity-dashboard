import { Badge, BadgeProps, Box, Td, Tooltip } from '@chakra-ui/react';
import { memo } from 'react';

type TStatusProps = BadgeProps & {
  text?: string | number | boolean;
  isAuthor?: boolean;
};

const StatusComponent = ({
  text = '',
  isAuthor,
  ...props
}: TStatusProps): JSX.Element => {
  return (
    <Td py="5px" px={0} fontSize="md" w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}>
      <Box w={{ base: '200px', xl: '220px', '3xl': '250px', '6xl': '350px' }}>
        <Tooltip minW="max-content" placement="bottom" label={text}>
          <Badge
            {...props}
            maxW={isAuthor ? '65px' : '100px'}
            whiteSpace="break-spaces"
            noOfLines={1}
            textAlign={isAuthor ? 'center' : 'left'}
            fontSize="md"
            fontWeight="bold"
            textTransform="unset"
          >
            {text}
          </Badge>
        </Tooltip>
      </Box>
    </Td>
  );
};

const StatusCell = StatusComponent;

export default StatusCell;
