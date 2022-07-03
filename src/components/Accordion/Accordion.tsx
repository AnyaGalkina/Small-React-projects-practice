import React from "react";

type ItemType = {
    id: any
    title: string;
    value: any;
}

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    items: ItemType[];
    /**
     * Function that controlled collapsed mode of accordion
     * @param collapsed collapsed mode of accordion
     */
    onClickCallback: (collapsed: boolean) => void
}

function SecretAccordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title} onClickCallback={props.onClickCallback} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>)
}


type AccordionBodyPropsType = {
    items: ItemType[];
}

function SecretAccordionBody(props: AccordionBodyPropsType   ) {
    return(
    <ul>
        {props.items.map( (el, index) => <li key={index} onClick={() => {alert(el.value+"was clicked")}}>{el.title}</li>)}
    </ul>)
}

const AccordionBody = React.memo(SecretAccordionBody);


type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean;
    onClickCallback: (collapsed: boolean) => void
}

function SecretAccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClickCallback(!props.collapsed)}>{props.title}</h3>
    )
}

const AccordionTitle = React.memo(SecretAccordionTitle);

const Accordion = React.memo(SecretAccordion);

export default Accordion;