// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  var prefix = Number((cardNumber[0] + cardNumber[1]))
  var cardNetwork = null 
  if (((prefix === 38) || (prefix === 39)) && (cardNumber.length === 14)) {
    cardNetwork = 'Diner' + '\'' + 's' + ' Club'
  } else if (((prefix === 34) || (prefix === 37)) && (cardNumber.length === 15)) {
      cardNetwork = 'American Express'
    } else if 
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  return cardNetwork 
};

