// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccount } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...
  if (!Array.isArray(bankAccount) || bankAccount.length !== 5) {
    return Array(5).fill('');
  }

  const result = [];
  
  for (let i = 0; i < bankAccount.length; i++) {
    const account = bankAccount[i];
    let withdrawalsSum = '';

    if (account.withdrawals.length > 0) {
      withdrawalsSum = 0;
      for (let j = 0; j < account.withdrawals.length; j++) {
        withdrawalsSum += account.withdrawals[j];
      }
      withdrawalsSum = withdrawalsSum.toFixed(2);
    }

    result.push(withdrawalsSum);
  }

  const isCorrectResult = result.length === 5 && result.every(value => typeof value === 'string');

  return isCorrectResult ? result : Array(5).fill('');
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
