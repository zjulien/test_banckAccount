class BankAccount{

    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
   

   showBalance(){
       console.log("solde :" + this.balance + " EUR");
   }

   deposit(amount){
       console.log("Dépôt de " + amount + " EUR");
       this.balance += amount;
       this.showBalance();
   }

   withdraw(amount){
       if ( amount > this.balance){
           console.log("retrait refusé!");
       
    } else {
        console.log("retrait de " + amount + "eur");
        this.balance -= amount;
        this.showBalance();
        }
    }
}



