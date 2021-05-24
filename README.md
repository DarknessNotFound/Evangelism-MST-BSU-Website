# Evangelism-MST-BSU-Website
This is a remake of Bruce's Evangelism Matrix website.

This website's main goal is to be a 'choose-your-own-adventure' style quiz to
share the gospel. 

Current Authors:
	-- Grant Albright aka 'DarknessNeverFound'

---- How to write questions ----

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

---- To-Do List ----
1. Decide on an overall website layout.
2. Code the overall website layout.
3. Add the questionaire to its own page.
4. Test each questionaire button
	-- Best to 