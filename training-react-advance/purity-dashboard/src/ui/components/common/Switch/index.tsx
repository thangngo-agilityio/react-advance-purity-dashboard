import { FormControl, FormLabel, Switch, SwitchProps } from "@chakra-ui/react"

type TSwitchComponent = SwitchProps & {
  title: string;
}

const SwitchComponent = ({ title, ...rest }: TSwitchComponent) => (
  <FormControl display='flex' alignItems='center' >
    <Switch colorScheme="teal" id="remember-me" {...rest} />
    <FormLabel htmlFor='remember-me' ml='10px' mb='0' color='text.200'>
      {title}
    </FormLabel>
  </FormControl>
);

export default SwitchComponent;
