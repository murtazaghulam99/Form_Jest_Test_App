import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('displays the correct greeting message with the user name and email', () => {
    const { getByText } = render(<Greeting name='Ghulam Murtaza' email='ghulam.murtaza@example.com' />);

    expect(screen.getByText('Hello, Ghulam Murtaza!')).toBeInTheDocument();
    expect(screen.getByText('Your email address is ghulammurtaza@example.com')).toBeInTheDocument();
});
