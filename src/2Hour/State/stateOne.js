import React from 'react';

class State extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Arjay D Marquez',
            age: 21
        }
    }
    render() {
        const { name, age } = this.state;
        return (
            <div>
                <h1>Name: {name}</h1>
                <h1>Age: {age}</h1>
            </div>
        )
    }
}

export default State;