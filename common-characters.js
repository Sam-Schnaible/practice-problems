/**
 * Write a function `f(a, b)` which takes two or more strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 */

//Helper function
//create object from a string with characters as keys with value true
const stringToObject = string => (
  string.split('').reduce( (obj, char) => {
    if ( char.match(/[a-z]/i) ) obj[char] = true;
    return obj;
  }, {})
)

//create object with only common characters from two objects
const characterMatch = (obj1, obj2) => {
  return Object.keys(obj1).reduce ( (match, key) => {
    if ( key in obj2 ) match[key] = true;
    return match;
  }, {})
}

const commonCharacters = (string1, string2) => {

}