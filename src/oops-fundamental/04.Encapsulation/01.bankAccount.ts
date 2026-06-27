class BankAccountEncapsulation {
    private accountHolder:string
    private balance:number

    constructor(accountHolder:string){
        this.accountHolder = accountHolder
        this.balance = 0;
    }

    deposit(amount:number):void{
        if(amount<=0){
            throw new Error("Amount should be more then 0")
        }
    }

    withdraw(amount:number):void{
        if(amount <= 0){
            throw new Error("Amount must be more than 0")
        }
        if(amount > this.balance){
            throw new Error("Insufficient funds")
        }

        this.balance -= amount
    }

    // getters
    getBalance():number{
        return this.balance
    }

    getAccountHolder():string{
        return this.accountHolder
    }

}