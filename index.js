var readlineSync=require('readline-sync');
let score =0;
var userName=readlineSync.question("what is your Name: ");
console.log(`Welcome ${userName} do you know me \n`);


console.log(`hey ${userName} let's take a one quiz to check how much you know about me\n`)
console.log("there are total 5 questions. each question carry one number\n");

let highscore=["Akhil","Mohit","Aishwarya"];
  
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("your are right");
    score=score+1;
    console.log(`your score is ${score}`);
  }
  else{
    console.log("your are wrong!!");
    console.log(`your score is ${score}`);
  }
}

let questions=[
  {
    question:"Where do Rohit live? ",
    answer:"India",
  },
{
    question:"What is the profession of Rohit? ",
    answer:"Engineer",
  },
  {
    question:"what is the favorite sport game of Rohit? ",
    answer:"Cricket",
  }
,
  {
    question:"what is the favorite country of Rohit? ",
    answer:"India",
  },
  {
    question:"What is the favorite fruit of Rohit? ",
    answer:"Apple",
  }
] 

for(let i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
  console.log("\n");
}
console.log(`your total score is ${score}`);
console.log("__________________________________")
console.log("the highScore rank are \n")
for(i=0;i<highscore.length;i++){
  console.log(highscore[i]);
}
console.log("\n send the screenshot of your score");