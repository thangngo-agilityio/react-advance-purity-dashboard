import { Heading, HeadingProps } from '@chakra-ui/react'
import { memo } from 'react';

export type THeadingProps = HeadingProps & {
  title: string;
}

export const HeadingComponent = memo(({ title, ...rest }: THeadingProps) => (
  <Heading {...rest}>{title}</Heading>
));
