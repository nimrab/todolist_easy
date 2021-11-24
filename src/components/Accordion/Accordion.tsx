import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


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




