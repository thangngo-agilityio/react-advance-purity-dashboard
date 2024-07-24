import { Box, Image } from "@chakra-ui/react";

type TAvatarProps = {
  src?: string;
  alt?: string;
}

const Avatar = ({ src, alt }: TAvatarProps) => (
  <Box w='40px' h='40px' borderRadius='lg'>
    <Image w='100%' h='100%' borderRadius='lg' src={src} alt={alt} />
  </Box>
);

export default Avatar;
