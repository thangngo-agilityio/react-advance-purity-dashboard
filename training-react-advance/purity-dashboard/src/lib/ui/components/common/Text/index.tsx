import { Text, TextProps } from "@chakra-ui/react";
import { memo } from "react";

type TTextProps = TextProps & {
  content: string;
}

const TextComponent = memo(({ content, ...rest }: TTextProps) => (
  <Text {...rest}>
    {content}
  </Text>
));

export default TextComponent;
