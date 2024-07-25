import { FormControl, FormLabel, Switch, SwitchProps } from "@chakra-ui/react"

type TSwitchComponent = SwitchProps & {
  title: string;
}

const SwitchComponent = ({ title, ...rest }: TSwitchComponent) => (
  <FormControl display='flex' alignItems='center' >
    <Switch colorScheme="teal" mr='10px' {...rest} />
    <FormLabel htmlFor='email-alerts' mb='0'>
      {title}
    </FormLabel>
  </FormControl>
);

export default SwitchComponent;
