import React from "react";

export type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    const callbackHandler = () => {
        props.callback()
    }

    return (
        <h3 onClick={callbackHandler}>{props.title}</h3>
    )
}

