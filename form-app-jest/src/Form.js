import React, { useState } from 'react';

function Form({ onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({ name, email });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                  type='text'
                  id='name'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>.
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default Form;
