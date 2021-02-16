class MoneyDispenser {
  constructor(amount) {
    this.amount = amount
  }
  compute(billDenomination) { // 100, 50, 20, 10, 5, ,2, 1
    const numberOfBills = Math.floor(this.amount / billDenomination)
    this.amount -= numberOfBills * billDenomination
    console.log(`Dispensing ${numberOfBills} R$${billDenomination} bills. Amount left: R$${this.amount}`);
    return this
  }
}

const dispenser = new MoneyDispenser(527)

dispenser
  .compute(100)
  .compute(50)
  .compute(20)
  .compute(10)
  .compute(5)
  .compute(2)
  .compute(1)