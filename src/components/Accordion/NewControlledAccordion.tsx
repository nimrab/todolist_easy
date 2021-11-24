import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";



export type NewControlledAccordionProps = {
    title: string
    collapsed: boolean
    callback: () => void
}

export const NewControlledAccordion = (props: NewControlledAccordionProps) => {


    return (
        <>
            <AccordionTitle title={props.title} callback={props.callback}/>
            {props.collapsed && <AccordionBody/>}
        </>
    )

}