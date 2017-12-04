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
    "Diner\'s Club" : cardNumber.match(/^(3[89][0-9]{12})$/),
    "American Express" : cardNumber.match(/^(3[47][0-9]{13})$/),
    "Visa" : cardNumber.match(/^(4[0-9]{12})$|^(4[0-9]{15})$|^(4[0-9]{18})$/),
    "MasterCard" : cardNumber.match(/^(5[12345][0-9]{14})$/),
    "Discover" : ((/^(6011)|^(65)|^(64)[4-9]/).test(cardNumber) && ((cardNumber.length === 16)||(cardNumber.length === 19))? true : null),
    "Maestro" : cardNumber.match(/^5018[0-9]{8,15}$|^5020[0-9]{8,15}$|^5038[0-9]{8,15}$|^6304[0-9]{8,15}$/),
    "China UnionPay" : cardNumber.match(/^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[01][0-9]|92[0-5])[0-9]{10,13}$|^62[4-6][0-9]{13,16}$|^628[2-8][0-9]{12,15}$/),
    "Switch" : ((/^49[013][1356]|^564182|^633110|^6333|^6759/).test(cardNumber) && ((cardNumber.length === 16) || (cardNumber.length === 18) || (cardNumber.length === 19))? true : null)
  }

  for (card in cardNetworks) {
    if (cardNetworks[card] !== null) {
      network = card
    }
  }
  return network
};

