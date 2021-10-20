import React, {useState} from "react";
import css from './OnOff.module.css';

// export type OnOffPropsType = {
//     switch: boolean
// }

export const OnOff = () => {



    let [switchButton, setSwitch] = useState(true);

    const onStyle = {backgroundColor: switchButton ? "green" : "white"}
    const offStyle = {backgroundColor: switchButton ? "white" : "red"}
    const diodStyle = {backgroundColor: switchButton ? "green" : "red"}


    return (
        <div className={css.button}>
            <div className={css.block} style={onStyle} onClick={() => {setSwitch(true)}}>ON</div>
            <div className={css.block} style={offStyle} onClick={() => {setSwitch(false)}}>OFF</div>
            <div className={css.diod} style={diodStyle}></div>
        </div>

    )

}