import React from "react";
import Button from "../Button";
import style from './style.module.scss';

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        {/* para focar */}
                        Add a new study
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        placeholder="What want you studying?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label >
                    <input
                        type="time"
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button 
                textButton="Add"/>
            </form>
        )
    }
}

export default Form;