import React, {useState} from "react";
import {AccordionBody, AccordionTitle} from "./Accordion";


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