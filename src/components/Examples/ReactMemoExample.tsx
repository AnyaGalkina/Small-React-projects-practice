import React, {useState} from "react";


const SecretUsers = (props: {users: Array<string>}) => {
    console.log("Users rerender")
    return(
        <div>
            {props.users.map((u,i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(SecretUsers);

const SecretNewMessageCounter = (props: {counter: number}) => {
    console.log("Counter rerender")
    return <><span>{props.counter}</span></>
}

const NewMessageCounter = React.memo(SecretNewMessageCounter);


const SecretExample = ( ) => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Ann", "Bob", "Cyber", "Duck"]);

    console.log("Example rerender")

    return(
        <div>
            <button onClick={() => {setCounter(counter+1)}}>+</button>
            <button onClick={() => {setUsers([...users, "Elena"])}}>add user</button>
            <NewMessageCounter counter={counter}/>
            <Users users={users}/>
        </div>
    )
}

export const Example = React.memo(SecretExample);
