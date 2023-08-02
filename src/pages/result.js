import { Progress } from "antd";
import"../styles/result.css"

import {useState} from "react"
function ResultPage(props) {
const [score, SetScore] = useState(100)


    return (
     <div id="result-page-container">
      <h1>Your Result</h1>

      <Progress type="circle" strokeColor={score>50?"green":"red"} percent={100} />
      {score <= 50 ? 
       <h3>You Performed Poorly</h3>
      : 
       <h3>You Passed the Test</h3>
      }
     </div>
    );
}
export default ResultPage;