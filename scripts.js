class Answer {
  constructor(button_text="DEFAULT", next_loc=0){
    this.btn_text = button_text; //Text to be displaed on the button
    this.loc = next_loc; //Locations to be linked to.
  }
}

class Question {
  constructor(prompt_text, last_one=true, picQ_file = "pictures/default.jpg",
              ans_arr=[]){
    this.prompt = prompt_text; //Text for the prompt
    this.picQ = picQ_file;  //Picture file name for the prompt
    this.end = last_one;  //Indicates if it is the last page on its branch
    this.answers = ans_arr; //Array of all the answer buttons
  }
}

///////////////////////////
//   List of Questions   //
///////////////////////////

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
answers.push(new Answer(button_text="Yes", next_loc=2),
             new Answer(button_text="No", next_loc=10),
             new Answer(button_text="I don't know", next_loc=26));
questions[1].answers = answers;

//Question 2
questions.push(new Question(
  prompt_text= "What will happen to you when you die?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(
  new Answer(button_text="I hope that I have been a good"
                        + " enough person to get into heaven", next_loc=6),
  new Answer(button_text="Nothing. I just cease to exist \-- as if I'd "
                        + "never been.", next_loc=3),
  new Answer(button_text= "I will go to heaven because I have confessed my sins"
                        + " and have accepted Jesus Christ as my Savior.",
                        next_loc=8),
  new Answer(button_text= "I will go to a place of waiting (Purgatory, "
                        + "Paradise) and hope that someday I might go to heaven"
                        , next_loc=4),
  new Answer(button_text= "I will be like God and enter the celestial Kingdom "
                        + "because I\'m a member of the right church, I "
                        + "repented and was baptized in the right church. Also,"
                        + " I must abstain from alcohol, tobacco and caffeine; "
                        + "tithe to the church; attend weekly sacrament "
                        + "meetings; support the Prophet; do temple works; and "
                        + "be active in support of the church.", next_loc=5),
  new Answer(button_text= "My spirit will move on to another body. If I have "
                        + "lived well, I will proceed to a better life.  If I "
                        + "have not, I will revert to a worse life",next_loc=9),
  new Answer(button_text="I don\'t know", next_loc=27));
questions[2].answers = answers;

//Question 3
questions.push(new Question(
  prompt_text= "Interesting view. If you were not correct, would you like to "
             + "know it?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=11),
             new Answer(button_text="No", next_loc=13));
questions[3].answers = answers;

//Question 4
questions.push(new Question(
  prompt_text= "While yours is a widely held belief, would you like to know "
             + "what the Bible says about what happens after death?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=11),
             new Answer(button_text="No", next_loc=13));
questions[4].answers = answers;

//Question 5
questions.push(new Question(
  prompt_text= "Many people believe as you do. If the original, unaltered Bible"
             + " said something different, would you like to know it?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=12),
             new Answer(button_text="No", next_loc=13));
questions[5].answers = answers;

//Question 6
questions.push(new Question(
  prompt_text= "Congratulations! You hold one of the most popular views of how "
             + "to achieve heaven. If the Bible, God's Word, showed a different"
             + " view would you want to know it?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=11),
             new Answer(button_text="No", next_loc=13));
questions[6].answers = answers;

//Question 7
questions.push(new Question(
  prompt_text= "I'm so glad you're still reading! Here it is: Salvation, "
             + " according to the Bible, is due to God's grace and love. He "
             + "provided Jesus as the sacrifice for the sins of the world. It"
             + " is through faith in the crucified and risen Jesus that we may"
             + " be saved. Works are excluded. You can't do enough or be good "
             + "enough! (John 1:12; 3:16; Rom. 10:9-13; Eph. 2:8-9).",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="If you're still interested in reading "
                                   + "more, click here", next_loc=14));
questions[7].answers = answers;

//Question 8
questions.push(new Question(
  prompt_text= "Yup! You have it (not that you earned it in any way). It's "
             + "only Jesus and what He did, and continues to do, in our lives"
             + " that matters. Our only part in the process is to agree with"
             + " what God says about us in His Word (we're sinners) and to "
             + " receive His gift of salvation. ",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="If you've already done that, click here.",
             next_loc=23));
questions[8].answers = answers;

//Question 9
questions.push(new Question(
  prompt_text= "While yours is a widely held belief, would you like to know "
             + "what the Bible says about what happens after death?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=11),
             new Answer(button_text="No", next_loc=13));
questions[9].answers = answers;

//Question 10
questions.push(new Question(
  prompt_text= "What will happen to you when you die?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(
  new Answer(button_text="I hope that I have been a good"
                        + " enough person to get into heaven", next_loc=6),
  new Answer(button_text="Nothing. I just cease to exist \-- as if I'd "
                        + "never been.", next_loc=3),
  new Answer(button_text= "I will go to a place of waiting (Purgatory, "
                        + "Paradise) and hope that someday I might go to heaven"
                        , next_loc=4),
  new Answer(button_text= "I will be like God and enter the celestial Kingdom "
                        + "because I\'m a member of the right church, I "
                        + "repented and was baptized in the right church. Also,"
                        + " I must abstain from alcohol, tobacco and caffeine; "
                        + "tithe to the church; attend weekly sacrament "
                        + "meetings; support the Prophet; do temple works; and "
                        + "be active in support of the church.", next_loc=5),
  new Answer(button_text= "My spirit will move on to another body. If I have "
                        + "lived well, I will proceed to a better life.  If I "
                        + "have not, I will revert to a worse life",next_loc=9),
  new Answer(button_text="I will go to Hell", next_loc=25));
questions[10].answers = answers;

//Question 11
questions.push(new Question(
  prompt_text= "Here it is . . . the Bible, in Hebrews 9:27, says “And just as "
  + " it is destined that each person dies only once and after that comes "
  + "judgment . . .” Yeah, okay. But, on what basis is that judgement to be "
  + " made? Where do I start to find out—to know that I'm going to heaven "
  + "when I die? ",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Click here for more", next_loc=7));
questions[11].answers = answers;

//Question 12
questions.push(new Question(
  prompt_text= "Here it is . . . the Bible, in Hebrews 9:27 KING JAMES VERSION,"
             + " says “And as it is appointed unto men once to die, but after"
             + " this the judgment . . .” On what basis is that judgement to be"
             + " made? Where do I start to find out—to know that I'm going to"
             + " heaven when I die? Wait . . . you need to know that all "
             + " scripture quoted after this is from the New Living "
             + "Translation. While all translations are somewhat subject to the"
             + "views of the translators (including the KJV and the Joseph"
             + " Smith edited version of the KJV), modern translators seek to"
             + " discover the oldest, most reliable manuscripts available "
             + "today. Many of these had not been discovered in 1611 A.D. when"
             + " the KJV was translated. Interestingly, no important errors"
             + " (other than an uncrossed “t” or missing period) have been "
             + " discovered.",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Click here for more", next_loc=7));
questions[12].answers = answers;

//Question 13
questions.push(new Question(
  prompt_text= "Well, if you decide you are interested in finding out more, I'd"
             + " be glad to chat with you about it. Check out our dialogue"
             + " times.",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Dialogue Times", next_loc=0));
questions[13].answers = answers;

//Question 14
questions.push(new Question(
  prompt_text= "Let's start at a good beginning point . . . God loves us and "
             + " has a purpose for our lives. The Bible says it this way, "
             + "(John 3:16) “For God so loved the world that he gave his only "
             + "Son, so that everyone who believes in him will not perish but "
             + "have eternal life.” God's purpose is that we have eternal life."
             + " Read more about God's purpose.",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="God/'s Purpose'", next_loc=15));
questions[14].answers = answers;

//Question 15 -- GOD'S PURPOSE
questions.push(new Question(
  prompt_text= "",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="What's the Bible say", next_loc=0));
questions[15].answers = answers;

//Question 16  --  Our Rebellion and Need for Help
questions.push(new Question(
  prompt_text= "",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="So, what's God's plan?", next_loc=0));
questions[16].answers = answers;

//Question 17  -- God's Plan
questions.push(new Question(
  prompt_text= "",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="What's our part?", next_loc=0));
questions[17].answers = answers;

//Question 18 -- Our response
questions.push(new Question(
  prompt_text= "",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=19),
             new Answer(button_text="No", next_loc=24));
questions[18].answers = answers;

//Question 19
questions.push(new Question(
  prompt_text= "Would you be willing to receive God's gift of eternal life?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=20),
             new Answer(button_text="No", next_loc=24));
questions[19].answers = answers;

//Question 20
questions.push(new Question(
  prompt_text= "Are you willing to turn from your sin and place your faith in"
             + " Jesus right now?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=21),
             new Answer(button_text="No", next_loc=24));
questions[20].answers = answers;

//Question 21
questions.push(new Question(
  prompt_text= "Just to clarify—To receive Jesus you must:\n",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=22),
             new Answer(button_text="No", next_loc=24));
questions[21].answers = answers;

//Question 22
questions.push(new Question(
  prompt_text= "Welcome to the family of God. You have just made the most "
             + "important decision of your life.  You can be sure you are saved"
             + "and have eternal life. Read Romans 10:13 again: “For ‘Anyone "
             + "who calls on the name of the Lord will be saved.'” It isn't "
             + "someone's opinion.  You have God's Word on it!",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="One more thing...", next_loc=23));
questions[22].answers = answers;

//Question 23
questions.push(new Question(
  prompt_text= "Receiving Jesus into your life is only the beginning of a "
             + "wonderful experience. Now that Christ is your Lord, you'll want"
             + " to know how you can grow as a Christian. I/'d love for you to "
             + "join me at the Baptist Student Union or a local church. Also, "
             + "it/'d be great if you connected with a growing Christian who "
             + "can help you grow, too. I/'d be glad to help in that process if "
             + "you'd give me some contact information. If you're under 18, "
             + "please make sure it/'s okay with mom or dad before you do",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="", next_loc=0),
             new Answer(button_text="", next_loc=0));
questions[23].answers = answers;

//Question 24
questions.push(new Question(
  prompt_text= "I understand. It's a huge decision. You might want to go back "
             + "to our opening page and review. Or, if you decide you are "
             + "interested in finding out more, I'd be glad to chat with you "
             + "about it. Check out our dialogue times.",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Opening Page", next_loc=0),
             new Answer(button_text="Dialogue Times", next_loc=0));
questions[24].answers = answers;

//Question 25
questions.push(new Question(
  prompt_text= "Hey, you may not believe it but, you're a bunch closer to "
             + "salvation than you may realize.  You are aware that you don't "
             + "deserve to go to heaven. That's the first step in the whole "
             + "process. If God had a purpose and plan for your life, wouldn/'t "
             + "you want to know it?",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Yes", next_loc=14),
             new Answer(button_text="No", next_loc=13));
questions[25].answers = answers;

//Question 26
questions.push(new Question(
  prompt_text= "Now, that's a good, honest answer. If you/'re still interested,"
             + " let me ask you another question.",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Next", next_loc=10));
questions[26].answers = answers;

//Question 27
questions.push(new Question(
  prompt_text= "Now, that's a good, honest answer. You really can know.",
  last_one=false,
  picQ_file = ""
));
answers = [];
answers.push(new Answer(button_text="Click On!", next_loc=14),
             new Answer(button_text="", next_loc=0));
questions[27].answers = answers;

//////////////////////////
//   End of Questions   //
//////////////////////////

start();
function start() {
  selectQuestion(0);
  return;
}

function question_exists(index) {
  if (index > questions.length - 1)
    return false;
  return true;
}

function selectQuestion(index) {
  //   Variable setup
  btn_options = document.getElementById('option-buttons');//div holding buttons
  prompt = document.getElementById("prompt");//div holding the question
  img = document.getElementById("cur_img");//image displayed on the page

  //Checks if the question exists, if it doesn't then go to the start page.
  if(!question_exists(index))
    index = 0;

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

    //Adds the functionality to go to another question.
    button.addEventListener('click', () => selectQuestion(i.loc))

    btn_options.appendChild(button); //Add the button the the button list
  });

  return;
}
