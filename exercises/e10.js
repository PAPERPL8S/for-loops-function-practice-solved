// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
if (!Array.isArray(array) || array.length === 0 || typeof letter !== 'string') {
    return [];
  }

  const clientsWithLetterInName = [];
   
  for (let i = 0; i < array.length; i++) {
    const person = array[i];

    if (typeof person.name === 'string' && person.name.toLowerCase().includes(letter.toLowerCase())) {
      clientsWithLetterInName.push(person.name);
    }
  }
  
  return clientsWithLetterInName;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
