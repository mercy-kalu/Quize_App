import Option from "./option";
import "../styles/question.css";
import {useState} from "react";

//props.text is a string
//props.options is an array
//<Question text={"..."} options=[option1,option2,option3]/>
//option = ["sam","kunle","efe"]

function Question(props) {
    const [selected, setSelected] = useState(null);
    const [disabled, setDisabled] = useState(false);


 const new_function = () => {
  console.log("Testing from question.js");
 };

    const checkAnswer = id => {
     const result = props.correct_option_pos===id
    
        if (result) {
            props.incrementMark()
        }
      return result
 };

 return (
  <div className="question-container">
   <div className="question-text">{props.text}</div>
   <div className="question-options">
    {props.options.map((option, index) => (
     <Option
      incrementMark={props.incrementMark}
      new_function={new_function}
      //   answered={true}
      text={option}
      key={index}
      id={index}
      selected={selected}
      setSelected={setSelected}
      checkAnswer={checkAnswer}
      disabled={disabled}
      updateDisable={setDisabled}
     />
    ))}
   </div>
  </div>
 );
}

export default Question;
