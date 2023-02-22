import React from "react";

function Greeting({ name, email }) {
    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>Your email address is {email}.</p>
        </div>
    );
}

export default Greeting;
