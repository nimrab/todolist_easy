import React from "react";
import {Star} from "./Star";


type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}




export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star value={props.value > 0} callback={()=>{}} id="1"/>
            <Star value={props.value > 1} callback={()=>{}} id="1"/>
            <Star value={props.value > 2} callback={()=>{}} id="1"/>
            <Star value={props.value > 3} callback={()=>{}} id="1"/>
            <Star value={props.value > 4} callback={()=>{}} id="1"/>
        </div>
    )
}

