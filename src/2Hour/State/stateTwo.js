import React from 'react';

class State extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: "false"
        }
    }
    render() {
        const { isLoggedIn } = this.state;
        
        let status;

        if (isLoggedIn === "false") {
            status = "in";
        } else {
            status = "out"
        }

        return (
            <div>
                <h1>You are currently logged {status} </h1>
            </div>
        )
    }
}

export default State;