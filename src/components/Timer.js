import React, {useState, useEffect} from 'react'

import './Timer.css'

const Timer = () => {
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            const date = new Date()
            const hour = date.getHours()
            const minute = date.getMinutes()
            const second = date.getSeconds()
            setHour(hour)
            setMinute(minute)
            setSecond(second)
            setIsLoading(false)
        },1000)
    },[second])

    if(isLoading){
        return(
            <div className="time">
                Loading....
            </div>
        )
    }

    return (
        <div>
            <div className="time">
                {hour<10?`0`+hour:hour}:{minute<10?`0${minute}`:minute}:{second<10?'0'+second:second}
            </div>
        </div>
    )
}

export default Timer
