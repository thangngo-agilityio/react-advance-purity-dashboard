import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type TTextProps = TextProps & {
  content: ReactNode;
}

const TextComponent = ({ content, ...rest }: TTextProps) => (
  <Text {...rest}>
    {content}
  </Text>
);

export default TextComponent;
