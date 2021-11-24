import React from "react";


type StarPropsType = {
    id: string
    value: boolean
    callback: (id: string) => void
}


export const Star = (props: StarPropsType) => {

    const onClickEventHandler = (event: any) => {
        props.callback(event.target.id)
    }

    const boldStyle = {fontWeight: props.value ? 700 : 300}

    console.log('Star rendered from Star')
    return (
        <>
            <span id={props.id} onClick={onClickEventHandler} style={boldStyle}> STAR </span>
        </>
    )
}