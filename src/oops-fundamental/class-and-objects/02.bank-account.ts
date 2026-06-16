/*

Problem: Create a BankAccount class that manages a simple bank account with deposit, withdrawal, and balance checking functionality.

Requirements:

Fields: accountNumber, ownerName, balance
Constructor that initializes the account with owner name and account number (balance starts at 0)
deposit(amount): adds money to balance (only positive amounts)
withdraw(amount): removes money if sufficient balance exists, returns success/failure
getBalance(): returns current balance


*/

class BankAccount {
  private accountNumber: string;
  private ownerName: string;
  private balance: number;

  constructor(accountNumber: string, ownerName: string) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = 0;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  getBalance(): number {
    return this.balance;
  }
}
