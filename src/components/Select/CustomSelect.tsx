import React, {MouseEventHandler, useState} from "react";
import {selectValueType} from "../../App";


export type CustomSelectPropsType = {

    values: Array<selectValueType>
    selectValue: (value: string) => void

}

export const CustomSelect = (props: CustomSelectPropsType) => {


    let [show, setShow] = useState<boolean>(false)

    const clickHandler = (event: MouseEventHandler<HTMLDivElement>) => {
        console.log(event.arguments)

    }

    return (

        <div>

            <select>
                <option value="">Moscow</option>
                <option value="">SPB</option>
                <option value="">Kazan</option>
                <option value="">Ufa</option>
            </select>


            <h3 onClick={() => setShow(!show)}>Choose your city</h3>


            {show &&
            props.values.map(el =>
                <div
                    key={el.id}
                    onClick={()=> console.log('clicked to DIV')}
                >
                    {el.value}
                </div>
            )}


        </div>
    )
}