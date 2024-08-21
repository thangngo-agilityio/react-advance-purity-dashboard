import { Box, Image } from '@chakra-ui/react';

type TAvatarProps = {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
};

const Avatar = ({
  src = '/imgs/avatar-default.svg',
  alt,
  width = '40px',
  height = '40px',
  ...props
}: TAvatarProps) => (
  <Box w={width} h={height} borderRadius="lg" {...props}>
    <Image
      w="100%"
      h="100%"
      borderRadius="lg"
      objectFit="cover"
      src={src}
      alt={alt}
    />
  </Box>
);

export default Avatar;
