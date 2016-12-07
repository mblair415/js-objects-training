/*

  Create a function `parseQueryString` that accepts a query string parameter as
  an argument, and converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

function parseQueryString(string) {
  var result = {};
  var ampersandRemove = string.split("&");

  var removeEqual = ampersandRemove.map(function(phrase) {
    return phrase.split("=");
  })
  removeEqual.forEach(function(keyValue) {
    result[keyValue[0]] = keyValue[1];
  })
  return result;
}

console.log(parseQueryString("first=alpha&last=omega"));
// ["first=alpha", "last=omega"]  // step 1
// [["first", "alpha"], ["last", "omega"]]  // step 2
// result[thing[0][0]] = thing[0][1]  // first: alpha   step 3
