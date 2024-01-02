// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

export function getAllAccountsWithSumsOfDepositsLess2000(accounts) {

  const result = [];

  for (const account of accounts) {
    if (Array.isArray(account.deposits)) {
      let sumOfDeposits = 0;

      for (const deposit of account.deposits) {
        sumOfDeposits += deposit;
      }

      if (sumOfDeposits < 2000 || sumOfDeposits === 0) {
        result.push(account);
      }
    } else if (!account.deposits) {
      result.push(account);
    }
  }

  return result.slice(0, 4);
}

const accounts = [
];

module.exports = getAllAccountsWithSumsOfDepositsLess2000;

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
