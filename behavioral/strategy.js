function Fedex() {
  this.calculate = package => {
    // fedex calculations...
    return 5.70
  }
}

function UPS() {
  this.calculate = package => {
    // ups calculations....
    return 2.27
  }
}

function USPS() {
  this.calculate = package => {
    //usps calculations...
    return 4.5
  }
}

/**
 * Strategy Pattern
 */
class Shipping {
  constructor() {
    this.company = ''
  }

  setStrategy(company) {
    this.company = company
  }

  calculate(pckg) {
    return this.company.calculate(pckg)
  }
}


const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const package = {
  from: 'SP',
  to: 'RJ',
  weight: 1.87
}

/**
 * Regular way of doing
 */
// console.log('fedex :>> ', fedex.calculate(package));
// console.log('ups :>> ', ups.calculate(package));
// console.log('usps :>> ', usps.calculate(package));


/**
 * Strategy Pattern
 */
const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log('Fedex :>> ', shipping.calculate(package));

shipping.setStrategy(ups)
console.log('UPS :>> ', shipping.calculate(package));

shipping.setStrategy(usps)
console.log('UsPS :>> ', shipping.calculate(package));