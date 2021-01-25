"use strict";


function wordsInCommon(words1, words2) {
  /* Return a list of unique words that appear in `words1` and `words2`

  Arguments:
      words1 (list): A list of words
      words2 (list): Another list of words

  Returns:
      list: A list of unique words

  > wordsInCommon(['hi', 'hello', 'bonjour'], ['bonjour', 'hallo', 'hola'])
  Set { 'bonjour' }

  */

  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {

    if (words2Set.has(word)) {
      result.add(word);
    }
  }

  return result;

}

/*
function kidsGame(names) {
  // Replace this with your code
}

let output = [names.pop(0)]

let firstLetterToWords = {}

for (const name of names) {
  if (!firstLetterToWords.hasOwnProperty(name[0])) {
    firstLetterToWords[name[0]] = [name];
  }
  else {
    firstLetterToWords[name[0]].push(name);
  }

  while True {
    startLetter = output[output.length-1][[[output.length-1]-1];


  }
}
*/