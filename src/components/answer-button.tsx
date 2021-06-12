import { Button, Text } from "@chakra-ui/react";

type Props = {
  answer: string;
  key?: number;
  isSelected?: boolean;
  colorScheme: string;
  submit: (answer: string) => void;
};

const AnswerButton: React.FC<Props> = ({
  answer,
  submit,
  colorScheme,
  isSelected = false,
}) => {
  return (
    <Button
      wordBreak="break-all"
      size="lg"
      onClick={() => submit(answer)}
      colorScheme={colorScheme}
      isActive={isSelected}
    >
      <Text w="full" as="span" dangerouslySetInnerHTML={{ __html: answer }} />
    </Button>
  );
};

export default AnswerButton;
