import React, {useState} from 'react';
import Accordion from './Accordion';
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
    title: 'Rating',
    component: Accordion,
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Accordion>;

// const callback = action("accordion mode changed: clicked")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: "--Menu--",
    collapsed: true,
    // onClickCallback:
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    title: "--Menu--",
    collapsed: false,
    // onClickCallback: (collapsed: boolean) => void
}



// export const ChangingRating = Template.bind({});
// const [rating, setRating] = useState(3);
// ChangingRating.args = {
//     value: rating,
//     setValue:setRating,
//     // onClick:
// };


