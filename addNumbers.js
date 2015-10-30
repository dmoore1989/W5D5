var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("Enter number", function(numString){
      var int = parseInt(numString);
      sum += int;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }

};


addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
