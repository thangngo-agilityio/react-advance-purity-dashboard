import { Heading } from '@chakra-ui/react'

interface THeadingProps {
  title: string;
}

export const HeadingComponent = ({ title, ...rest }: THeadingProps) => {
  return (
    <Heading {...rest}>
      {title}
    </Heading>
  )
}
