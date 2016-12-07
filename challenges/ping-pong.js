/*

  In this challenge you will simulate the movement of a ping-pong, bouncing back
  and forth across a table.

  Create a function `pingPong` that accepts an array, and returns the *same* array
  with the ping-pong moved one cell. Each time the ping-pong moves, you must increment the
  ping-pong's `steps` counter by 1. The direction of movement should be determined soley by the
  current state of the array and the current `steps` value of the ping-pong.

  ``` javascript
  var table = [{steps: 0}, null, null, null];

  pingPong(table); //=> [null, {steps: 1}, null, null]
  pingPong(table); //=> [null, null, {steps: 2}, null]
  pingPong(table); //=> [null, null, null, {steps: 3}]
  pingPong(table); //=> [null, null, {steps: 4}, null]
  pingPong(table); //=> [null, {steps: 5}, null, null]
  pingPong(table); //=> [{steps: 6}, null, null, null]
  pingPong(table); //=> [null, {steps: 7}, null, null]

  table; //=> [null, {steps: 7}, null, null]
  ```

  Keep in mind that I should be able start this process at *any* point:

  ```
  var table = [null, {steps: 13}, null, null];
  pingPong(table); //=> [null, null, {steps: 14}, null]
  ```

  Bonuses
  - Allow arrays of *any length*
  - We can think of the ping-pong as having an internal "speed" of 1. Allow this value to be
    explicity set at a higher number (i.e. move 2 cells at a time, or 3 cells at a time).
  - Support multiple ping-pongs.

*/

// YOUR CODE HERE
var ballSpeed = 1; // this will move ball forward or backwards, also determines speed.
var ballRight = true; // determins if the ball should be forward or backwad
var stepCounter = 0; // tracks number of steps the ball has moved.
var ballIndex = 0; // tracks the literal position of the ball on the table

function pingPong(table) {
  var ball = {};
  var tableLength = table.length -1;  // allows table to be any length
  // var play = ballMove(ballIndex, ball, tableLength);

  table.forEach(function(ballPosition) {
    if (ballPosition) { // picks spot with the ball.  only true value.
      ballIndex = table.indexOf(ballPosition); // position of the ball
      ball = table[ballPosition]; // allows the ball itself to be altered.
      ballMove(ballIndex, table.length-1); // moves the ball, feeds position of ball and length of table.  will need to feed ballSpeed in here when that gets written.
      console.log(ballIndex)
    }
  })
}

function ballMove(ballIndex, tableLength) {
  if (ballRight && ballIndex + ballSpeed < tableLength) {
    ballIndex += ballSpeed;
  } else if (ballRight) {
    ballIndex = tableLength;
    ballRight = false;
  } else if (!ballRight && ballIndex - ballSpeed > tableLength) {
    ballIndex -= ballSpeed;
  } else if (!ballRight) {
    ballIndex = 0;
    ballRight = true;
  }
  ballIndex += ballSpeed;
  stepCounter += 1;

  return ballIndex;
}

var table = [{steps: stepCounter}, null, null, null];
pingPong(table);
