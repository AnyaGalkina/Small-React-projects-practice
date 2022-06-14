import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClickCallback: (collapsed: boolean) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onClickCallback={props.onClickCallback} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>)
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    onClickCallback: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClickCallback(!props.collapsed)}>{props.title}</h3>
    )
}

export default Accordion;