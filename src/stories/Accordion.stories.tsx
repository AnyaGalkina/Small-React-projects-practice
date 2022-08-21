import Input from "../components/Input/Input";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {ChangeEvent} from "react";
import Accordion from "../components/Accordion/Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
    // parameters: {
    //     layout: 'fullscreen',
    // },
}as ComponentMeta<typeof Accordion>;

//@ts-ignore
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion  {...args}  />;

export const InputWithValue = Template.bind({});


InputWithValue.args = {
    title:"Menu 1",
    collapsed: false,
    items: [
        {id: 1, title: "1", value: 1},
        {id: 2, title: "2", value: 2},
        {id: 3, title: "3", value: 3},
        {id: 4, title: "4", value: 4},
    ]
    // value: "test",
    //@ts-ignore
    // onChange: (e: ChangeEvent<HTMLInputElement>) => { }
};
