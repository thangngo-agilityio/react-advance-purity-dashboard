import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

// Components
import ButtonIcon from "../common/ButtonIcon";
import { HelpIcon } from "@/ui/icons";

// Constant

const CardHelp = () => (
  <VStack alignItems='flex-start' w='218px' p='15px' borderRadius='lg' backgroundImage='/imgs/Background.svg' gap='0'>
    <Box mb='20px'>
      <ButtonIcon icon={<HelpIcon />} />
    </Box>
    <VStack mb='8px' alignItems='flex-start'>
      <Heading variant='secondary' size='md'>Need help?</Heading>
      <Text size='testSm' variant='secondary'>Please check our docs</Text>
    </VStack>
    <Button variant='secondary' size='sm' w='100%' fontWeight='700' borderRadius='md'>DOCUMENTATION</Button>
  </VStack>
)

export default CardHelp
