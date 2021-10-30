import React, {useState} from "react";
import {Star} from "./Star";


export const UncontrolledRating = () => {

    let [value, setValue] = useState(0)

    let stars = [1, 2, 3, 4, 5];

    const callbackHandler = (id:string) => {
        setValue(parseInt(id))

    }

    return (
        <div>
            {


                stars.map((el,index) => {

                    return (
                        <Star value={value > index} callback={callbackHandler} id={el.toString()} key={el}/>
                    )
                })


            }
        </div>
    )
}
