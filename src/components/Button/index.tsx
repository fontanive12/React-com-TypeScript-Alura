import React from "react";
import style from './style.module.scss';

class Button extends React.Component<{ textButton: string }> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.textButton}
            </button>
        )
    }
}

export default Button;