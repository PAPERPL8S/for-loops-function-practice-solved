// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

export function getClientWithNoMoney(peopleArray) {
  // Your code goes here...
  if (!Array.isArray(peopleArray)) {
    return [];
  }

  const clientsWithNoMoney = [];
  for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].balance === 0) {
      clientsWithNoMoney.push(peopleArray[i].name);
    }
  }

  return clientsWithNoMoney;

}

const bankAccounts = [
  { name: 'Susan', balance: 1000000000000 },
  { name: 'Morgan', balance: 10000000 },
  { name: 'Joshua', balance: 400000000 },
  { name: 'Candy', balance: 0 }
];

const clientsWithNoMoney = getClientWithNoMoney(bankAccounts);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
