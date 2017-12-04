/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });

var expect = chai.expect;
// var generateNum = function(nums){
//    nums = nums - prefix.length
//    var numbers = ''
//    for (var num = 0 ; num < nums; num++) { 
//      numbers += Math.floor((Math.random() * 10) + 1);
//    }
//    return numbers;
//    }

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901232') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {

  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  for(var prefix = 51; prefix <= 55; prefix++){
    (function(prefix) {
      it('has prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix+'12345678901234')).to.equal('MasterCard');
      });
    })(prefix)
  } 
});

describe('Discover', function() {
  var prefs = ['6011','65','644','645','646','647','648','649']
  prefs.forEach(function (prefix) { 
      if (prefix.length === 4) {
        it('has a prefix of ' + prefix + ' and a length of 16', function () {
          expect(detectNetwork(prefix + '374859609847')).to.equal('Discover');
        });
        it('has a prefix of ' + prefix + ' and a length of 19', function () {
          expect(detectNetwork(prefix + '374859609847364')).to.equal('Discover');
        });
      } else if (prefix.length === 3) {
          it('has a prefix of ' + prefix + ' and a length of 16', function () {
            expect(detectNetwork(prefix + '3748596098443')).to.equal('Discover');
          });
          it('has a prefix of ' + prefix + ' and a length of 19', function () {
            expect(detectNetwork(prefix + '3748596098474563')).to.equal('Discover');
          });
        } else if (prefix.length === 2) {
            it('has a prefix of ' + prefix + ' and a length of 16', function () {
              expect(detectNetwork(prefix + '37485960984456')).to.equal('Discover');
            });
            it('has a prefix of ' + prefix + ' and a length of 19', function () {
              expect(detectNetwork(prefix + '37485960984345345')).to.equal('Discover');
            });
          }
  })
}) 

describe('Maestro', function() {
  var prefs = ['5018','5020','5038','6304']
  prefs.forEach(function(prefix) {
    it('has a prefix of ' + prefix + ' and length of 12', function () {
      expect(detectNetwork( prefix + '46574635')).to.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and length of 13', function () {
      expect(detectNetwork( prefix + '465746353')).to.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and length of 14', function () {
      expect(detectNetwork( prefix + '4657463543')).to.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and length of 15', function () {
      expect(detectNetwork( prefix + '46574635123')).to.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and length of 16', function () {
      expect(detectNetwork( prefix + '436574635345')).to.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and length of 17', function () {
      expect(detectNetwork( prefix + '6465746352345')).to.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and length of 18', function () {
      expect(detectNetwork( prefix + '46574635465743')).to.equal('Maestro');
    });
    it('has a prefix of ' + prefix + ' and length of 19', function () {
      expect(detectNetwork( prefix + '465746355656787')).to.equal('Maestro');
    });
  })
})

describe('Should support China UnionPay', function () {
  for (var prefix = 622126; prefix <= 622925; prefix++) {
  (function(prefix) {
    debugger;
    it('has a prefix of ' + prefix + ' and a length of 16', function () {
      expect(detectNetwork(prefix+'3384728375')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix + ' and a length of 17', function () {
      expect(detectNetwork(prefix+'33847283755')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix + ' and a length of 18', function () {
      expect(detectNetwork(prefix+'338472837543')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function () {
      expect(detectNetwork(prefix+'3384728375234')).to.equal('China UnionPay');
    });
  })(prefix)
  }
  for (var prefi = 624; prefi <= 626; prefi++) {
  (function(prefi) {
    it('has a prefix of ' + prefi + ' and a length of 16', function () {
      expect(detectNetwork(prefi+'3384728345567')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + prefi + ' and a length of 17', function () {
      expect(detectNetwork(prefi+'33847283345345')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + prefi + ' and a length of 18', function () {
      expect(detectNetwork(prefi+'338472837465940')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + prefi + ' and a length of 19', function () {
      expect(detectNetwork(prefi+'3384728375214544')).to.equal('China UnionPay');
    });
  })(prefi)
  }
  for (var pref = 6282; pref <= 6288; pref++) {
  (function(pref) {
    it('has a prefix of ' + pref + ' and a length of 16', function () {
      expect(detectNetwork(pref+'338472834556')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + pref + ' and a length of 17', function () {
      expect(detectNetwork(pref+'3384728334534')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + pref + ' and a length of 18', function () {
      expect(detectNetwork(pref+'33847283746594')).to.equal('China UnionPay');
    });
    it('has a prefix of ' + pref + ' and a length of 19', function () {
      expect(detectNetwork(pref+'338472837521454')).to.equal('China UnionPay');
    });
  })(pref)
  }
});
describe('Should support Switch', function () {
  var prefs = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']
  prefs.forEach(function (prefix) {
      if (prefix.length === 4) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        expect(detectNetwork(prefix+'338472837534')).to.equal('Switch');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function () {
        expect(detectNetwork(prefix+'33847283755345')).to.equal('Switch');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        expect(detectNetwork(prefix+'338472837543456')).to.equal('Switch'); 
      });    
    } else if (prefix.length === 6) {
        it('has a prefix of ' + prefix + ' and a length of 16', function () {
          expect(detectNetwork(prefix+'3384728375')).to.equal('Switch');
        });
        it('has a prefix of ' + prefix + ' and a length of 18', function () {
          expect(detectNetwork(prefix+'338472837554')).to.equal('Switch');
        });
        it('has a prefix of ' + prefix + ' and a length of 19', function () {
          expect(detectNetwork(prefix+'3384728375432')).to.equal('Switch');
        });
      }
  })
})

