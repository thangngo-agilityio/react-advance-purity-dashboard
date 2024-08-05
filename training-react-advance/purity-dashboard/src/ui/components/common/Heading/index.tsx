import { Heading, HeadingProps } from '@chakra-ui/react'
import { memo, ReactNode } from 'react';

export type THeadingProps = HeadingProps & {
  title?: ReactNode;
}

const HeadingComponent = memo(({ title, ...rest }: THeadingProps) => (
  <Heading {...rest}>{title}</Heading>
));

export default HeadingComponent;
