import React from "react";
import CharacterCard from "./CharacterCard";

export default {
    title: 'Components/CharacterCard',
    component: CharacterCard,
    argTypes: {
    },
};

const Template = (args) => <CharacterCard {...args} />
export const Default = Template.bind({});
Default.args = {
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/723.jpeg",
    imgAlt: "Label text",
    title: "PC Basketball Player",
    status: 'Alive',
    specie: 'Human',
    lastKnowLocation: "Rick’s memories",
    firstSeenIn: "The rickshank redemption",
};









