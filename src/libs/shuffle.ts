// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export function shuffle(arr: string[]) {
  let currentIndex = arr.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
