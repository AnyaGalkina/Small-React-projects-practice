import React, {useMemo, useState} from "react";


//complicated calculations
const getData = () => {
    console.log(" getData ")
    return 1;

}

const ExampleUseState: React.FC = () => {
    //it works, but there is the way better
    // const initState = useMemo(getData, []);
    // const [counter, setCounter] = useState(initState);

    const [counter, setCounter] = useState(getData);


    return(
        <div>
            {counter}
            <button onClick={() => {setCounter(counter+1)}}>+</button>
        </div>
    )
}
export default ExampleUseState;