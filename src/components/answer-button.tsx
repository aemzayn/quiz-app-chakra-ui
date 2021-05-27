import { Button } from "@chakra-ui/button";

type Props = {
  answer: string;
  key?: number;
  submit: (answer: string) => void;
};

const AnswerButton: React.FC<Props> = ({ answer, submit }) => {
  return (
    <Button size="lg" onClick={() => submit(answer)}>
      <span dangerouslySetInnerHTML={{ __html: answer }} />
    </Button>
  );
};

export default AnswerButton;
