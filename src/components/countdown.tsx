import { useEffect, useState } from "react";

interface CountDownProps {
    start: number
    onFinish?: () => void

}
export function CountDown({ start, onFinish }: CountDownProps) {
    const [seconds, setSeconds] = useState(start);

    useEffect(() => {
        if (seconds === 0) return;

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            onFinish && onFinish();
        }
    }, [onFinish, seconds]);

    return (
        <span >{seconds}</span>
    )
}