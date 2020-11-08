import React from 'react';

class HandlingEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            hex: ""
        }
        this.generateHexValue = this.generateHexValue.bind(this)
    }
    generateHexValue() {
        const arrHexValue = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let hexHashtagValue = "#";
        function generateRandomValue() {
            return Math.floor(Math.random() * arrHexValue.length)
        }
        for (let i = 0; i < 6; i++) {
            hexHashtagValue += arrHexValue[generateRandomValue()]
        }

        this.setState(() => {

            return {
                hex: hexHashtagValue
            }
        })
    }

    render() {
        return (
            <div className="container text-center">
                <h1>Random Hex Color Picker</h1>
                <h3 className="mb-4">Result: <span id="output">{this.state.hex}</span></h3>
                <button type="button" className="btn btn-primary" onClick={this.generateHexValue}>Generate</button>
            </div>
        )
    }
}
export default HandlingEvent