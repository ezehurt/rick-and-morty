/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "./Message";


describe("Message Component Testing", () => {

    const imgSrc = "url"
    const imgAlt = "the alt"
    const title = "The title"
    const message = "Message"
    beforeEach(() => {
        render(
            <Message
                imgSrc={imgSrc}
                imgAlt={imgAlt}
                title={title}
                message={message}
            />
        );
    });

    it("Should show the title", () => {
        screen.getByText("The title");
    });
    it("Should show the message", () => {
        screen.getByText("Message");
    });
    it("Should show alt text", () => {
        screen.getByAltText("the alt");
    });

});
