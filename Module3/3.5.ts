{
  //Accesss Modifier --> Typescript support four types of access modifiers: public, private, protected and read-only. Access modifiers are used to encapsulate class and its member variables.

  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    addMoney(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance;
    }

    // constructor(){

    // }
  }

  const goribManusherAccount = new BankAccount(111, "Mr.Gorib", 250);
  goribManusherAccount.addMoney(20);
  goribManusherAccount.getBalance();

  console.log(goribManusherAccount);

  //
}
