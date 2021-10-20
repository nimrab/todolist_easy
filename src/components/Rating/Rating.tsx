import React from "react";


type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}


export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star value={props.value > 0}/>
            <Star value={props.value > 1}/>
            <Star value={props.value > 2}/>
            <Star value={props.value > 3}/>
            <Star value={props.value > 4}/>
        </div>
    )
}


type StarPropsType = {
    value: boolean
}

export function Star(props: StarPropsType) {

    if (props.value) {
        return (
            <>
                <span> <b>STAR</b> </span>
                {/*props.value && <span> <b>STAR</b> </span>*/} {/*хорошо рисует жирную звезду, но не ресуютпустую при false*/}
            </>
        )
    } else {
        return (
            <>
                <span> STAR </span>
            </>
        )

    }

    //выше рефакторим код
    // switch (props.value) {
    //   case 1:
    //     return (
    //         <>
    //           <span><b>STAR </b></span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //         </>
    //     )
    //   case 2:
    //     return (
    //         <>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //         </>
    //     )
    //   case 3:
    //     return (
    //         <>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //         </>
    //     )
    //   case 4:
    //     return (
    //         <>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span>STAR </span>
    //         </>
    //     )
    //   case 5:
    //     return (
    //         <>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //           <span><b>STAR </b></span>
    //         </>
    //     )
    //   default:
    //     return (
    //         <>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //           <span>STAR </span>
    //         </>
    //     )
    // }

}