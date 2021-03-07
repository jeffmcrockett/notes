// build a bank account class
// build a subclass for transaction

// have a balance method


class bankAccount {
    accountNumber;
    owner;
    transactions;

    // constructing the account with designated owner, a blank transaction table, and a random account number assigned upon creation
    constructor(owner) {
        this.owner = owner;
        let randomNumber = Math.floor((Math.random() * 10000000));
        this.accountNumber = randomNumber;
        this.transactions = [];
    };

    // if the amount is positive, add it to the transaction array. Each time the balance is calculated, the deposits will be re-added.
    deposit(amount) {
        if (amount > 0) {
            let deposit = new Transaction(amount, "deposit");
            this.transactions.push(deposit);
        } else {
            // I don't see an issue with depositing negative money, it would just be a withdrawal. Bank accounts can go negative. Leaving as is for this assignment.
            console.log(`Please go back and select withdrawal`)
        }
    };

    balance() {
        // start with a 0 balance each time function is run and rerun the transaction array for a sum
        let balance = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            balance += this.transactions[i].amount;
        }
        return balance;
    }

    charge(payee, amount) {
        // if balance is more than charge, make the charge negative and add the negative number to the transactions array
        if (this.balance() >= amount) {
            let charge = new Transaction((amount * -1), payee);
            this.transactions.push(charge);
            console.log(`Approved, new balance is ${this.balance()}`)
        } else {
            console.log(`Transaction declined, insuffucuent funds.`);
        }
    }
}

class Transaction {
    date;
    amount;
    payee;

    constructor(amount, payee) {
        this.date = new Date();
        this.amount = amount;
        this.payee = payee;
    }
}


let account1 = new bankAccount("987654321", "John Doe");
console.log(account1.balance()); // 0 balance
account1.charge("Target", 10); // transaction declined
account1.deposit(200); 
console.log(account1.balance()); // 200 
console.log(account1.transactions.length); // 1?
account1.deposit(100);
account1.charge("Chipotle", 20); // approved, 280
account1.charge("Diamonds Direct", 1000); //  declined
account1.charge("Target", -15); // approved, 295
account1.deposit(-10); // should be withdrawal

// the transaction array is an array of objects to have transaction-value
