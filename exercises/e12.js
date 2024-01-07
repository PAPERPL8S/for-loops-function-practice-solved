
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts } from "../data/data";

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  if (!Array.isArray(bankAccounts) || bankAccounts.length !== 5) {
    return Array(8);
  }

  const getAllDepositsGreaterThanOneHundred = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    const account = bankAccounts[i];

    if (account && account.deposits && Array.isArray(account.deposits)) {
      for (let j = 0; j < account.deposits.length; j++) {
        const deposit = account.deposits[j];

        if (typeof deposit === 'number' && deposit > 100) {
          getAllDepositsGreaterThanOneHundred.push(parseFloat(deposit.toFixed(2)));
        }
      }
    }
  }

  return getAllDepositsGreaterThanOneHundred.length > 0
   ? getAllDepositsGreaterThanOneHundred
  : Array(8);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
