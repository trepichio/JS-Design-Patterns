// External API Service
function CryptocurrencyAPI() {
  this.getValue = function (coin) {
    console.log('Calling External API...');
    switch (coin) {
      case "Bitcoin":
        return "R$1.500"
        break;
      case "Litecoin":
        return "R$50"
        break;
      case "Ethereum":
        return "R$265"
        break;
    }
  }
}

// ===================================

const api = new CryptocurrencyAPI()

// simulate regular network calls - not ideal when there are many and repeated too.
// console.log(api.getValue("Bitcoin"));
// console.log(api.getValue("Litecoin"));
// console.log(api.getValue("Ethereum"));

// ==================================

function CryptocurrencyProxy() {
  this.api = new CryptocurrencyAPI()
  this.cache = {}
  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin)
    }
    return this.cache[coin]
  }
}

const proxy = new CryptocurrencyProxy()

console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Ethereum"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litecoin"));
console.log(proxy.getValue("Ethereum"));