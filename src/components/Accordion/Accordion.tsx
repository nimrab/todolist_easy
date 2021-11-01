import React, {useState} from "react";


type AccordionPropsType = {
    title: string,
    collapsed: boolean

}

export const Accordion = (props: AccordionPropsType) => {

    return (
        <>
            <AccordionTitle title={props.title} callback={() => {}}/>

            {props.collapsed && <AccordionBody/>}

            {/*{!props.collapsed && <AccordionBody/>} это если boolean приходит из родителя*/}
            {/*если collapsed false, то смотрм <Ac.Bo.>. Он True. Значение не переключаем, возвращаем false. {false} не отрисуется*/}
            {/*если collapsed true, то смотрм <Ac.Bo.>. Он True. Вернем значение, на котором остановились, те <Ac.Bo.>. Он отобразится */}

        </>
    )
}

// решение ниже можно оптимизировать с помощью логического условия
//     if (props.collapsed) {
//             return (
//         AccordionTitle title={props.title}/>
//         )
//
//
//
//     }
// // } else {
// //     return (
// //         <>
// //             <AccordionTitle title={props.title}/>
// //             <AccordionBody/>
// //         </>
// //     )
// // }


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


export function AccordionBody() {
    return (
        <ul>
            <li className={'list1'}>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;