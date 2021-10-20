import React from "react";
import css from './OnOff.module.css';

export type OnOffPropsType = {
    switch: boolean
}

export const OnOff: React.FC<OnOffPropsType> = (props) => {

    if (props.switch) {
        return (
            <div className={css.button}>
                <div className={css.green}>ON</div>
                <div className={css.empty}>OFF</div>
                <div className={css.diod_green}></div>
            </div>

        )

    } else {
        return (
            <div className={css.button}>
                <div className={css.empty}>ON</div>
                <div className={css.red}>OFF</div>
                <div className={css.diod_red}></div>
            </div>
        )
    }
}