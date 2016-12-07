/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

function letterCount(word) {
  var result = {};

  for (var i = 0; i < word.length; i++) {
    if (result[word[i]] === undefined) {
      result[word[i]] = 1;
    } else {
      result[word[i]] += 1;
    }
  }
  console.log(result);
  return result;
}

// letterCount("apple");

function letterCount1(word) {
  var wordToCount = word.toLowerCase().split("")
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var result = {};

  wordToCount.forEach(function(element) {
    if (alphabet.indexOf(element) !== -1) {
      if (result[element] === undefined) {
        result[element] = 1;
      } else {
        result[element] += 1;
      }
    }
  })
  console.log(result);
  return result;
}

letterCount1("APpl!!$e");
