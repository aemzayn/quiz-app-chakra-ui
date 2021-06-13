import { useContext, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Link,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoLogoGithub } from "react-icons/go";
import { CATEGORY, DIFFICULTY, TYPE } from "../libs/constants";
import Header from "../components/header";
import { ColorSchemeContext } from "../context/ColorScheme";
import { IColorSchemeType } from "../interfaces/IColorScheme";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questionsType, setQuestionsType] = useState({
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
  });
  const router = useRouter();
  const { colorScheme } = useContext(ColorSchemeContext) as IColorSchemeType;
  const footerColor = useColorModeValue("gray.700", "gray.300");

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    let target = e.target as HTMLInputElement;
    setQuestionsType((prevValue) => ({
      ...prevValue,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (questionsType.amount < 1 && questionsType.amount > 50) return;
    setIsLoading(true);
    router.push(
      `/g?amount=${questionsType.amount}${
        questionsType.category && "&category=" + questionsType.category
      }${
        questionsType.difficulty && "&difficulty=" + questionsType.difficulty
      }${questionsType.type && "&type=" + questionsType.type}`
    );
  };

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="Challenge your self with quiz." />
        <meta name="keywords" content="Quiz, General Knowledge, Game" />
      </Head>
      <main>
        <Header />
        <VStack as="form" onSubmit={handleSubmit} mt={4} spacing={4}>
          <FormControl>
            <FormLabel>Question amount</FormLabel>
            <Input
              value={questionsType.amount}
              onChange={handleChange}
              name="amount"
              type="number"
              min="1"
              max="50"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select
              name="category"
              onChange={handleChange}
              value={questionsType.category}
            >
              {CATEGORY.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Difficulty</FormLabel>
            <Select
              name="difficulty"
              onChange={handleChange}
              value={questionsType.difficulty}
            >
              {DIFFICULTY.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Question type</FormLabel>
            <Select
              name="type"
              onChange={handleChange}
              value={questionsType.type}
            >
              {TYPE.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </Select>
          </FormControl>
          <Button
            colorScheme={colorScheme}
            size="lg"
            type="submit"
            isLoading={isLoading}
          >
            Start game
          </Button>
        </VStack>
        <VStack color={footerColor} mt={20}>
          <Text>
            API from{" "}
            <Link
              _hover={{ color: colorScheme, textDecor: "underline" }}
              href="https://opentdb.com/"
              isExternal
              rel="nofollow"
            >
              opentdb.com
            </Link>
          </Text>
          <Link
            _hover={{ color: colorScheme }}
            isExternal
            href="https://github.com/aemzayn/quiz-app-chakra-ui"
            rel="noreferrer"
          >
            <Icon aria-label="Github repo icon" w={10} as={GoLogoGithub} />
          </Link>
        </VStack>
      </main>
    </>
  );
};

export default Index;
