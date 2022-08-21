import {Clock} from "./Clock";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Clock",
    component: Clock,
    // args: {
    //     addItem: action( "Button 'add' was pressed")
    // }
} as ComponentMeta<typeof Clock>;


const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args}/>

export const ClockBaseDigitalExample = Template.bind({});

ClockBaseDigitalExample.args = {
    mode: "digital"
    // title: "Come on! edit this text! ;)",
    // onChangeTitle: action("Title changed")
};

export const ClockBaseAnalogExample = Template.bind({});

ClockBaseAnalogExample.args = {
    mode: "analog"
    // title: "Come on! edit this text! ;)",
    // onChangeTitle: action("Title changed")
};
