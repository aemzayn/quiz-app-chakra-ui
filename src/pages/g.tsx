import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { Quiz } from "../interfaces";
import AnswerButton from "../components/answer-button";
import fetchQuiz from "../libs/fetchQuiz";
import { shuffle } from "../libs/shuffle";
import { Button, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";

type Props = {
  questions: Quiz[];
};

const Game: React.FC<Props> = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [canGoToNextRound, setCanGoToNextRound] = useState(false);
  const [choosenAnswer, setChoosenAnswer] = useState("");
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    let currentAnswers = shuffle([
      ...questions[current].incorrect_answers,
      questions[current].correct_answer,
    ]);
    setAnswers(currentAnswers);
  }, [current]);

  const submitAnswer = () => {
    setCanGoToNextRound(false);

    if (questions[current].correct_answer === choosenAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (current === questions.length - 1) {
      setGameOver(true);
      return;
    }

    setCurrent((prevState) => {
      if (++prevState > questions.length) {
        return questions.length;
      } else {
        return prevState++;
      }
    });
  };

  const chooseAnswer = (answer: string) => {
    setCanGoToNextRound(true);
    setChoosenAnswer(answer);
  };

  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="description" content="Game room" />
      </Head>
      <Heading textAlign="center">
        {questions.length > 0
          ? `${current + 1}/${questions?.length}`
          : gameOver
          ? "Game over"
          : "Quiz"}
      </Heading>

      {questions.length > 0 && !gameOver && (
        <VStack mt={6} spacing={8}>
          <Heading textAlign="center" size="md" fontWeight="medium">
            <span
              dangerouslySetInnerHTML={{ __html: questions[current]?.question }}
            />
            <span></span>
          </Heading>
          <SimpleGrid columns={2} row={2} gap={4}>
            {answers.map((answer, idx) => (
              <AnswerButton key={idx} answer={answer} submit={chooseAnswer} />
            ))}
          </SimpleGrid>
          <Flex w="full" justifyContent="flex-end">
            {canGoToNextRound && (
              <Button onClick={submitAnswer} size="lg" variant="outline">
                Submit
              </Button>
            )}
          </Flex>
        </VStack>
      )}
      {gameOver && (
        <VStack mt={8}>
          <Heading size="md" fontWeight="medium">
            Your score is : {score}
          </Heading>
          <Button onClick={() => router.push("/")}>New game</Button>
        </VStack>
      )}
    </>
  );
};

export default Game;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx;
  const { amount, category, difficulty, type } = query;

  const questions = await fetchQuiz(
    amount,
    category ?? "",
    difficulty ?? "",
    type ?? ""
  );

  return {
    props: {
      questions,
    },
  };
}
