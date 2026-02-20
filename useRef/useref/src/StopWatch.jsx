import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {

    const [time, setTime] = useState(0);
    const timerRef = useRef(null);


    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTime(prev => prev + 10);
        },10)

    }

    const stopTimer = () => {
        clearInterval(timerRef.current)

    }

    const resetTimer = () => {
        clearInterval(timerRef.current)
        setTime(0)
    }


    const formatTime = (time) => {

        //  With Milliseconds

        const MilliSeconds = Math.floor(time % 1000 )

        const milliSeconds = `000${MilliSeconds}`.slice(-3);

        const seconds = `0000${Math.floor((time % 60000) / 1000)}`.slice(-2)


        const minutes = `000000${Math.floor((time % 3600000) / 60000)}`.slice(-2)

        const hours = `000000${Math.floor(time / 3600000)}`.slice(-2)


        return `${hours} : ${minutes} : ${seconds} : ${milliSeconds}`


//  With out milliseconds


        // const seconds = `0${time % 60}`.slice(-2);

        // const Minutes = Math.floor(time /);

        // const minutes = `0${Minutes % 5}`.slice(-2);

        // const hours = `0${Math.floor(time / 25)}`.slice(-2);

        // return `${hours} : ${minutes} : ${seconds} 
    }



    return (
        <>
            <h1>{formatTime(time)}</h1>
            <button onClick={startTimer}> Start </button>
            <button onClick={stopTimer}> Stop </button>
            <button onClick={resetTimer}> Reset </button>
        </>
    )
}


export default StopWatch;