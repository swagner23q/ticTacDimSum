console.log("Let's place a game of tic tac toe!");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Are you ready? (Y/N)', function(answer) {
  var firstRow = ("      1|2|3");
  var lineRow = ("      -----");
  var secondRow = ("      4|5|6");
  var thirdRow = ("      7|8|9");

  if (answer.toUpperCase() === "Y") {

    console.log("Here is the board");
    console.log(firstRow);
    console.log(lineRow);
    console.log(secondRow);
    console.log(lineRow);
    console.log(thirdRow);

  } else {
    console.log('Fine...Bye Felicia (>_>)');
    rl.close();
  }

  rl.question("Player X goes first, choose a position: (1-9)", function(answer) {
    if (parseInt(answer) === 5) {
      secondRow = ("      4|X|6");
      console.log(firstRow);
      console.log(lineRow);
      console.log(secondRow);
      console.log(lineRow);
      console.log(thirdRow);
    }
    else if (parseInt(answer) === 4) {
      secondRow = ("      X|5|6");
      console.log(firstRow);
      console.log(lineRow);
      console.log(secondRow);
      console.log(lineRow);
      console.log(thirdRow);
    }
    else if (parseInt(answer) === 1) {
      firstRow = ("      X|2|3");
      console.log(firstRow);
      console.log(lineRow);
      console.log(secondRow);
      console.log(lineRow);
      console.log(thirdRow);
    }

  });
});
