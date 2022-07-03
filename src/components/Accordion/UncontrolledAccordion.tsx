import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducerUncontrolledAccordion";


type PropsType = {
    title: string;
}

type ButtonPropsType = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void
}

function SecretUncontrolledAccordion(props: PropsType) {

    // const [collapsed, setCollapsed] = useState(false);
    const [state, dispatch] = useReducer(reducer, {collapsed: false});
    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} setCollapsed={() => {
                // setCollapsed(!collapsed)
                dispatch({type:TOGGLE_COLLAPSED})
            }}/>
            {/*<UncontrolledAccordionButton collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {!state.collapsed && <UncontrolledAccordionBody/>}
        </div>)
}

// function UncontrolledAccordionButton(props: ButtonPropsType) {
//
//     return (
//         <button
//             onClick={() => {props.setCollapsed(!props.collapsed)}}
//         >{props.collapsed ? "+" : "-"}</button>
//     )
// }

function SecretUncontrolledAccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

type AccordionTitlePropsType = {
    title: string;
    setCollapsed: () => void;
}

function SecretUncontrolledAccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

const UncontrolledAccordionBody = React.memo(SecretUncontrolledAccordionBody)
const UncontrolledAccordionTitle = React.memo(SecretUncontrolledAccordionTitle)
const UncontrolledAccordion = React.memo(SecretUncontrolledAccordion);
export default UncontrolledAccordion;