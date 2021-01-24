"use strict";


// 1. printIndices
function printIndices(items) {
  /* Loop over item indices

  > printIndices(['Chocolate', 'milk', 'yum'])
  Chocolate 0
  milk 1
  yum 2
  
  */

  for (const i in items) {
    console.log(items[i], i);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  /*

  > everyOtherItem(['What', 'is', 'this', 'array']);
  [ 'What', 'this' ]

  */

  let result = []

  for (const i in items) {
    if (i % 2 == 0) {
      result.push(items[i]);
    }
  }
  console.log(result)   
  }



// 3. smallestNItems
function smallestNItems(items, n) {
  /*

  > smallestNItems([234, 23, 355, 12, 674, 341, 21, 6], 4)
[ 6, 12, 21, 23 ]

  */
 
  items.sort((a, b) => a - b);

  return items.slice(0,n)

}
