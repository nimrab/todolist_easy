import React, {useState} from "react";
import {AccordionTitle, AccordionTitlePropsType} from './Accordion'
import {AccordionBody} from './Accordion'


export const UncontrolledAccordion:React.FC<AccordionTitlePropsType> = (props) => {

    let [toggle, setToggle] = useState(true)

    return (
        <>
            <AccordionTitle title={props.title}/>
            <button onClick={()=> {setToggle(!toggle)}}>Toggle list</button>
            {toggle && <AccordionBody/>}
        </>
    )
}