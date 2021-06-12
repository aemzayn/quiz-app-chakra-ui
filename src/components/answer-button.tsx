import { Button, Text } from "@chakra-ui/react";

type Props = {
  answer: string;
  key?: number;
  submit: (answer: string) => void;
};

const AnswerButton: React.FC<Props> = ({ answer, submit }) => {
  return (
    <Button wordBreak="break-all" size="lg" onClick={() => submit(answer)}>
      <Text w="full" as="span" dangerouslySetInnerHTML={{ __html: answer }} />
    </Button>
  );
};

export default AnswerButton;
