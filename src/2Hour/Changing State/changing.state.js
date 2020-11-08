import React from 'react';

class ChangingState extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.inCrementOnClick = this.inCrementOnClick.bind(this);
    }
    inCrementOnClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <div className="container-sm my-3 d-flex flex-column align-items-center">
                <h2>{this.state.count}</h2>
                <button type="button" className="btn btn-primary" onClick={this.inCrementOnClick}>Count</button>
            </div>
        )
    }

}

export default ChangingState;