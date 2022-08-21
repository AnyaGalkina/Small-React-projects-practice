import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {SelectCity} from "./Select";
import {cityArr, ItemType} from "../../App";

export default {
    title: 'Select',
    component: SelectCity,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof SelectCity>;

// const callback = action("accordion mode changed: clicked")

const Template: ComponentStory<typeof SelectCity> = (args) => <SelectCity {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    city: "Dubai",
    items: cityArr,
    // onChange:{ action: 'value changed' }
    // setCity: { action: 'clicked' }
// onClickCallback:
};

// export const UncollapsedMode = Template.bind({});
// UncollapsedMode.args = {
//     title: "--Menu--",
//     collapsed: false,
//     // onClickCallback: (collapsed: boolean) => void
// }
