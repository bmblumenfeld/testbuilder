// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)


var detectNetwork = function(cardNumber) {
  var network = null
  var cardNetworks = {
    "Diner\'s Club" : cardNumber.match(/^(3[8|9][0-9]{12})$/),
    "American Express" : cardNumber.match(/^(3[4|7][0-9]{13})$/),
    "Visa" : cardNumber.match(^(4[0-9]{12})$|^(4[0-9]{15})$|^(4[0-9]{18})$)
  }

  for (card in cardNetworks) {
    if (cardNetworks[card] !== null) {
      network = card
    }
  }
  return network
  console.log()
};