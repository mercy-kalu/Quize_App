import Question from '../components/qestion.js';
import { Button } from 'antd'
import { questions } from '../data/questions'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/layout.js';


function FirstPage(props) {
    const [marks, setMarks] = useState(0)

    function incrementMark() {
        const current_mark = marks + 1
        setMarks(current_mark)
        console.log("current mark is : ", current_mark);
    }
    function getMarks() {
        const mark_per_question = 100 / questions.length;
        
        const overall_mark = marks * mark_per_question
        //return user mark
        console.log("Overall Mark is ", overall_mark, "%")
     }


    return (
        <AppLayout>
    
      {questions.map((current, index) => (
       <Question
        incrementMark={incrementMark}
        text={current.question}
        options={current.options}
        correct_option_pos={current.correctAnswer}
        key={"question_" + index}
       />
      ))}
      <div id="btn-container">
       <Button type="primary " size={"large"} onClick={getMarks}>
        Submit Quiz
       </Button>
       <br />
       <Button type="secondary " size={"large"} onClick={getMarks}>
        <Link to={"about-us"}>About Us</Link>
       </Button>{" "}
       <br />
       <Link to={"result"}>Go to Result Page</Link>
      </div>
   </AppLayout>
    );
}
export default FirstPage
