"use strict";


// 1. countWords
function countWords(phrase) {
  /*

  > countWords('How many words do you see in your sentence that you repeat words');
  { How: 1,
    many: 1,
    words: 2,
    do: 1,
    you: 2,
    see: 1,
    in: 1,
    your: 1,
    sentence: 1,
    that: 1,
    repeat: 1 }

  */

  let words = phrase.split(' ');
  let count = {};

  // JS uses of not in, be careful!
  for (const word of words) {
    if (count.hasOwnProperty(word)) {
      count[word] += 1;
    }
    else {
      count[word] = 1;
    }

  };
  return count;
  
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  /*

  > getMelonsAtPrice(2.50);
  [ 'Cantaloupe', 'Honeydew' ]
  > getMelonsAtPrice(14.25);
  [ 'Christmas' ]
  > getMelonsAtPrice(3.00);
  undefined

  */
  const melon_prices = {
  2.50: ['Cantaloupe', 'Honeydew'],
  2.95: ['Watermelon'],
  3.25: ['Musk', 'Crenshaw'],
  14.25: ['Christmas']
  }

  if (melon_prices[price]) {
    return melon_prices[price]
  }

  return ;

}