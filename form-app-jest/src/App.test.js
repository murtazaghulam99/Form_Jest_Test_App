import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders the Form component when there is no user data, and the Greeting component when there is user data', () => {
   const { getByText, getByLabelText } = render(<App />);

   // Renders the Form component
   expect(screen.getByLabelText('Name:')).toBeInTheDocument();
   expect(screen.getByLabelText('Email:')).toBeInTheDocument();
   fireEvent.click(screen.getByText('Submit'));

   // Renders the Greeting component
   expect(getByText('Hello, !')).toBeInTheDocument();
   expect(getByText('your email address is .')).toBeInTheDocument();
});
