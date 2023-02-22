import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Greeting from './Greeting';

function App() {
  const [user, setUser] = useState(null)

  function handleSubmit(formData) {
    setUser(formData);
  }

  return (
    <div>
      {user ? (
        <Greeting name={user.name} email={user.email} />
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
