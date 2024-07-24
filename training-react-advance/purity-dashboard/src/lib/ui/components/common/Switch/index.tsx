import { FormControl, FormLabel, Switch } from "@chakra-ui/react"

type TSwitchComponent = {
  title: string;
}

const SwitchComponent = ({ title }: TSwitchComponent) => (
  <FormControl display='flex' alignItems='center'>
    <Switch colorScheme="teal" mr='10px' />
    <FormLabel htmlFor='email-alerts' mb='0'>
      {title}
    </FormLabel>
  </FormControl>
);

export default SwitchComponent;
