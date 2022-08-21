import React, {useState} from 'react';
import Rating, {RatingPropsType } from './Rating';
import {ComponentStory, ComponentMeta} from '@storybook/react';

export default {
    title: 'Rating',
    component: Rating,
        // backgroundColor: { control: 'color' },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args ) => <Rating {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    value: 0
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5
};
// export const ChangingRating = Template.bind({});
// const [rating, setRating] = useState(3);
// ChangingRating.args = {
//     value: rating,
//     setValue:setRating,
//     // onClick:
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
