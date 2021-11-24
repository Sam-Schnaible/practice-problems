/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
**/

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {

  var number = this.valueOf();
  var place, numberInPlace, numberLeft;
  var decimalPart;
  var output, restOfString, decimalString;
  if (number % 1 !== 0) {
    decimalPart = number % 1;
    number = Math.floor(number);
  }
  if (numbersToWords[number]) {
    output = numbersToWords[number];
  } else if (number < 100) {
    numberInPlace = Math.floor(number / 10);
    numberLeft = number % 10;
    output = numbersToWords[numberInPlace * 10] + '-' + (numberLeft).toEnglish();
  } else {
    if (number < 1000) {
      place = 100;
    } else {
      place = 1000;
      while (place * 1000 <= number) {
        place *= 1000;
      }
    }
    numberInPlace = Math.floor(number / place);
    numberLeft = number % place;
    output = numberInPlace.toEnglish() + ' ' + numbersToPlace[place];
    restOfString = (numberLeft).toEnglish();
    if (restOfString !== 'zero') {
      output += ' ' + restOfString;
    }
  }
  if (decimalPart) {
    place = 1;
    do {
      place *= 10;
      decimalPart *= 10;
    } while (Math.floor(decimalPart) !== decimalPart);
    var pluralize = decimalPart === 1 ? '' : 's';
    decimalString = decimalPart.toEnglish() + ' ' + place.toEnglish().replace('one ', '').replace(/ /, '-') + 'th' + pluralize;
    if (output === 'zero') {
      output = decimalString;
    } else {
      output += ' and ' + decimalString;
    }
  }
  return output;
  };