import { Heading, Text, VStack } from "@chakra-ui/react";

type TPageDefaultProps = {
  page: string;
}

const PageDefault = ({ page }: TPageDefaultProps) => (
  <VStack w='100%' h='100%' alignItems='center' justifyContent='center'>
    <Heading>{page} Page</Heading>
    <Text>Coming soon...</Text>
  </VStack>
)

export default PageDefault;
