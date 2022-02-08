import React, {useEffect, useState} from 'react';
import css from './ClockAnalog.module.css'
import clockImg from './clock.png'


export const ClockAnalog = () => {

    const [date, setDate] = useState(new Date())


    const toStyle = (timeValue: number, param: number) => {

        return {
            transform: `rotate(${timeValue * param}deg)`
        }
    }

    const secStyleValue = toStyle(date.getSeconds(), 6)
    const minuteStyleValue = toStyle(date.getMinutes(), 6)
    const hourStyleValue = toStyle(date.getHours(), 15)


    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)


        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="css.clock">


            <div className={css.round_body} style={{backgroundImage: `url(${clockImg})`}}>

                <div className={css.hour_arrow} style={hourStyleValue}></div>
                <div className={css.minute_arrow} style={minuteStyleValue}></div>
                <div className={css.second_arrow} style={secStyleValue}></div>

            </div>


        </div>
    );

};

