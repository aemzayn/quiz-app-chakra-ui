/*
  no of questions
  - min 1
  - max 50

  category:
  - https://opentdb.com/api.php?amount=10
  - general knowledge https://opentdb.com/api.php?amount=10&category=9
  - entertainment books https://opentdb.com/api.php?amount=10&category=10
  - film 11
  - music 12
  - musical theatres 13
  - television 14
  - video games 15
  - board games 16
  - science and nature 17
  - science computers 18
  - science math 19
  - mythology 20
  - sports 21
  - geography 22
  - history 23
  - politics 24
  - art 25
  - celebrities 26
  - animal 27
  - vehicles 28
  - entertainment comics 29
  - science gadgets 30
  - entertainment japanese anima and manga 31
  - cartoon animations 32

  difficulty:
  - any
  - easy
  - medium
  - hard

  type
  - any
  - multiple
  - boolean

  api example:
  https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple

*/

const fetchQuiz = async (
  amount: string | string[] = "10",
  category: string | string[],
  difficulty: string | string[],
  type: string | string[]
) => {
  let url = `https://opentdb.com/api.php?amount=${amount}${
    category && "&category=" + category
  }${difficulty && "&difficulty=" + difficulty}${type && "&type=" + type}`;
  const res = await fetch(url);
  const { results: questions } = await res.json();
  return questions;
};

export default fetchQuiz;
