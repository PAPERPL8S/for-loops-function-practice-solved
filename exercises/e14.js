
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(accounts) {
  // Your code goes here...

const result = [];

  for (const account of accounts) {
    let sumOfDeposits = 0;
    for (const deposit of account.deposits) {
      sumOfDeposits += deposit;
    }

    let sumOfWithdrawals = 0;
    if (account.withdrawals) {
      for (const withdrawal of account.withdrawals) {
        sumOfWithdrawals += withdrawal;
      }
    }

    const expectedBalance = sumOfDeposits - sumOfWithdrawals;

    if (account.balance !== expectedBalance) {
      result.push(account);
    }

    if (result.length === 1) {
      break;
    }
  }

  return result;
}

const bankAccounts = [
];

console.log(getClientsWithWrongBalance(bankAccounts));



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
