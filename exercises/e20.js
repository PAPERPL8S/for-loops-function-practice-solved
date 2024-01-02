
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(names) {
  // Your code goes here...
const namesWithA = [];
  const namesWithoutA = [];

  for (let i = 0; i < names.length; i++) {
    const currentName = names[i];

    if (currentName.toLowerCase().startsWith('a')) {
      namesWithA.push(currentName);
    } else {
      namesWithoutA.push(currentName);
    }
  }

  return [namesWithA, namesWithoutA];
}

const inputNames = ["jon", "alice", "andrew", "mark", "jimmy", "Oliver", "Evelyn", "Ben"];
const Result = [['alice', 'andrew'], ['jon', 'mark', 'jimmy']];

const result = separateNamesWithAFromRest(inputNames);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
