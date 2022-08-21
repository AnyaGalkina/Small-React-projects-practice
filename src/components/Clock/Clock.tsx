import React, {useState, useEffect} from "react";
import {AnalogClockView} from "./AnalogClockView/AnalogClockView";

type PropsType = {
    mode: "digital" | "analog"
}

const get2DigitsString = (num: number): string => {
    return num < 10 ? "0" + num : num + ""
}

export const Clock: React.FC<PropsType> = ({mode}) => {
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("tick")
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }

    }, []);



    let view;

    switch(mode) {
        case "analog":
            view  = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>;
    }

    return view;

//     return (
//         <div>
//             {mode === "digital"
//                 ? <DigitalClockView date={date}/>
//                 :  <AnalogClockView/>
//             }
//         </div>
//     );


};


export type ClockViewPropsType = {
    date: Date
}

const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <div>
            <span>{get2DigitsString(date.getHours())}</span>
            :
            <span>{get2DigitsString(date.getMinutes())}</span>
            :
            <span>{get2DigitsString(date.getSeconds())}</span>
        </div>
    )
}

