/**
 * questions.map((tempory_var,index)=>(
 *  <Question 
        text={tempory_var.question}
        options={tempory_var.options}
        correct_option_pos = {tempory_var.correctAnswer}
      />
 * ))
 * 
*/

/**
 * tempory_var =  {
    question: "1. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Markup Language"
    ],
    correctAnswer: 0
  },

  tempory_var.question = "1. What does HTML stand for?"
  tempory_var.corectedAnswer = 0
 */


export const questions = [
  {
    question: "1. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Markup Language"
    ],
    correctAnswer: 0
  },
  {
    question: "2. Which HTML tag is used to link an external JavaScript file?",
    options: ["<script>", "<javascript>", "<link>", "<js>"],
    correctAnswer: 0
  },
  {
    question: "3. How do you add a comment in CSS?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "' This is a comment",
      "// This is a comment //"
    ],
    correctAnswer: 1
  },
  {
    question: "4. How do you define a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function myFunction()",
      "def myFunction()",
      "void function myFunction()"
    ],
    correctAnswer: 1
  },
  {
    question: "5. Which CSS property is used to change the text color of an element?",
    options: ["color", "text-color", "font-color", "text-style"],
    correctAnswer: 0
  },
  {
    question: "6. What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<javascript src='script.js'>",
      "<link src='script.js'>"
    ],
    correctAnswer: 0
  },
  {
    question: "7. Inside which HTML element do we put the JavaScript?",
    options: ["<script>", "<javascript>", "<js>", "<scripting>"],
    correctAnswer: 0
  },
  {
    question: "8. Which event is triggered when a user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onmouseclick"],
    correctAnswer: 2
  },
  {
    question: "9. What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets"
    ],
    correctAnswer: 3
  },
  {
    question: "10. How do you select an element with id 'myElement' in CSS?",
    options: [
      "#myElement",
      ".myElement",
      "element.myElement",
      "element#myElement"
    ],
    correctAnswer: 0
  },
  {
    question: "11. Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: 0
  },
  {
    question: "12. What is the correct way to comment out multiple lines in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "''' This is a comment '''",
      "<!-- This is a comment -->"
    ],
    correctAnswer: 1
  },
  {
    question: "13. What is the correct way to call a function named 'myFunction' in JavaScript?",
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
      "function call myFunction()"
    ],
    correctAnswer: 1
  },
  {
    question: "14. Which property is used to change the font of an element in CSS?",
    options: ["font-family", "text-family", "font-style", "text-style"],
    correctAnswer: 0
  },
  {
    question: "15. How can you add a comment in HTML?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "comment This is a comment"
    ],
    correctAnswer: 0
  },
  {
    question: "16. How do you round the number 7.25 to the nearest integer in JavaScript?",
    options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"],
    correctAnswer: 0
  },
  {
    question: "17. Which CSS property is used to add shadows to an element?",
    options: ["box-shadow", "shadow", "element-shadow", "shadow-effect"],
    correctAnswer: 0
  },
  {
    question: "18. What is the correct way to write a JavaScript array?",
    options: [
      'var colors = "red", "green", "blue"',
      'var colors = ["red", "green", "blue"]',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
      'var colors = (1:"red", 2:"green", 3:"blue")'
    ],
    correctAnswer: 1
  },
  {
    question: "19. Which HTML attribute is used to define inline styles?",
    options: ["styles", "style", "font", "class"],
    correctAnswer: 1
  },
  {
    question: "20. How do you create a function in JavaScript with no parameters?",
    options: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction()",
      "function => myFunction()"
    ],
    correctAnswer: 0
  }
];
