import React, {MouseEventHandler, useState} from "react";
import {selectValueType} from "../../App";
import css from './CustomSelect.module.css'


export type CustomSelectPropsType = {

    values: Array<selectValueType>
    selectValue: (value: string) => void
    chosenValue:string

}

export const CustomSelect = (props: CustomSelectPropsType) => {


    let [show, setShow] = useState<boolean>(false)

    const clickHandler = (value:string) => {
        props.selectValue(value)
        setShow(false)
    }

    return (

        <div>

            <select>
                <option value="">Moscow</option>
                <option value="">SPB</option>
                <option value="">Kazan</option>
                <option value="">Ufa</option>
            </select>


            <h3 onClick={() => setShow(!show)} className={css.main_item}>{props.chosenValue}</h3>


            {show &&
            <div>

                {props.values.map(el =>
                    <div
                        key={el.id}
                        onClick={() => clickHandler(el.value)}
                        className={css.item}
                >
                        {el.value}
                    </div>
                )}


            </div>

            }



        </div>
    )

}