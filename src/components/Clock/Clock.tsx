import React, {useEffect, useState} from 'react';



export const Clock = () => {

    const [counter, setCounter] = useState<string>('0')



    useEffect(() => {

        setInterval(() => {

            const date = new Date()
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()

            setCounter(() => `${hours}:${minutes}:${seconds}`)
            //setCounter(counter)
            console.log(counter + 'rendered')
        }, 1000)




    },[])

    return (
        <div className="clock">


            <div>

                <h3>TIME IS:</h3>
                <h2>{counter}</h2>

            </div>



        </div>
    );

};

