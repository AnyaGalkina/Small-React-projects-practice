import Input from "./Input";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {ChangeEvent} from "react";

export default {
    title: 'Input',
    component: Input,
    // parameters: {
    //     layout: 'fullscreen',
    // },
}as ComponentMeta<typeof Input>;

//@ts-ignore
const Template: ComponentStory<typeof Input> = (args) => <Input  {...args}  />;

export const InputWithValue = Template.bind({});


InputWithValue.args = {
    // value: "test",
    //@ts-ignore
    // onChange: (e: ChangeEvent<HTMLInputElement>) => { }
};
