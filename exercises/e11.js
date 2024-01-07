// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data";

export function getAllWithdrawals(array) {
  // Your code goes here...
  const result = [];

  if (!Array.isArray(bankAccounts) || bankAccounts.length !== 5) {
    for (let i = 0; i < 5; i++) {
      result.push('');
    }
  } else {
    for (let i = 0; i < bankAccounts.length; i++) {
      const account = bankAccounts[i];
      let withdrawalsSum = '';

      if (account.withdrawals.length > 0) {
        withdrawalsSum = 0;
        for (let j = 0; j < account.withdrawals.length; j++) {
          withdrawalsSum += account.withdrawals[j];
        }
        withdrawalsSum = withdrawalsSum(2);
      }

      result.push(withdrawalsSum);
    }
  }
  return getAllWithdrawals.length > 0
  ? withdrawalsSum
  : Array(5);
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
