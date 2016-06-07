console.log('Rob is the bomb');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Do you want to play Tic Tac Toe? (Y/N)', function(answer) {
  if (answer.toUpperCase() === "Y") {
    console.log("Great! You go first!");
    console.log('1|2|3');
    console.log('-----');
    console.log('4|5|6');
    console.log('-----');
    console.log('7|8|9');
  } else {
    console.log('Party pooper!');
  }

  rl.close();
});
