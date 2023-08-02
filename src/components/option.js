import "../styles/option.css";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons"
import { useState } from "react";


function Option(props) {

    const [answered, setAnswered] = useState(false)
    const [result, setResult] = useState("fail");

    // const is_selected = props.id === props.selected? "checked" : null

    let is_selected = false

    if (props.selected === props.id) {
        is_selected = true
    }

    function optionClicked() {
        props.setSelected(props.id)
        const option_result = props.checkAnswer(props.id)
        // setAnswered(true)

        if (option_result === true) {
            setResult("pass")
        }
        setAnswered(true)
        props.updateDisable(true)

    }

    function choose_option() {
        if (answered === false) {
            return <input type="checkbox" checked={is_selected} onClick={optionClicked} disabled={props.disabled} />
        } else {
            if (result === "pass") {
                return <CheckOutlined style={{ marginRight:"25px", fontSize: '25px', fontWeight: 'bold', color: 'green' }} />
            } else {
                return <CloseOutlined style={{ marginRight:"25px", fontSize: '25px', fontWeight: 'bold', color: 'red' }} />
            }
        }
    }

    return (
        <div className="option-container">
            {choose_option()}
            <div className="option-text">{props.text}</div>
        </div>
    )
}


//checkbox
//bad icon
//good icon


export default Option