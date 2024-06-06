import {useState, useEffect} from 'react'


const Timer = () => {

    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
       const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)},1000)
        return () => {
            clearInterval(timer)
            console.log(timer)
        }
    }, [])
    
    return (
        <div>Tempo do Site Online: {seconds}
        </div>
    );
}

export default Timer;