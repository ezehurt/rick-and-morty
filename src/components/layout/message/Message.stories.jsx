import React from "react";
import Message from "./Message";

export default {
    title: 'Components/Message',
    component: Message,
    argTypes: {
    },
};

const Template = (args) => <Message {...args} />
export const Default = Template.bind({});
Default.args = {
    imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-morty-season-5-finale-1631266872.jpg?crop=1.00xw:0.898xh;0,0&resize=1200:*",
    title: "Label text",
    message: "main",
};




