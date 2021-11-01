import React, {useState} from "react";
import {AccordionTitle, AccordionTitlePropsType} from './Accordion'
import {AccordionBody} from './Accordion'


export type UncontrolledAccordionPropsType = {
    title: string
}

export const UncontrolledAccordion= (props:UncontrolledAccordionPropsType ) => {

    let [toggle, setToggle] = useState<boolean>(true)

    const changeToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <AccordionTitle title={props.title} callback={changeToggle}/>
            {/*<button onClick={()=> {setToggle(!toggle)}}>Toggle list</button>*/}
            {toggle && <AccordionBody/>}
        </>
    )
}