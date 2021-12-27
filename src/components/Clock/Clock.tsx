import React, {useEffect, useState} from 'react';


const addZero = (num: number) => num < 10 ? '0' + num : num


export const Clock = () => {

    const [date, setDate] = useState(new Date())



    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

            //если мы удалим компоненту --> setInterval продолжит работать --> утечка памяти
            //убиваем setInterval перед удалением компоненты (переход на другую страницу)

            return () => {
            clearInterval(intervalId)
            }
    },[])

    return (
        <div className="clock">


            <div>

                <h3>TIME IS:</h3>
                <h2>{addZero(date.getHours())}:{addZero(date.getMinutes())}:{addZero(date.getSeconds())}</h2>

            </div>



        </div>
    );

};

