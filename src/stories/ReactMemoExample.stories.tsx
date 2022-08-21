import {ComponentMeta} from "@storybook/react";
import React, {useState} from "react";


export default {
    title: 'React memo example',
}
// as ComponentMeta<typeof Accordion>;



const Users = (props: {users: Array<string>}) => {
    return(
        <div>
            {props.users.map((u,i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const NewMessageCounter = (props: {counter: number}) => {
    return <><span>{props.counter}</span></>
}

export const Example = ( ) => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Ann", "Bob", "Cyber", "Duck"]);


    return(
        <div>
            <button onClick={() => {setCounter(counter+1)}}>+</button>
            <button onClick={() => {setUsers([...users, "Elena"])}}>add user</button>
            <NewMessageCounter counter={counter}/>
            <Users users={users}/>
        </div>
    )
}