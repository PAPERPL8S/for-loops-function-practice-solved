
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(arrays) {
  // Your code goes here...
let flatArrays = [];

  for (let i = 0; i < arrays.length; i++) {
    const currentArray = arrays[i];

    for (let j = 0; j < currentArray.length; j++) {
      const currentElement = currentArray[j];

      if (Array.isArray(currentElement)) {
        for (let k = 0; k < currentElement.length; k++) {
          flatArrays.push(currentElement[k]);
        }
      } else {
        flatArrays.push(currentElement);
      }
    }
  }

  return flatArrays;
}

const arrA = [1, [2, 3], [4, [5, 6]]];
const arrB = [7, 8, [9, 10]];





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
