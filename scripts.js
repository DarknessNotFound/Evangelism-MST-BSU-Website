class Answer {
  constructor(button_text="DEFAULT",next_loc=0){
    this.btn_text = button_text;
    this.loc = next_loc;
  }
}

class Question {
  constructor(prompt_text, last_one=true, picQ_file = "default.jpg", ans_arr=[]){
    this.prompt = prompt_text; //Text for the prompt
    this.picQ = picQ_file;  //Picture file name for the prompt
    this.end = last_one;
    this.answers = ans_arr;
  }
}

/*
----------------- Template Question   ----------------------------

//Question X
questions.push(new Question(
  prompt_text= "",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="", next_loc=0),
             new Answer(button_text="", next_loc=0));
questions[X].answers = answers;

*/

//Import questions.js
var questions = [];
var answers = [];

//Question 0 (start page)
questions.push(new Question(
  prompt_text= "Welcome Page",
  last_one=false,
));
answers = [];
answers.push(new Answer(button_text="Start", next_loc=1));
questions[0].answers = answers;

//Question 1
questions.push(new Question(
  prompt_text= "Have you ever made a commitment to Jesus Christ that is still "
             + " important in your life today?  ",
  last_one=false
));
answers = [];
answers.push(new Answer(button_text="Start", next_loc=0),
             new Answer(button_text="Start", next_loc=0),
             new Answer(button_text="Start", next_loc=0));
questions[1].answers = answers;

start();

function start() {
  selectQuestion(0);
  return;
}

function selectQuestion(index) {
  //   Variable setup
  btn_options = document.getElementById('option-buttons');//div holding buttons
  prompt = document.getElementById("prompt");//div holding the question
  img = document.getElementById("cur_img");//image displayed on the page

  prompt.innerHTML = questions[index].prompt; //Change the question
  img.src = questions[index].picQ;  //Change the image
  while(btn_options.firstChild) { //Remove all the previous buttons
    btn_options.removeChild(btn_options.firstChild);
  }

  //Re-add all the buttons with the answers on them
  questions[index].answers.forEach(i => { //loop through each answer
    const button = document.createElement('button'); //Create a new button
    button.innerHTML = i.btn_text;  //Change the button text
    button.classList.add('btn');  //Style the button
    button.addEventListener('click', () => selectQuestion(i.loc))//Add function
    btn_options.appendChild(button); //Add the button the the button list
  });

  return;
}
