import React, {useState} from "react";

type PropsType = {
    title: string;
}

type ButtonPropsType = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void
}

function UncontrolledAccordion(props: PropsType) {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} setCollapsed={() => {
                setCollapsed(!collapsed)
            }}/>
            {/*<UncontrolledAccordionButton collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
            {!collapsed && <UncontrolledAccordionBody/>}
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

function UncontrolledAccordionBody() {
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

function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}

export default UncontrolledAccordion;