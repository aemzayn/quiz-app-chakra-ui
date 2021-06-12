import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Link,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { GoLogoGithub } from "react-icons/go";

const CATEGORY = [
  { label: "Any", value: "" },
  { label: "General Knowledge", value: "9" },
  { label: "Books", value: "10" },
  { label: "Film", value: "11" },
  { label: "Music", value: "12" },
  { label: "Musical Theatres", value: "13" },
  { label: "Television", value: "14" },
  { label: "Video games", value: "15" },
  { label: "Board games", value: "16" },
  { label: "Science and Nature", value: "17" },
  { label: "Computer Science", value: "18" },
  { label: "Math", value: "19" },
  { label: "Mythology", value: "20" },
  { label: "Sports", value: "21" },
  { label: "Geography", value: "22" },
  { label: "History", value: "23" },
  { label: "Politics", value: "24" },
  { label: "Art", value: "25" },
  { label: "Celebrities", value: "26" },
  { label: "Animal", value: "27" },
  { label: "Vehicles", value: "28" },
  { label: "Comics", value: "29" },
  { label: "Gadgets", value: "30" },
  { label: "Anime and Manga", value: "31" },
  { label: "Cartoons", value: "32" },
];

const DIFFICULTY = [
  { label: "Any", value: "" },
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
];

const TYPE = [
  { label: "Any", value: "" },
  { label: "True or false", value: "boolean" },
  { label: "Multiple choice", value: "multiple" },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questionsType, setQuestionsType] = useState({
    amount: 10,
    category: "",
    difficulty: "",
    type: "",
  });
  const router = useRouter();
  const { colorMode } = useColorMode();

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
      </Head>
      <main>
        <Heading size="md">Create a new game</Heading>
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
          <Button size="lg" type="submit" isLoading={isLoading}>
            Start game
          </Button>
        </VStack>
        <VStack color="gray.500" mt={20}>
          <Text>
            API from{" "}
            <Link
              _hover={{ color: colorMode === "light" ? "black" : "white" }}
              href="https://opentdb.com/"
              isExternal
              rel="nofollow"
            >
              opentdb.com
            </Link>
          </Text>
          <Link
            _hover={{ color: colorMode === "light" ? "black" : "white" }}
            isExternal
            href="https://github.com/aemzayn/quiz-app-chakra-ui"
          >
            <Icon aria-label="Github repo icon" w={10} as={GoLogoGithub} />
          </Link>
        </VStack>
      </main>
    </>
  );
};

export default Index;
