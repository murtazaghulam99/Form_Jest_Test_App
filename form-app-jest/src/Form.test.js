import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import Form from "./Form";
test('submitting the form calls the onSubmit function with the form data', () => { 
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Form onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Ghulam Murtaza' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'ghulam.murtaza@example.com' } });
    fireEvent.click(screen.getByText('Submit'));

    expect(handleSubmit).toHaveBeenCalledWith({ name: 'Ghulam Murtaza', email: 'ghluam.murtaza@example.com' });
});
