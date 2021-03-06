import React from "react";
import s from './../Dialogs.module.css';




const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <div className={s.Textarea}>
                            </div>
        </div>
    )

}


export default Message;